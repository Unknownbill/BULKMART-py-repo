#!/usr/bin/env pwsh

# Parameters
param(
    [switch]$Clean
)

$repoRoot = $PWD
$tempPath = [System.IO.Path]::GetTempPath()

Write-Host "Scanning for temp copies in: $tempPath"
Write-Host "Matching against files in: $repoRoot\src"
Write-Host ""

# Get source files
$srcFiles = Get-ChildItem -Path "$repoRoot\src" -Recurse -Include "*.ts","*.tsx","*.css" -File
$foundTemp = $false

foreach ($src in $srcFiles) {
    $tempMatches = Get-ChildItem -Path $tempPath -File | Where-Object { $_.Name -eq $src.Name }
    
    if ($tempMatches) {
        $foundTemp = $true
        foreach ($temp in $tempMatches) {
            Write-Host "Found temp copy of: $($src.Name)"
            Write-Host "  Source: $($src.FullName)"
            Write-Host "  Temp:   $($temp.FullName)"
            Write-Host "  Modified: $($temp.LastWriteTime)"
            Write-Host ""
            
            if ($Clean) {
                try {
                    Remove-Item $temp.FullName -Force
                    Write-Host "  Removed temp file successfully"
                } catch {
                    Write-Warning "  Failed to remove temp file: $_"
                }
                Write-Host ""
            }
        }
    }
}

if (-not $foundTemp) {
    Write-Host "No temporary copies found"
} elseif (-not $Clean) {
    Write-Host "Run with -Clean to remove temp files:"
    Write-Host "  .\scripts\scan-temps.ps1 -Clean"
}