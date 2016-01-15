import { createSelector } from 'reselect'
import R from 'ramda'

// ------------------------------------
// Settings
// ------------------------------------

// settingsSelector :: State -> Settings
export const settingsSelector = R.prop('settings')

// ------------------------------------
// Themes
// ------------------------------------

// themesSelector :: State -> Themes
export const themesSelector = R.prop('themes')

// themeName :: Theme -> String
export const themeName = R.compose(R.prop('name'), R.defaultTo({}))

// activeTheme :: Themes -> Theme
export const activeThemeSelector = R.find(R.propEq('active', true))

// activeThemeNameSelector :: State -> Theme
export const activeThemeNameSelector = createSelector(
  themesSelector,
  R.compose(themeName, R.find(R.propEq('active', true)))
)

// nextThemeNameSelector :: State -> Theme
export const nextThemeNameSelector = createSelector(
  activeThemeNameSelector,
  themesSelector,
  R.compose(
    themeName,
    R.converge(R.nth, [
      R.compose(R.inc, R.useWith(R.findIndex, [R.propEq('name'), R.identity])),
      R.compose(R.converge(R.concat, [R.identity, R.identity]), R.nthArg(1))
    ])
  )
)
