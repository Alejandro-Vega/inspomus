import { TypographyVariants } from '@mui/material';

/* declare module '@mui/material/styles' {
  interface TypographyVariants {
    navigation: React.CSSProperties;
  }

  // allow configuration using `createTheme`
  interface TypographyVariantsOptions {
    navigation: React.CSSProperties;
  }
}

declare module '@mui/material/Typography' {
  interface TypographyPropsVariantOverrides {
    navigation: true;
} */

export const FONT_POPPINS = 'Poppins, sans-serif';

const typography: Partial<TypographyVariants> = {
  h1: {
    fontFamily: FONT_POPPINS,
    fontSize: 72,
    fontWeight: 700,
    lineHeight: '86px',
  },
  h2: {
    fontFamily: FONT_POPPINS,
    fontSize: 54,
    fontWeight: 600,
    lineHeight: '81px',
  },
  h3: {
    fontFamily: FONT_POPPINS,
    fontSize: 44,
    fontWeight: 600,
    lineHeight: '66px',
  },
  h4: {
    fontFamily: FONT_POPPINS,
    fontSize: 34,
    fontWeight: 500,
    lineHeight: '51px',
  },
  h5: {
    fontFamily: FONT_POPPINS,
    fontSize: 26,
    fontWeight: 600,
    lineHeight: '39px',
  },
  h6: {
    fontFamily: FONT_POPPINS,
    fontSize: 24,
    fontWeight: 700,
    lineHeight: '36px',
  },
  body1: {
    fontFamily: FONT_POPPINS,
    fontSize: 20,
    fontWeight: 500,
    lineHeight: '30px',
  },
  body2: {
    fontFamily: FONT_POPPINS,
    fontSize: 18,
    fontWeight: 500,
    lineHeight: '27px',
  },
  button: {
    fontFamily: FONT_POPPINS,
    fontSize: 26,
    fontWeight: 600,
    lineHeight: '39px',
  },
  subtitle1: {
    fontFamily: FONT_POPPINS,
    fontSize: 16,
    fontWeight: 500,
    lineHeight: '24px',
  },
  subtitle2: {
    fontFamily: FONT_POPPINS,
    fontSize: 14,
    fontWeight: 500,
    lineHeight: '21px',
  },
  caption: {
    fontFamily: FONT_POPPINS,
    fontSize: 11,
    fontWeight: 500,
    lineHeight: '16.5px',
  },
};

export default typography;
