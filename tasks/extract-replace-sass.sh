#!/bin/sh

# Paths

simpleTempPath='./src/assets/extracts/.temp/simple'

# Include CSS Variables (Light)

lightVariables="$simpleTempPath/styles/bases/_root-light.scss"

replace '//xxxx' '' $lightVariables
replace '//yyyy' '$' $lightVariables

# Include CSS Variables (Dark)

darkVariables="$simpleTempPath/styles/bases/_root-dark.scss"

replace '//xxxx' '' $darkVariables
replace '//yyyy' '$' $darkVariables