declare module '@mui/material/styles/createPalette' {
  interface Palette {
    gitHubColors: {
      background: string;
      text: string;
      colorRanges: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
    };
  }

  interface PaletteOptions {
    gitHubColors: {
      background: string;
      text: string;
      colorRanges: {
        1: string;
        2: string;
        3: string;
        4: string;
        5: string;
      };
    };
  }
}

const palette = {
  primary: {
    light: '#E28D80',
    main: '#7CA491',
    dark: '',
  },
  secondary: {
    light: '',
    main: '#467AB2',
    dark: '#3D405B',
  },
  text: {
    primary: '#3D405B',
    secondary: '#FFFFFF',
  },
  background: {
    default: '#F6EFE0',
    paper: '#D4CBBB',
  },
  gitHubColors: {
    background: '#0d1117',
    text: '#c9d1d9',
    colorRanges: {
      1: '#161b22',
      2: '#0e4429',
      3: '#006d32',
      4: '#26a641',
      5: '#39d353',
    },
  },
};

export default palette;
