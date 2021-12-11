#!/usr/bin/env bash
#         find all data-cy attribute in src | select values |
SRC_SELECTORS=$(grep -hro 'data-cy="[^"]*"' trelloapp/src | cut -d \" -f2 | sort | uniq)

echo $SRC_SELECTORS | sed "s/ /'\n| '/g; s/^/&export type Selectors = \n| '/; s/.$/&'/;" | cat > cypress/support/@types/selectors.d.ts