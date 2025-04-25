@echo off

REM Set the project path to the directory of the batch file
set PROJECT_PATH=%~dp0

REM Navigate to the project directory
cd /d %PROJECT_PATH%/frontend

REM Log the run history
echo Running application at %date% %time% >> frontendRun.log

REM Run the Spring Boot application using Maven
npm start
if %ERRORLEVEL% neq 0 (
    echo Error: Failed to run the Spring Boot application using Maven. >> frontendRun.log
    echo Error: Failed to run the Spring Boot application using Maven.
    pause
    exit /b %ERRORLEVEL%
)

echo Application started successfully. >> run.log
echo Application started successfully.
pause