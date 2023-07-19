import React, { Component } from 'react'
import loading_image from '../loading_image.gif'

export default class Sppiner extends Component {
  render() {
    return (
      <div className="text-center">
        <img src={loading_image} style={{height:'80px'}} alt="This page is loading" />
      </div>
    )
  }
}
