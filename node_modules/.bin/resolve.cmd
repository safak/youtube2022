@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\eslint-plugin-react\node_modules\resolve\bin\resolve" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\eslint-plugin-react\node_modules\resolve\bin\resolve" %*
)