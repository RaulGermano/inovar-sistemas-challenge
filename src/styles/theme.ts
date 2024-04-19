'use client'

import { createTheme } from '@mui/material/styles'
import { Roboto } from 'next/font/google'

const roboto = Roboto({
  weight: ['300', '400', '500', '700', '900'],
  subsets: ['latin'],
  display: 'swap',
})

const theme = createTheme({
  typography: {
    fontFamily: roboto.style.fontFamily,
  },
  palette: {
    primary: {
      main: '#e3472f',
    },
    info: {
      main: '#ffffff',
    },
  },
  components: {
    MuiMenuItem: {
      styleOverrides: {
        root: {
          '&.Mui-disabled': {
            fontWeight: 'bold',
            opacity: 1,
            backgroundColor: 'transparent',
            borderBottom: 'solid 1px #eeeeee',
          },
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 3,
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        root: {
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'transparent',
          },
          '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
            borderColor: '#e3472f',
          },
        },
        notchedOutline: {
          borderColor: 'transparent',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          height: 40,
          minWidth: 40,
          textTransform: 'capitalize',
          '&:hover': {
            backgroundColor: '#d53118',
          },
        },
      },
    },
    MuiButtonGroup: {
      styleOverrides: {
        root: {
          borderRadius: 3,
        },
      },
      variants: [
        {
          props: { color: 'primary', orientation: 'horizontal' },
          style: {
            '& .MuiButtonGroup-grouped': {
              '&:first-of-type': {
                paddingLeft: 6,
                paddingRight: 6,
                borderTopLeftRadius: 3,
                borderBottomLeftRadius: 3,
              },
              '&:last-child': {
                borderTopRightRadius: 3,
                borderBottomRightRadius: 3,
              },
              '&:not(:last-of-type)': {
                borderRight: '1px solid #d53118',
              },
            },
          },
        },
        {
          props: { color: 'info', orientation: 'vertical' },
          style: {
            '& .MuiButtonGroup-grouped': {
              border: 'solid 1px #e1e1e1',
              '&:first-child': {
                borderTopRightRadius: 3,
                borderBottomRightRadius: 3,
                borderBottom: '1px solid transparent',
              },
              '&:first-of-type': {
                borderTopLeftRadius: 3,
                borderTopRigthRadius: 3,
              },
              '&:last-child': {
                borderBottomLeftRadius: 3,
                borderBottomRigthRadius: 3,
              },
            },
          },
        },
      ],
    },
  },
})

export default theme
