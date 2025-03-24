#!/bin/bash

DEBUG="${DEBUG:-"${DEBUG:modernpoacher*}"}"
node -e 'import("./transform.mjs").then(({ default: transform }) => transform())'
