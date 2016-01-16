import React, { Component } from 'react'
import { connect } from 'react-redux'

export class Index extends Component {
  static propTypes = {
  };

  render() {
    return (
      <div>Hello world</div>
    )
  }
}

export default connect()(Index)
