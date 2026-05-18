@echo off
cd /d "%~dp0"
title salbang-diary preview
echo.
echo Building, then opening preview in your browser.
echo URL: http://127.0.0.1:4321/salbang-diary/
echo If your repo name differs, change the path after the port.
echo Press Ctrl+C in this window to stop the server.
echo.
where npm >nul 2>nul
if errorlevel 1 (
  echo npm not found. Install Node.js LTS, then run this again.
  pause
  exit /b 1
)
call npm run preview:local
pause
