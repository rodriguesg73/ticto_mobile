import { extendTheme } from 'native-base';

export const THEME = extendTheme({
  colors: {
    primary: {
      700: '#996DFF'
    },
    secondary: {
      700: '#FBA94C'
    },
    green: {
      700: '#00875F',
      500: '#00B37E',
      300: '#04D361',
      100: '#06D6A2',
      50: '#06D7A5'
    },
    gray: {
      700: '#484F55',
      600: '#4E5555',
      500: '#4C5A5A',
      400: '#323238',
      300: '#7C7C8A',
      200: '#C4C4CC',
      100: '#E1E1E6',
      50: '#B9B9B9'
    },
    purple: {
      500: '#30107D',
      600: '#401A9B'
    },
    cinza:{ 
      200: '#F1F5F8'
    },
    white: '#FFFFFF'
  },
  fonts: {
    heading: 'Roboto_700Bold',
    body: 'Roboto_400Regular',
  },
  fontSizes: {
    xs: 12,
    sm: 14,
    md: 16,
    lg: 20,
  },
  sizes: {
    14: 56
  }
});