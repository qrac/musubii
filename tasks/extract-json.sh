#!/bin/sh

# Paths

importPath='./src/assets/extracts/.temp/settings/'
staticLightTempPath='./src/assets/extracts/.temp/static-light'
staticLightPath='./src/assets/extracts/modes/static-light'
dynamicLightTempPath='./src/assets/extracts/.temp/dynamic-light'
dynamicLightPath='./src/assets/extracts/modes/dynamic-light'

# Extract Static Light

mkdir -p "$staticLightPath/configs/variables"

sass-export "$staticLightTempPath/configs/variables/_option.scss" -o "$staticLightPath/configs/variables/_option.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/variables/_breakpoint.scss" -o "$staticLightPath/configs/variables/_breakpoint.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/variables/_color.scss" -o "$staticLightPath/configs/variables/_color.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/variables/_font.scss" -o "$staticLightPath/configs/variables/_font.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/variables/_radius.scss" -o "$staticLightPath/configs/variables/_radius.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/variables/_meter.scss" -o "$staticLightPath/configs/variables/_meter.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/variables/_global.scss" -o "$staticLightPath/configs/variables/_global.json" -d "$importPath"

mkdir -p "$staticLightPath/configs/mixins"

sass-export "$staticLightTempPath/configs/mixins/_mediaquery.scss" -o "$staticLightPath/configs/mixins/_mediaquery.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/mixins/_placeholder.scss" -o "$staticLightPath/configs/mixins/_placeholder.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/mixins/_safearea.scss" -o "$staticLightPath/configs/mixins/_safearea.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/mixins/_generate.scss" -o "$staticLightPath/configs/mixins/_generate.json" -d "$importPath"

mkdir -p "$staticLightPath/configs/themes"

sass-export "$staticLightTempPath/configs/themes/_theme-common.scss" -o "$staticLightPath/configs/themes/_theme-common.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/themes/_theme-light.scss" -o "$staticLightPath/configs/themes/_theme-light.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/themes/_theme-dark.scss" -o "$staticLightPath/configs/themes/_theme-dark.json" -d "$importPath"
sass-export "$staticLightTempPath/configs/themes/_convert.scss" -o "$staticLightPath/configs/themes/_convert.json" -d "$importPath"

mkdir -p "$staticLightPath/styles/bases"

sass-export "$staticLightTempPath/styles/bases/_root-light.scss" -o "$staticLightPath/styles/bases/_root-light.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/bases/_root-dark.scss" -o "$staticLightPath/styles/bases/_root-dark.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/bases/_reset.scss" -o "$staticLightPath/styles/bases/_reset.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/bases/_html.scss" -o "$staticLightPath/styles/bases/_html.json" -d "$importPath"

mkdir -p "$staticLightPath/styles/layouts"

sass-export "$staticLightTempPath/styles/layouts/_section.scss" -o "$staticLightPath/styles/layouts/_section.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/layouts/_grid.scss" -o "$staticLightPath/styles/layouts/_grid.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/layouts/_card.scss" -o "$staticLightPath/styles/layouts/_card.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/layouts/_box.scss" -o "$staticLightPath/styles/layouts/_box.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/layouts/_joint.scss" -o "$staticLightPath/styles/layouts/_joint.json" -d "$importPath"

mkdir -p "$staticLightPath/styles/elements"

sass-export "$staticLightTempPath/styles/elements/_text.scss" -o "$staticLightPath/styles/elements/_text.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/elements/_button.scss" -o "$staticLightPath/styles/elements/_button.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/elements/_badge.scss" -o "$staticLightPath/styles/elements/_badge.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/elements/_list.scss" -o "$staticLightPath/styles/elements/_list.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/elements/_table.scss" -o "$staticLightPath/styles/elements/_table.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/elements/_form.scss" -o "$staticLightPath/styles/elements/_form.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/elements/_iframe.scss" -o "$staticLightPath/styles/elements/_iframe.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/elements/_icon.scss" -o "$staticLightPath/styles/elements/_icon.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/elements/_alert.scss" -o "$staticLightPath/styles/elements/_alert.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/elements/_wysiwyg.scss" -o "$staticLightPath/styles/elements/_wysiwyg.json" -d "$importPath"

mkdir -p "$staticLightPath/styles/utilities"

sass-export "$staticLightTempPath/styles/utilities/_display.scss" -o "$staticLightPath/styles/utilities/_display.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/utilities/_size.scss" -o "$staticLightPath/styles/utilities/_size.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/utilities/_flex.scss" -o "$staticLightPath/styles/utilities/_flex.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/utilities/_space.scss" -o "$staticLightPath/styles/utilities/_space.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/utilities/_margin.scss" -o "$staticLightPath/styles/utilities/_margin.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/utilities/_padding.scss" -o "$staticLightPath/styles/utilities/_padding.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/utilities/_overflow.scss" -o "$staticLightPath/styles/utilities/_overflow.json" -d "$importPath"
sass-export "$staticLightTempPath/styles/utilities/_clearfix.scss" -o "$staticLightPath/styles/utilities/_clearfix.json" -d "$importPath"

# Extract Dynamic Light

#mkdir -p "$dynamicLightPath/configs/variables"

#sass-export "$dynamicLightTempPath/configs/variables/_option.scss" -o "$dynamicLightPath/configs/variables/_option.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/variables/_breakpoint.scss" -o "$dynamicLightPath/configs/variables/_breakpoint.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/variables/_color.scss" -o "$dynamicLightPath/configs/variables/_color.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/variables/_font.scss" -o "$dynamicLightPath/configs/variables/_font.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/variables/_radius.scss" -o "$dynamicLightPath/configs/variables/_radius.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/variables/_meter.scss" -o "$dynamicLightPath/configs/variables/_meter.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/variables/_global.scss" -o "$dynamicLightPath/configs/variables/_global.json" -d "$importPath"

#mkdir -p "$dynamicLightPath/configs/mixins"

#sass-export "$dynamicLightTempPath/configs/mixins/_mediaquery.scss" -o "$dynamicLightPath/configs/mixins/_mediaquery.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/mixins/_placeholder.scss" -o "$dynamicLightPath/configs/mixins/_placeholder.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/mixins/_safearea.scss" -o "$dynamicLightPath/configs/mixins/_safearea.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/mixins/_generate.scss" -o "$dynamicLightPath/configs/mixins/_generate.json" -d "$importPath"

mkdir -p "$dynamicLightPath/configs/themes"

#sass-export "$dynamicLightTempPath/configs/themes/_theme-common.scss" -o "$dynamicLightPath/configs/themes/_theme-common.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/themes/_theme-light.scss" -o "$dynamicLightPath/configs/themes/_theme-light.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/configs/themes/_theme-dark.scss" -o "$dynamicLightPath/configs/themes/_theme-dark.json" -d "$importPath"
sass-export "$dynamicLightTempPath/configs/themes/_convert.scss" -o "$dynamicLightPath/configs/themes/_convert.json" -d "$importPath"

mkdir -p "$dynamicLightPath/styles/bases"

#sass-export "$dynamicLightTempPath/styles/bases/_root-light.scss" -o "$dynamicLightPath/styles/bases/_root-light.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/bases/_root-dark.scss" -o "$dynamicLightPath/styles/bases/_root-dark.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/bases/_reset.scss" -o "$dynamicLightPath/styles/bases/_reset.json" -d "$importPath"
sass-export "$dynamicLightTempPath/styles/bases/_html.scss" -o "$dynamicLightPath/styles/bases/_html.json" -d "$importPath"

mkdir -p "$dynamicLightPath/styles/layouts"

#sass-export "$dynamicLightTempPath/styles/layouts/_section.scss" -o "$dynamicLightPath/styles/layouts/_section.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/layouts/_grid.scss" -o "$dynamicLightPath/styles/layouts/_grid.json" -d "$importPath"
sass-export "$dynamicLightTempPath/styles/layouts/_card.scss" -o "$dynamicLightPath/styles/layouts/_card.json" -d "$importPath"
sass-export "$dynamicLightTempPath/styles/layouts/_box.scss" -o "$dynamicLightPath/styles/layouts/_box.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/layouts/_joint.scss" -o "$dynamicLightPath/styles/layouts/_joint.json" -d "$importPath"

mkdir -p "$dynamicLightPath/styles/elements"

sass-export "$dynamicLightTempPath/styles/elements/_text.scss" -o "$dynamicLightPath/styles/elements/_text.json" -d "$importPath"
sass-export "$dynamicLightTempPath/styles/elements/_button.scss" -o "$dynamicLightPath/styles/elements/_button.json" -d "$importPath"
sass-export "$dynamicLightTempPath/styles/elements/_badge.scss" -o "$dynamicLightPath/styles/elements/_badge.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/elements/_list.scss" -o "$dynamicLightPath/styles/elements/_list.json" -d "$importPath"
sass-export "$dynamicLightTempPath/styles/elements/_table.scss" -o "$dynamicLightPath/styles/elements/_table.json" -d "$importPath"
sass-export "$dynamicLightTempPath/styles/elements/_form.scss" -o "$dynamicLightPath/styles/elements/_form.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/elements/_iframe.scss" -o "$dynamicLightPath/styles/elements/_iframe.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/elements/_icon.scss" -o "$dynamicLightPath/styles/elements/_icon.json" -d "$importPath"
sass-export "$dynamicLightTempPath/styles/elements/_alert.scss" -o "$dynamicLightPath/styles/elements/_alert.json" -d "$importPath"
sass-export "$dynamicLightTempPath/styles/elements/_wysiwyg.scss" -o "$dynamicLightPath/styles/elements/_wysiwyg.json" -d "$importPath"

#mkdir -p "$dynamicLightPath/styles/utilities"

#sass-export "$dynamicLightTempPath/styles/utilities/_display.scss" -o "$dynamicLightPath/styles/utilities/_display.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/utilities/_size.scss" -o "$dynamicLightPath/styles/utilities/_size.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/utilities/_flex.scss" -o "$dynamicLightPath/styles/utilities/_flex.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/utilities/_space.scss" -o "$dynamicLightPath/styles/utilities/_space.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/utilities/_margin.scss" -o "$dynamicLightPath/styles/utilities/_margin.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/utilities/_padding.scss" -o "$dynamicLightPath/styles/utilities/_padding.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/utilities/_overflow.scss" -o "$dynamicLightPath/styles/utilities/_overflow.json" -d "$importPath"
#sass-export "$dynamicLightTempPath/styles/utilities/_clearfix.scss" -o "$dynamicLightPath/styles/utilities/_clearfix.json" -d "$importPath"