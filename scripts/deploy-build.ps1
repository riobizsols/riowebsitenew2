# RIOBizSols - Production build script for deployment
# Run from project root: .\scripts\deploy-build.ps1

$ErrorActionPreference = "Stop"
$root = Split-Path -Parent $PSScriptRoot
Set-Location $root

Write-Host "Building React app..." -ForegroundColor Cyan
npm run build
if ($LASTEXITCODE -ne 0) { exit $LASTEXITCODE }

Write-Host "`nProduction build complete." -ForegroundColor Green
Write-Host "`nUpload to your server:" -ForegroundColor Yellow
Write-Host "  1. Folder: build\" 
Write-Host "  2. Folder: Backend\ (entire folder)"
Write-Host "`nOn the server, ensure 'build' and 'Backend' are in the same parent directory."
Write-Host "Then: cd Backend && npm install --production && npm run start:prod"
Write-Host "`nSee DEPLOYMENT.md for full steps and Nginx/PM2 setup."
