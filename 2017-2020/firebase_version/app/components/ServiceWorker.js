import React from 'react'
import { registerSW } from '../helpers/sw'

export default class ServiceWorker extends React.Component {
  componentDidMount() {
    registerSW()
  }

  render() {
    return null
  }
}
