import { createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
        palette: {
          primary: {
            light: 'pink',
            main: '#B0D4B8',
            dark: '#D8F9FA',
            contrastText: '#4F4F4F',
          },
          secondary: {
            light: '#ff7961',
            main: '#f44336',
            dark: '#ba000d',
            contrastText: '#000',
          },
          background: {
            default: "#EAE7D6",
          }
        },
        
})

export default theme;




// export interface Palette {
//   common: CommonColors;
//   type: PaletteType;
//   contrastThreshold: number;
//   tonalOffset: PaletteTonalOffset;
//   primary: PaletteColor;
//   secondary: PaletteColor;
//   error: PaletteColor;
//   warning: PaletteColor;
//   info: PaletteColor;
//   success: PaletteColor;
//   grey: Color;
//   text: TypeText;
//   divider: TypeDivider;
//   action: TypeAction;
//   background: TypeBackground;
//   getContrastText: (background: string) => string;
//   augmentColor: {
//     (
//       color: ColorPartial,
//       mainShade?: number | string,
//       lightShade?: number | string,
//       darkShade?: number | string
//     ): PaletteColor;
//     (color: PaletteColorOptions): PaletteColor;
//   };
// }