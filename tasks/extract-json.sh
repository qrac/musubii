#!/bin/sh

# Paths

importSettingPath='./src/assets/extracts/.temp/settings/'
simpleTempPath='./src/assets/extracts/.temp/simple'
simplePath='./src/assets/extracts/mode/simple'
lightTempPath='./src/assets/extracts/.temp/light'
lightPath='./src/assets/extracts/mode/light'
darkTempPath='./src/assets/extracts/.temp/dark'
darkPath='./src/assets/extracts/mode/dark'

# Extract Simple

mkdir -p "$simplePath/configs/variables"

sass-export "$simpleTempPath/configs/variables/_breakpoint.scss" -o "$simplePath/configs/variables/breakpoint.json" -d "$importSettingPath" -a