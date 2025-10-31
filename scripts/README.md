# Scripts

This directory contains utility scripts for the project.

## clean-temp.ps1

A PowerShell script to scan for and optionally clean temporary files that match source files in the project.

### Usage

```powershell
# Just scan and report temp files (safe, no changes)
./scripts/clean-temp.ps1

# Show detailed info about temp files
./scripts/clean-temp.ps1 -Verbose

# Remove matching temp files
./scripts/clean-temp.ps1 -Clean
```

The script:
- Scans your src/ directory for source files (.ts, .tsx, .css, .scss)
- Looks for files with matching names in your temp directory
- Reports what it finds
- Optionally removes the temp files if run with `-Clean`

### Safety Features

- Report-only by default (won't delete anything unless `-Clean` is specified)
- Only matches files that share names with your source files
- Provides detailed logging of what it finds and what it does
- Shows warnings if any clean operations fail