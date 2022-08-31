# Getting started with typescript

## install typescript

npm i -g typescript

*note - it is assumed you already have nodejs installed (https://nodejs.org/en/)

## run ts code

create a filename with the extension "ts". When you want to test the code compile it with the "tsc" command in the terminal window

i.e. tsc index.ts

## customizing compiler
By default ts will compile to es3 which drops support of features like async await. Compile options can be edits by adding a tsconfig.json file to the project (or in the terminal directly).

## declaring variables