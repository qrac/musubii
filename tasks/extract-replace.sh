#!/bin/sh

# Paths

modePath='./src/assets/extracts/modes'

# Delete Escape

modeFiles=`find $modePath -maxdepth 4 -type f -name "*.json"`

for i in $modeFiles;
do
  replace '\\{2,}' '' $i
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

# Fix HTML

modeHtmlFiles=`find $modePath -maxdepth 4 -type f -name _html.json`

for i in $modeHtmlFiles;
do
  replace 'img src\$= \\".svg\\"' 'img[src$=\".svg\"]' $i
done

# Fix List

modeHtmlFiles=`find $modePath -maxdepth 4 -type f -name _list.json`

for i in $modeHtmlFiles;
do
  replace '\\"203B\\", \\"\"' '\"203B\", \"\\\"' $i
done

# Fix Alert

modeHtmlFiles=`find $modePath -maxdepth 4 -type f -name _alert.json`

for i in $modeHtmlFiles;
do
  replace 'class\*= \\"is-tail-\\"' '[class*=\"is-tail-\"]' $i
  replace 'class\*= \\"is-tail-top-\\"' '[class*=\"is-tail-top-\"]' $i
  replace 'class\*= \\"is-tail-right-\\"' '[class*=\"is-tail-right-\"]' $i
  replace 'class\*= \\"is-tail-bottom-\\"' '[class*=\"is-tail-bottom-\"]' $i
  replace 'class\*= \\"is-tail-left-\\"' '[class*=\"is-tail-left-\"]' $i
done