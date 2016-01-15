/* eslint-disable no-unused-expressions */
import R from 'ramda'
import {
  activeThemeNameSelector,
  nextThemeNameSelector,
  themeName,
  themesSelector,
} from 'redux/selectors'

describe('(Redux Selectors)', function () {
  describe('theme', function () {
    let darkTheme
    let lightTheme
    let themes

    beforeEach(function () {
      darkTheme = { name: 'dark', active: false }
      lightTheme = { name: 'light', active: false }
    })

    it('should return the "themes" state', function () {
      themes = [darkTheme, lightTheme]
      expect(themesSelector({ themes })).to.deep.equal(themes)
    })

    it('should return the "name" of the passed theme', function () {
      expect(themeName(lightTheme)).to.equal('light')
    })

    it('should return "undefined" when passed "undefined"', function () {
      expect(themeName(undefined)).to.be.undefined
    })

    it('should return the activated theme', function () {
      themes = [
        R.merge(darkTheme, { active: true }),
        lightTheme
      ]
      expect(activeThemeNameSelector({ themes })).to.deep.equal('dark')
    })

    it('should return the next theme', function () {
      themes = [
        darkTheme,
        R.merge(lightTheme, { active: true }),
      ]
      expect(nextThemeNameSelector({ themes })).to.deep.equal('dark')
    })
  })
})
