# Getting started with typescript

## install typescript

npm i -g typescript

note* - it is assumed you already have nodejs installed (https://nodejs.org/en/)

## run ts code

create a filename with the extension "ts". When you want to test the code compile it with the "tsc" command in the terminal window

i.e. tsc index.ts

## customizing compiler
By default ts will compile to es3 which drops support of features like async await. Compile options can be edits by adding a tsconfig.json file to the project (or in the terminal directly).

note* - tsconfig did not recompile for me automatically without having tsc -w prompted in the terminal

## benefits of typscripts
Catches errors while writing code opposed to when testing code. Enables implicit and explicit methods of defining data types for variables. Adds tuples as a data type.

## sources
https://www.youtube.com/watch?v=ahCwqrYpIuM