@echo off
chcp 65001 > nul
cd /d "e:\@Ai Projects\فروشگاه لوازم آرایشی مشابه دیجی کالا"
node_modules\.bin\tsc.cmd --noEmit > e:\_tsc.txt 2>&1
echo TSC_EXIT=%errorlevel% >> e:\_tsc.txt
node_modules\.bin\vite.cmd build > e:\_build.txt 2>&1
echo BUILD_EXIT=%errorlevel% >> e:\_build.txt
echo DONE >> e:\_build.txt
