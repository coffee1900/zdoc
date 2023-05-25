## 基本使用

```bash
@REM 这是注释
@REM cmd 表示打开cmd窗口
@REM /k 表示运行完成后不关闭窗口
@REM 如果执行完成要关闭窗口，则使用 /c

@REM cmd /k "cd /d C:\Users\15735\Documents\projects\deehero_erp\ruoyi-ui&&npm run dev"

@REM 打开cmd窗口&切换到ruoyi-ui目录下&用vscode打开ruoyi-ui文件夹&运行项目
@REM cmd /k "cd /d C:\Users\15735\Documents\projects\deehero_erp\ruoyi-ui && code . && npm run dev"

@REM 打开cmd窗口&切换到ruoyi-ui目录下&用vscode打开ruoyi-ui文件夹
start cmd /c "cd /d C:\Users\15735\Documents\projects\deehero_erp\ruoyi-ui && code ."
start cmd /k "cd /d C:\Users\15735\Documents\projects\deehero_erp\ruoyi-ui && npm run dev"
```
