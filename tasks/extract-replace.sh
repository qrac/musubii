#!/bin/sh

# Paths

modePath='./src/assets/extracts/modes'

# Delete Escape

modeFiles=`find $modePath -maxdepth 4 -type f -name "*.json"`

for i in $modeFiles;
do
  replace '\\{2,}' '' $i
done

# Fix Image tag

modeHtmlFiles=`find $modePath -maxdepth 4 -type f -name _html.json`

for i in $modeHtmlFiles;
do
  replace 'img src\$= \\".svg\\"' 'img[src$=\".svg\"]' $i
done

# Fix Root

modeHtmlFiles=`find $modePath -maxdepth 4 -type f -name _root-light.json`

for i in $modeHtmlFiles;
do
  replace '\"\$--' '"--' $i
  replace '#{\$' '$' $i
  replace '}\"' '"' $i
done

modeHtmlFiles=`find $modePath -maxdepth 4 -type f -name _root-dark.json`

for i in $modeHtmlFiles;
do
  replace '\"\$--' '"--' $i
  replace '#{\$' '$' $i
  replace '}\"' '"' $i
done