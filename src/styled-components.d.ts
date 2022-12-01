import { ThemeType } from './config/theme/generateTheme';

declare module 'styled-components' {
  export interface DefaultTheme extends ThemeType {}
}
