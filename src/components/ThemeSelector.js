import React, { Component, PropTypes } from 'react'
import Octicon from 'react-octicon'
import { propsChanged } from 'helpers/pureFunctions'

export default class ThemeSelector extends Component {
  static propTypes = {
    themeName: PropTypes.string.isRequired,
    onClick: PropTypes.func.isRequired
  };

  shouldComponentUpdate(nextProps) {
    return propsChanged(['themeName'], this.props, nextProps)
  }

  handleClick() {
    const { onClick, themeName } = this.props
    onClick(themeName)
  }

  render() {
    return (
      <span className="theme-selector" ref="clickTarget"
        onClick={this.handleClick.bind(this)}
      >
        <Octicon name="color-mode" className="theme-selector__icon" />
      </span>
    )
  }
}
