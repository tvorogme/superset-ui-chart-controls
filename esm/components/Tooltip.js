function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

import React from 'react';
import { useTheme, css } from '@superset-ui/core';
import { Tooltip as BaseTooltip } from 'antd';
import { Global } from '@emotion/react';
import { jsx as ___EmotionJSX } from "@emotion/react";
export { TooltipProps } from 'antd/lib/tooltip';
export const Tooltip = ({
  overlayStyle,
  color,
  ...props
}) => {
  const theme = useTheme();
  const defaultColor = `${theme.colors.grayscale.dark2}e6`;
  return ___EmotionJSX(React.Fragment, null, ___EmotionJSX(Global, {
    styles: css`
          .ant-tooltip-open {
            display: inline-block;
            &::after {
              content: '';
              display: block;
            }
          }
        `
  }), ___EmotionJSX(BaseTooltip, _extends({
    overlayStyle: {
      fontSize: theme.typography.sizes.s,
      lineHeight: '1.6',
      ...overlayStyle
    },
    color: defaultColor || color
  }, props)));
};
export default Tooltip;