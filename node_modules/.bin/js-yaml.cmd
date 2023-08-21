@IF EXIST "%~dp0\node.exe" (
  "%~dp0\node.exe"  "%~dp0\..\@eslint\eslintrc\node_modules\js-yaml\bin\js-yaml.js" %*
) ELSE (
  @SETLOCAL
  @SET PATHEXT=%PATHEXT:;.JS;=;%
  node  "%~dp0\..\@eslint\eslintrc\node_modules\js-yaml\bin\js-yaml.js" %*
)