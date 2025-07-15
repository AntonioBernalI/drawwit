import {createGlobalStyle} from 'styled-components';
import GloriaHallelujahTTF from '../assets/GloriaHallelujah-Regular.ttf';

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'Gloria Hallelujah';
    src: url(${GloriaHallelujahTTF}) format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  body {
    font-family: 'Gloria Hallelujah', sans-serif;
  }
`;

export default GlobalStyles;
