'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _server = require('react-dom/server');

var _server2 = _interopRequireDefault(_server);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// See: https://github.com/webpack/react-starter/issues/37
var isBrowser = typeof window !== 'undefined';
var SVGInjector = isBrowser ? require('svg-injector') : undefined;

function jsonEqual(a, b) {
  return JSON.stringify(a) === JSON.stringify(b);
}

var ReactSVG = function (_Component) {
  _inherits(ReactSVG, _Component);

  function ReactSVG() {
    var _ref;

    var _temp, _this, _ret;

    _classCallCheck(this, ReactSVG);

    for (var _len = arguments.length, args = Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    return _ret = (_temp = (_this = _possibleConstructorReturn(this, (_ref = ReactSVG.__proto__ || Object.getPrototypeOf(ReactSVG)).call.apply(_ref, [this].concat(args))), _this), _this.refCallback = function (container) {
      if (!container) {
        _this.removeSVG();
        return;
      }

      _this.container = container;
      _this.renderSVG();
    }, _temp), _possibleConstructorReturn(_this, _ret);
  }

  _createClass(ReactSVG, [{
    key: 'renderSVG',
    value: function renderSVG() {
      var props = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : this.props;
      var each = props.callback,
          className = props.className,
          evalScripts = props.evalScripts,
          path = props.path,
          style = props.style;


      var div = document.createElement('div');
      div.innerHTML = _server2.default.renderToStaticMarkup(_react2.default.createElement(
        'div',
        null,
        _react2.default.createElement('div', {
          className: className,
          'data-src': path,
          style: style
        })
      ));

      var wrapper = this.container.appendChild(div.firstChild);

      SVGInjector(wrapper.firstChild, {
        evalScripts: evalScripts,
        each: each
      });
    }
  }, {
    key: 'removeSVG',
    value: function removeSVG() {
      this.container.removeChild(this.container.firstChild);
    }
  }, {
    key: 'shouldComponentUpdate',
    value: function shouldComponentUpdate(nextProps) {
      return !jsonEqual(nextProps, this.props);
    }
  }, {
    key: 'componentWillUpdate',
    value: function componentWillUpdate(nextProps) {
      this.removeSVG();
      this.renderSVG(nextProps);
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement('div', { ref: this.refCallback });
    }
  }]);

  return ReactSVG;
}(_react.Component);

ReactSVG.defaultProps = {
  callback: function callback() {},
  className: '',
  evalScripts: 'once',
  style: {}
};
ReactSVG.propTypes = {
  callback: _propTypes2.default.func,
  className: _propTypes2.default.string,
  evalScripts: _propTypes2.default.oneOf(['always', 'once', 'never']),
  path: _propTypes2.default.string.isRequired,
  style: _propTypes2.default.object
};
exports.default = ReactSVG;
module.exports = exports['default'];