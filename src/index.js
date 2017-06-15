import React, { Component } from 'react'
import PropTypes from 'prop-types'
import ReactDOMServer from 'react-dom/server'

// See: https://github.com/webpack/react-starter/issues/37
const isBrowser = typeof window !== 'undefined'
const SVGInjector = isBrowser ? require('svg-injector') : undefined

function jsonEqual(a,b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

export default class ReactSVG extends Component {

  static defaultProps = {
    callback: () => {},
    className: '',
    evalScripts: 'once',
    style: {}
  }

  static propTypes = {
    callback: PropTypes.func,
    className: PropTypes.string,
    evalScripts: PropTypes.oneOf([ 'always', 'once', 'never' ]),
    path: PropTypes.string.isRequired,
    style: PropTypes.object
  }

  refCallback = (container) => {
    if (!container) {
      this.removeSVG()
      return
    }

    this.container = container
    this.renderSVG()
  }

  renderSVG(props = this.props) {
    const {
      callback: each,
      className,
      evalScripts,
      path,
      style
    } = props

    const div = document.createElement('div')
    div.innerHTML = ReactDOMServer.renderToStaticMarkup(
      <div>
        <div
          className={className}
          data-src={path}
          style={style}
        />
      </div>
    )

    const wrapper = this.container.appendChild(div.firstChild)

    SVGInjector(wrapper.firstChild, {
      evalScripts,
      each
    })
  }

  removeSVG() {
    this.container.removeChild(this.container.firstChild)
  }

  shouldComponentUpdate(nextProps) {
    return !jsonEqual(nextProps, this.props)
  }

  componentWillUpdate() {
    this.removeSVG()
    this.renderSVG(this.props)
  }

  render() {
    return <div ref={this.refCallback} />
  }

}
