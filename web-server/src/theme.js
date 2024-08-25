import { experimental_extendTheme as extendTheme } from '@mui/material/styles'
import { outlinedInputClasses } from '@mui/material/OutlinedInput'

import { colorTokens } from './customLibraries/color'

const FONTSIZE = import.meta.env.VITE_FONT_SIZE

const APP_BAR_HEIGHT = import.meta.env.VITE_APP_BAR_HEIGHT
const BOARD_BAR_HEIGHT = import.meta.env.VITE_BOARD_BAR_HEIGHT
const BOARD_CONTENT_HEIGHT = `calc(100vh - ${APP_BAR_HEIGHT} - ${BOARD_BAR_HEIGHT})`

const COLUMN_HEADER_HEIGHT = import.meta.env.VITE_COLUMN_HEADER_HEIGHT
const COLUMN_FOOTER_HEIGHT = import.meta.env.VITE_COLUMN_FOOTER_HEIGHT

const theme = extendTheme({
  custom: {
    appBarHeight: APP_BAR_HEIGHT,
    boardBarHeight: BOARD_BAR_HEIGHT,
    boardContentHeight: BOARD_CONTENT_HEIGHT,
    columnHeaderHeight: COLUMN_HEADER_HEIGHT,
    columnFooterHeight: COLUMN_FOOTER_HEIGHT
  },

  components: {
    MuiCssBaseline: {
      styleOverrides: {
        html: {},
        body: {
          '*': { boxSizing: 'border-box' },
          '*::-webkit-scrollbar': {
            width: '10px'
            // height: '8px'
            // backgroundColor: '#ecf0f1'
          },
          '*::-webkit-scrollbar-track': {
            // margin: '16px'
            // '-webkit-box-shadow': 'inset 0 0 6px rgba(0,0,0,0.1)',
            backgroundColor: '#e0e0e0'
            // borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb': {
            backgroundColor: '#888',
            // backgroundImage:
            //   '-webkit-gradient(linear, 40% 0%, 75% 84%, from(#27ae60), to(#2ecc71), color-stop(.6,#54DE5D))',
            borderRadius: '8px'
          },
          '*::-webkit-scrollbar-thumb:hover': {
            backgroundColor: '#555',
            // backgroundImage:
            //   '-webkit-gradient(linear, 40% 0%, 75% 84%, from(#27ae60), to(#2ecc71), color-stop(.6,#54DE5D))',
            borderRadius: '8px'
          }
        },
        '#root': { height: '100vh' }
      }
    },

    MuiDataGrid: {
      styleOverrides: {
        root: {
          '--DataGrid-containerBackground': 'transparent',
          '--DataGrid-rowBorderColor': 'transparent'
        }
      }
    },

    MuiButton: {
      styleOverrides: {
        root: {
          textTransform: 'uppercase',
          borderWidth: '0.5px',
          backgroundColor: 'var(--mui-palette-neutral-light)',
          borderRadius: '10px',
          '&:hover': { borderWidth: '2px' }
        }
      }
    },

    MuiTextField: {
      styleOverrides: {
        root: {
          '--TextField-brandBorderColor': 'var(--mui-palette-neutral-white)',
          '--TextField-brandBorderHoverColor':
            'var(--mui-palette-secondary-main)',
          '--TextField-brandBorderFocusedColor':
            'var(--mui-palette-secondary-main)',
          '& label.Mui-focused': {
            color: 'var(--TextField-brandBorderFocusedColor)'
          }
        }
      }
    },

    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderStyle: 'solid',
          background: 'var(--mui-palette-transparent-white)',
          borderColor: 'var(--TextField-brandBorderColor)',
          borderRadius: '10px',
          backdropFilter: 'blur(20px)',
          boxShadow: '0 0 10px var(--mui-palette-transparent-black)'
        },
        root: {
          fontSize: FONTSIZE,
          [`&:hover .${outlinedInputClasses.notchedOutline}`]: {
            borderStyle: 'solid',
            borderColor: 'var(--TextField-brandBorderHoverColor)'
          },
          [`&.Mui-focused .${outlinedInputClasses.notchedOutline}`]: {
            borderStyle: 'solid',
            borderColor: 'var(--TextField-brandBorderFocusedColor)'
          },
          '& fieldset': { borderWidth: '0.5px !important' },
          '&:hover fieldset': {
            borderStyle: 'solid',
            borderWidth: '2px !important'
          },
          '&.Mui-focused fieldset': {
            borderStyle: 'solid',
            borderWidth: '2px !important'
          }
        }
      }
    },

    MuiFilledInput: {
      styleOverrides: {
        root: {
          borderRadius: '50% 5% 0 0',
          '&::before, &::after': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)'
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)'
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)'
          }
        }
      }
    },

    MuiInput: {
      styleOverrides: {
        root: {
          '&::before': {
            borderBottom: '2px solid var(--TextField-brandBorderColor)'
          },
          '&:hover:not(.Mui-disabled, .Mui-error):before': {
            borderBottom: '2px solid var(--TextField-brandBorderHoverColor)'
          },
          '&.Mui-focused:after': {
            borderBottom: '2px solid var(--TextField-brandBorderFocusedColor)'
          }
        }
      }
    },

    MuiInputLabel: {
      styleOverrides: {
        root: { fontSize: FONTSIZE, color: 'var(--TextField-brandBorderColor)' }
      }
    },

    MuiTypography: {
      styleOverrides: {
        root: {
          '&.MuiTypography-body1': { fontSize: FONTSIZE }
        }
      }
    }
  },

  typography: {
    fontFamily: '"Source Sans 3", sans-serif',
    fontSize: 12,
    h1: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: 40
    },
    h2: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: 32
    },
    h3: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: 24
    },
    h4: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: 20
    },
    h5: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: 16
    },
    h6: {
      fontFamily: '"Source Sans 3", sans-serif',
      fontSize: 14
    }
  },

  colorSchemes: {
    light: {
      palette: {
        primary: {
          main: colorTokens('light').primary[100]
        },
        secondary: {
          main: colorTokens('light').greenAccent[500]
        },
        neutral: {
          white: colorTokens('light').white,
          dark: colorTokens('light').grey[700],
          main: colorTokens('light').grey[500],
          light: colorTokens('light').grey[100]
        },
        background: {
          default: colorTokens('light').background
        },
        transparent: {
          white: colorTokens('light').whiteTransparent,
          black: colorTokens('light').blackTransparent
        }
      }
    },
    dark: {
      palette: {
        primary: {
          main: colorTokens('dark').primary[500]
        },
        secondary: {
          main: colorTokens('dark').greenAccent[500]
        },
        neutral: {
          white: colorTokens('light').white,
          dark: colorTokens('dark').grey[700],
          main: colorTokens('dark').grey[500],
          light: colorTokens('dark').grey[100]
        },
        background: {
          default: colorTokens('dark').background
        },
        transparent: {
          white: colorTokens('dark').whiteTransparent,
          black: colorTokens('dark').blackTransparent
        }
      }
    }
  }
})

export default theme
