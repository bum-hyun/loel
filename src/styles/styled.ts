import styled, { CreateStyled } from "@emotion/styled";

type ITheme = {
  COLOR: {
    primary: string;
  };
};

export const theme = {
  light: {
    COLOR: {
      primary: "#333333",
    },
  },
};

export type themeType = "light";

export default styled as CreateStyled<ITheme>;
