import React from "react";
import styled from "styles/styled";
import { css } from "@emotion/core";

interface IButton {
  width?: number;
  height?: number;
  variant?: string;
  shape?: string;
  disabled?: boolean;
  size?: string;
  children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ width, height, size, variant, shape, disabled, children }) => {
  return (
    <StyledButton width={width} height={height} variant={variant} size={size} shape={shape} disabled={disabled}>
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  variant: "primary",
  size: "medium",
  shape: "default",
  disabled: false,
};

export default Button;

const variant = {
  primary: css`
    background: #404d67;
    color: white;
    border: 1px solid #404d67;
  `,

  secondary: css`
    background: #9ea9af;
    color: #fff;
    border: 1px solid #9ea9af;
  `,

  success: css`
    background: #64d849;
    color: #fff;
    border: 1px solid #64d849;
  `,

  danger: css`
    background: #f86b51;
    color: #fff;
    border: 1px solid #f86b51;
  `,

  warning: css`
    background: #f4c22b;
    color: #fff;
    border: 1px solid #f4c22b;
  `,

  info: css`
    background: #09c3c8;
    color: #fff;
    border: 1px solid #09c3c8;
  `,

  dark: css`
    background: #4a5256;
    color: #fff;
    border: 1px solid #4a5256;
  `,
};

const shape = {
  default: css`
    border-radius: 4px;
  `,
  square: css`
    border-radius: 0;
  `,
  circle: css`
    border-radius: 20px;
  `,
};

const size = {
  small: css`
    height: 28px;
    font-size: 12px;
    padding: 0 14px;
  `,
  medium: css`
    height: 32px;
    font-size: 16px;
    padding: 0 16px;
  `,
  big: css`
    height: 40px;
    font-size: 18px;
    padding: 0 24px;
  `,
};

const StyledButton = styled.button<IButton>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 400;
  border: none;
  cursor: pointer;
  outline: none;
  transition: opacity ease-in-out 0.3s;

  &:hover:enabled {
    opacity: 0.7;
  }

  &:active:enabled {
    opacity: 0.7;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  ${(p) => {
    if (p.variant) {
      return variant[p.variant];
    } else {
      return variant.primary;
    }
  }}

  ${(p) => {
    if (p.size) {
      return size[p.size];
    } else {
      return size.medium;
    }
  }}

  ${(p) => {
    if (p.shape) {
      return shape[p.shape];
    } else {
      return shape.default;
    }
  }}
`;
