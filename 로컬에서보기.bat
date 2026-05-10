@echo off
chcp 65001 >nul
cd /d "%~dp0"
title 살방살방 로컬 미리보기
echo.
echo [살방살방] 빌드 후 브라우저로 미리보기를 엽니다.
echo 주소: http://127.0.0.1:4321/salbang-diary/  (저장소 이름이 다르면 마지막 경로만 바꿔 확인하세요)
echo 종료: 이 창에서 Ctrl+C 후 창을 닫으면 됩니다.
echo.
where npm >nul 2>nul
if errorlevel 1 (
  echo npm 을 찾을 수 없습니다. Node.js LTS를 설치한 뒤 다시 실행하세요.
  pause
  exit /b 1
)
call npm run preview:local
pause
