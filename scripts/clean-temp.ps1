#!/usr/bin/env pwsh
[CmdletBinding()]
param(
    [Parameter()]
    [switch]$Clean,
    [Parameter()]
    [switch]$Verbose
)

# Get the repo root (where this script lives)
$repoRoot = Split-Path -Parent (Split-Path -Parent $MyInvocation.MyCommand.Path)
$tempPath = [System.IO.Path]::GetTempPath()

Write-Host "Scanning for temp files matching source files in: $repoRoot"
Write-Host "Temp directory: $tempPath"
Write-Host ""

# Get all source files we care about (ts, tsx, css, etc.)
$srcFiles = Get-ChildItem -Path "$repoRoot\src" -Recurse -Include @("*.ts", "*.tsx", "*.css", "*.scss") -File -ErrorAction SilentlyContinue

# Track matches for reporting
$matches = @()

foreach ($srcFile in $srcFiles) {
    $tempMatches = Get-ChildItem -Path $tempPath -Recurse -File -ErrorAction SilentlyContinue | 
        Where-Object { $_.Name -eq $srcFile.Name }
    
    if ($tempMatches) {
        foreach ($match in $tempMatches) {
            $matches += [PSCustomObject]@{
                SourceFile = $srcFile.FullName
                TempFile = $match.FullName
                Name = $match.Name
                LastWriteTime = $match.LastWriteTime
            }
        }
    }
}

# Report findings
if ($matches.Count -gt 0) {
    Write-Host "Found $($matches.Count) temp file(s) matching source files:"
    Write-Host ""
    
    foreach ($match in $matches) {
        Write-Host "Source: $($match.Name)"
        if ($Verbose) {
            Write-Host "  From: $($match.SourceFile)"
            Write-Host "  Temp: $($match.TempFile)"
            Write-Host "  Modified: $($match.LastWriteTime)"
        } else {
            Write-Host "  At: $($match.TempFile)"
        }
        Write-Host ""
    }

    # Clean if requested
    if ($Clean) {
        Write-Host "Cleaning temp files..."
        foreach ($match in $matches) {
            try {
                Remove-Item $match.TempFile -Force -ErrorAction Stop
                Write-Host "  Removed: $($match.TempFile)"
            } catch {
                Write-Warning "  Failed to remove: $($match.TempFile)"
                Write-Warning "  Error: $_"
            }
        }
    } else {
        Write-Host "Run with -Clean to remove these temp files"
    }
} else {
    Write-Host "No matching temp files found"
}