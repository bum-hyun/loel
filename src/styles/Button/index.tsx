import React from "react";
import styled from "styles/styled";
import { css } from "@emotion/core";

interface IButton extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  width?: number | string;
  height?: number | string;
  variant?: string;
  shape?: string;
  disabled?: boolean;
  size?: string;
  children: React.ReactNode;
}

const Button: React.FC<IButton> = ({ width, height, size, variant, shape, disabled, children, ...rest }) => {
  return (
    <StyledButton width={width ? width : ""} height={height ? height : ""} variant={variant} size={size} shape={shape} disabled={disabled} {...rest}>
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

interface IVariant {
  primary: string;
  secondary: string;
  success: string;
  danger: string;
  warning: string;
  info: string;
  dark: string;
}

interface ISize {
  small: string;
  medium: string;
  big: string;
}

interface IShape {
  default: string;
  circle: string;
  square: string;
}

const variant = {
  primary: css`
    background: #538cff;
    color: white;
  `,

  secondary: css`
    background: #9ea9af;
    color: #fff;
  `,

  success: css`
    background: #64d849;
    color: #fff;
  `,

  danger: css`
    background: #f86b51;
    color: #fff;
  `,

  warning: css`
    background: #f4c22b;
    color: #fff;
  `,

  info: css`
    background: #09c3c8;
    color: #fff;
  `,

  dark: css`
    background: #4a5256;
    color: #fff;
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
    padding: 0 14px;
    height: 28px;
    font-size: 12px;
  `,
  medium: css`
    padding: 0 16px;
    height: 34px;
    font-size: 16px;
  `,
  big: css`
    padding: 0 24px;
    height: 40px;
    font-size: 18px;
  `,
};

const StyledButton = styled.button<IButton>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  ${(p) => (p.width ? (typeof p.width === "number" ? `width: ${p.width}px !important;` : `width: ${p.width} !important;`) : "")}
  ${(p) => (p.height ? (typeof p.height === "number" ? `height: ${p.height}px !important;` : `height: ${p.height} !important;`) : "")}
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
      return variant[p.variant as keyof IVariant];
    } else {
      return variant.primary;
    }
  }}

  ${(p) => {
    if (p.size) {
      return size[p.size as keyof ISize];
    } else {
      return size.medium;
    }
  }}

  ${(p) => {
    if (p.shape) {
      return shape[p.shape as keyof IShape];
    } else {
      return shape.default;
    }
  }}
`;
