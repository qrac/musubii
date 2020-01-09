#!/bin/sh

# Paths

extractTemplatePath='./src/assets/extracts/templates'
settingTempPath='./src/assets/extracts/.temp/settings'
staticLightTempPath='./src/assets/extracts/.temp/static-light'
dynamicLightTempPath='./src/assets/extracts/.temp/dynamic-light'

# Copy All

cpx './src/scss/configs/**/!(_import.scss)' $settingTempPath
cpx './src/assets/extracts/switchings/**/*' "$settingTempPath/switchings"
cpx './src/scss/**/!(musubii.scss|_import.scss)' $staticLightTempPath
cpx './src/scss/**/!(musubii.scss|_import.scss)' $dynamicLightTempPath

# Setting Static Light

staticLightTempFiles=`find $staticLightTempPath -maxdepth 3 -type f -name *.scss`

for i in $staticLightTempFiles;
do
  concat -o $i "$extractTemplatePath/template-mode-static-light.scss" $i
done

# Setting Dynamic Light

dynamicLightTempFiles=`find $dynamicLightTempPath -maxdepth 3 -type f -name *.scss`

for i in $dynamicLightTempFiles;
do
  concat -o $i "$extractTemplatePath/template-mode-dynamic-light.scss" $i
done

# Attached Root Light

rootLightFiles=`find $staticLightTempPath -maxdepth 3 -type f -name _root-light.scss`

for i in $rootLightFiles;
do
  concat -o $i $i "$extractTemplatePath/template-attached-root-light.scss"
done

# Attached Root Dark

rootDarkFiles=`find $staticLightTempPath -maxdepth 3 -type f -name _root-dark.scss`

for i in $rootDarkFiles;
do
  concat -o $i $i "$extractTemplatePath/template-attached-root-dark.scss"
done

# Fix Static Light Convert

staticLightConvertFiles=`find $staticLightTempPath -maxdepth 3 -type f -name _convert.scss`

for i in $staticLightConvertFiles;
do
  replace '\/\/ \/ CSS Variables' '/* @sass-export-section="not-used-variables" */' $i
  replace '\/\/ \/ Theme Default - Light' '//@end-sass-export-section' $i
done

# Fix Dynamic Light Convert

dynamicLightConvertFiles=`find $dynamicLightTempPath -maxdepth 3 -type f -name _convert.scss`

for i in $dynamicLightConvertFiles;
do
  replace '\/\/ \/ Theme Default - Dark' '/* @sass-export-section="not-used-variables" */' $i
done