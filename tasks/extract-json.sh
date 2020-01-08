#!/bin/sh

# Paths

importPath='./src/assets/extracts/.temp/settings/'
simpleTempPath='./src/assets/extracts/.temp/simple'
simplePath='./src/assets/extracts/modes/simple'
lightTempPath='./src/assets/extracts/.temp/light'
lightPath='./src/assets/extracts/modes/light'
###darkTempPath='./src/assets/extracts/.temp/dark'
###darkPath='./src/assets/extracts/modes/dark'

# Extract Simple

mkdir -p "$simplePath/configs/variables"

sass-export "$simpleTempPath/configs/variables/_option.scss" -o "$simplePath/configs/variables/_option.json" -d "$importPath"
sass-export "$simpleTempPath/configs/variables/_breakpoint.scss" -o "$simplePath/configs/variables/_breakpoint.json" -d "$importPath"
sass-export "$simpleTempPath/configs/variables/_color.scss" -o "$simplePath/configs/variables/_color.json" -d "$importPath"
sass-export "$simpleTempPath/configs/variables/_font.scss" -o "$simplePath/configs/variables/_font.json" -d "$importPath"
sass-export "$simpleTempPath/configs/variables/_radius.scss" -o "$simplePath/configs/variables/_radius.json" -d "$importPath"
sass-export "$simpleTempPath/configs/variables/_shadow.scss" -o "$simplePath/configs/variables/_shadow.json" -d "$importPath"
sass-export "$simpleTempPath/configs/variables/_space.scss" -o "$simplePath/configs/variables/_space.json" -d "$importPath"
sass-export "$simpleTempPath/configs/variables/_global.scss" -o "$simplePath/configs/variables/_global.json" -d "$importPath"

mkdir -p "$simplePath/configs/mixins"

sass-export "$simpleTempPath/configs/mixins/_mediaquery.scss" -o "$simplePath/configs/mixins/_mediaquery.json" -d "$importPath"
sass-export "$simpleTempPath/configs/mixins/_placeholder.scss" -o "$simplePath/configs/mixins/_placeholder.json" -d "$importPath"
sass-export "$simpleTempPath/configs/mixins/_safearea.scss" -o "$simplePath/configs/mixins/_safearea.json" -d "$importPath"
sass-export "$simpleTempPath/configs/mixins/_generate.scss" -o "$simplePath/configs/mixins/_generate.json" -d "$importPath"

mkdir -p "$simplePath/configs/themes"

sass-export "$simpleTempPath/configs/themes/_theme-common.scss" -o "$simplePath/configs/themes/_theme-common.json" -d "$importPath"
sass-export "$simpleTempPath/configs/themes/_theme-light.scss" -o "$simplePath/configs/themes/_theme-light.json" -d "$importPath"
sass-export "$simpleTempPath/configs/themes/_theme-dark.scss" -o "$simplePath/configs/themes/_theme-dark.json" -d "$importPath"
sass-export "$simpleTempPath/configs/themes/_convert.scss" -o "$simplePath/configs/themes/_convert.json" -d "$importPath"

mkdir -p "$simplePath/styles/bases"

sass-export "$simpleTempPath/styles/bases/_root-light.scss" -o "$simplePath/styles/bases/_root-light.json" -d "$importPath"
sass-export "$simpleTempPath/styles/bases/_root-dark.scss" -o "$simplePath/styles/bases/_root-dark.json" -d "$importPath"
sass-export "$simpleTempPath/styles/bases/_reset.scss" -o "$simplePath/styles/bases/_reset.json" -d "$importPath"
sass-export "$simpleTempPath/styles/bases/_html.scss" -o "$simplePath/styles/bases/_html.json" -d "$importPath"

mkdir -p "$simplePath/styles/layouts"

sass-export "$simpleTempPath/styles/layouts/_section.scss" -o "$simplePath/styles/layouts/_section.json" -d "$importPath"
sass-export "$simpleTempPath/styles/layouts/_grid.scss" -o "$simplePath/styles/layouts/_grid.json" -d "$importPath"
sass-export "$simpleTempPath/styles/layouts/_box.scss" -o "$simplePath/styles/layouts/_box.json" -d "$importPath"
sass-export "$simpleTempPath/styles/layouts/_card.scss" -o "$simplePath/styles/layouts/_card.json" -d "$importPath"
sass-export "$simpleTempPath/styles/layouts/_joint.scss" -o "$simplePath/styles/layouts/_joint.json" -d "$importPath"

mkdir -p "$simplePath/styles/elements"

sass-export "$simpleTempPath/styles/elements/_text.scss" -o "$simplePath/styles/elements/_text.json" -d "$importPath"
sass-export "$simpleTempPath/styles/elements/_button.scss" -o "$simplePath/styles/elements/_button.json" -d "$importPath"
sass-export "$simpleTempPath/styles/elements/_badge.scss" -o "$simplePath/styles/elements/_badge.json" -d "$importPath"
sass-export "$simpleTempPath/styles/elements/_list.scss" -o "$simplePath/styles/elements/_list.json" -d "$importPath"
sass-export "$simpleTempPath/styles/elements/_table.scss" -o "$simplePath/styles/elements/_table.json" -d "$importPath"
sass-export "$simpleTempPath/styles/elements/_form.scss" -o "$simplePath/styles/elements/_form.json" -d "$importPath"
sass-export "$simpleTempPath/styles/elements/_iframe.scss" -o "$simplePath/styles/elements/_iframe.json" -d "$importPath"
sass-export "$simpleTempPath/styles/elements/_icon.scss" -o "$simplePath/styles/elements/_icon.json" -d "$importPath"
sass-export "$simpleTempPath/styles/elements/_alert.scss" -o "$simplePath/styles/elements/_alert.json" -d "$importPath"
sass-export "$simpleTempPath/styles/elements/_wysiwyg.scss" -o "$simplePath/styles/elements/_wysiwyg.json" -d "$importPath"

mkdir -p "$simplePath/styles/utilities"

sass-export "$simpleTempPath/styles/utilities/_display.scss" -o "$simplePath/styles/utilities/_display.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_size.scss" -o "$simplePath/styles/utilities/_size.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_flex.scss" -o "$simplePath/styles/utilities/_flex.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_space.scss" -o "$simplePath/styles/utilities/_space.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_margin.scss" -o "$simplePath/styles/utilities/_margin.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_padding.scss" -o "$simplePath/styles/utilities/_padding.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_centering.scss" -o "$simplePath/styles/utilities/_centering.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_overflow.scss" -o "$simplePath/styles/utilities/_overflow.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_scroll.scss" -o "$simplePath/styles/utilities/_scroll.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_ellipsis.scss" -o "$simplePath/styles/utilities/_ellipsis.json" -d "$importPath"
sass-export "$simpleTempPath/styles/utilities/_clearfix.scss" -o "$simplePath/styles/utilities/_clearfix.json" -d "$importPath"

# Extract Light

###mkdir -p "$lightPath/configs/variables"

###sass-export "$lightTempPath/configs/variables/_option.scss" -o "$lightPath/configs/variables/_option.json" -d "$importPath"
###sass-export "$lightTempPath/configs/variables/_breakpoint.scss" -o "$lightPath/configs/variables/_breakpoint.json" -d "$importPath"
###sass-export "$lightTempPath/configs/variables/_color.scss" -o "$lightPath/configs/variables/_color.json" -d "$importPath"
###sass-export "$lightTempPath/configs/variables/_font.scss" -o "$lightPath/configs/variables/_font.json" -d "$importPath"
###sass-export "$lightTempPath/configs/variables/_radius.scss" -o "$lightPath/configs/variables/_radius.json" -d "$importPath"
###sass-export "$lightTempPath/configs/variables/_shadow.scss" -o "$lightPath/configs/variables/_shadow.json" -d "$importPath"
###sass-export "$lightTempPath/configs/variables/_space.scss" -o "$lightPath/configs/variables/_space.json" -d "$importPath"
###sass-export "$lightTempPath/configs/variables/_global.scss" -o "$lightPath/configs/variables/_global.json" -d "$importPath"

###mkdir -p "$lightPath/configs/mixins"

###sass-export "$lightTempPath/configs/mixins/_mediaquery.scss" -o "$lightPath/configs/mixins/_mediaquery.json" -d "$importPath"
###sass-export "$lightTempPath/configs/mixins/_placeholder.scss" -o "$lightPath/configs/mixins/_placeholder.json" -d "$importPath"
###sass-export "$lightTempPath/configs/mixins/_safearea.scss" -o "$lightPath/configs/mixins/_safearea.json" -d "$importPath"
###sass-export "$lightTempPath/configs/mixins/_generate.scss" -o "$lightPath/configs/mixins/_generate.json" -d "$importPath"

mkdir -p "$lightPath/configs/themes"

###sass-export "$lightTempPath/configs/themes/_theme-common.scss" -o "$lightPath/configs/themes/_theme-common.json" -d "$importPath"
###sass-export "$lightTempPath/configs/themes/_theme-light.scss" -o "$lightPath/configs/themes/_theme-light.json" -d "$importPath"
###sass-export "$lightTempPath/configs/themes/_theme-dark.scss" -o "$lightPath/configs/themes/_theme-dark.json" -d "$importPath"
sass-export "$lightTempPath/configs/themes/_convert.scss" -o "$lightPath/configs/themes/_convert.json" -d "$importPath"

mkdir -p "$lightPath/styles/bases"

###sass-export "$lightTempPath/styles/bases/_root-light.scss" -o "$lightPath/styles/bases/_root-light.json" -d "$importPath"
###sass-export "$lightTempPath/styles/bases/_root-dark.scss" -o "$lightPath/styles/bases/_root-dark.json" -d "$importPath"
###sass-export "$lightTempPath/styles/bases/_reset.scss" -o "$lightPath/styles/bases/_reset.json" -d "$importPath"
sass-export "$lightTempPath/styles/bases/_html.scss" -o "$lightPath/styles/bases/_html.json" -d "$importPath"

mkdir -p "$lightPath/styles/layouts"

###sass-export "$lightTempPath/styles/layouts/_section.scss" -o "$lightPath/styles/layouts/_section.json" -d "$importPath"
###sass-export "$lightTempPath/styles/layouts/_grid.scss" -o "$lightPath/styles/layouts/_grid.json" -d "$importPath"
sass-export "$lightTempPath/styles/layouts/_box.scss" -o "$lightPath/styles/layouts/_box.json" -d "$importPath"
sass-export "$lightTempPath/styles/layouts/_card.scss" -o "$lightPath/styles/layouts/_card.json" -d "$importPath"
###sass-export "$lightTempPath/styles/layouts/_joint.scss" -o "$lightPath/styles/layouts/_joint.json" -d "$importPath"

mkdir -p "$lightPath/styles/elements"

sass-export "$lightTempPath/styles/elements/_text.scss" -o "$lightPath/styles/elements/_text.json" -d "$importPath"
sass-export "$lightTempPath/styles/elements/_button.scss" -o "$lightPath/styles/elements/_button.json" -d "$importPath"
sass-export "$lightTempPath/styles/elements/_badge.scss" -o "$lightPath/styles/elements/_badge.json" -d "$importPath"
###sass-export "$lightTempPath/styles/elements/_list.scss" -o "$lightPath/styles/elements/_list.json" -d "$importPath"
sass-export "$lightTempPath/styles/elements/_table.scss" -o "$lightPath/styles/elements/_table.json" -d "$importPath"
sass-export "$lightTempPath/styles/elements/_form.scss" -o "$lightPath/styles/elements/_form.json" -d "$importPath"
###sass-export "$lightTempPath/styles/elements/_iframe.scss" -o "$lightPath/styles/elements/_iframe.json" -d "$importPath"
###sass-export "$lightTempPath/styles/elements/_icon.scss" -o "$lightPath/styles/elements/_icon.json" -d "$importPath"
sass-export "$lightTempPath/styles/elements/_alert.scss" -o "$lightPath/styles/elements/_alert.json" -d "$importPath"
sass-export "$lightTempPath/styles/elements/_wysiwyg.scss" -o "$lightPath/styles/elements/_wysiwyg.json" -d "$importPath"

###mkdir -p "$lightPath/styles/utilities"

###sass-export "$lightTempPath/styles/utilities/_display.scss" -o "$lightPath/styles/utilities/_display.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_size.scss" -o "$lightPath/styles/utilities/_size.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_flex.scss" -o "$lightPath/styles/utilities/_flex.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_space.scss" -o "$lightPath/styles/utilities/_space.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_margin.scss" -o "$lightPath/styles/utilities/_margin.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_padding.scss" -o "$lightPath/styles/utilities/_padding.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_centering.scss" -o "$lightPath/styles/utilities/_centering.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_overflow.scss" -o "$lightPath/styles/utilities/_overflow.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_scroll.scss" -o "$lightPath/styles/utilities/_scroll.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_ellipsis.scss" -o "$lightPath/styles/utilities/_ellipsis.json" -d "$importPath"
###sass-export "$lightTempPath/styles/utilities/_clearfix.scss" -o "$lightPath/styles/utilities/_clearfix.json" -d "$importPath"