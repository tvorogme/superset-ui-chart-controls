"use strict";

exports.__esModule = true;
exports.default = exports.Tooltip = exports.TooltipProps = void 0;

var _react = _interopRequireDefault(require("react"));

var _core = require("@superset-ui/core");

var _antd = require("antd");

var _react2 = require("@emotion/react");

var _tooltip = require("antd/lib/tooltip");

exports.TooltipProps = _tooltip.TooltipProps;

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

const Tooltip = ({
  overlayStyle,
  color,
  ...props
}) => {
  const theme = (0, _core.useTheme)();
  const defaultColor = `${theme.colors.grayscale.dark2}e6`;
  return (0, _react2.jsx)(_react.default.Fragment, null, (0, _react2.jsx)(_react2.Global, {
    styles: (0, _core.css)`
          .ant-tooltip-open {
            display: inline-block;
            &::after {
              content: '';
              display: block;
            }
          }
        `
  }), (0, _react2.jsx)(_antd.Tooltip, _extends({
    overlayStyle: {
      fontSize: theme.typography.sizes.s,
      lineHeight: '1.6',
      ...overlayStyle
    },
    color: defaultColor || color
  }, props)));
};

exports.Tooltip = Tooltip;
var _default = Tooltip;
exports.default = _default;