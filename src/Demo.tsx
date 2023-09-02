import * as React from 'react'
import Box from '@mui/material/Box'
import BottomNavigation from '@mui/material/BottomNavigation'
import BottomNavigationAction from '@mui/material/BottomNavigationAction'
import IconButton from '@mui/material/IconButton'
import Inventory from '@mui/icons-material/Inventory'
import TextSnippetOutlined from '@mui/icons-material/TextSnippetOutlined'
import AccountBalanceWalletOutlined from '@mui/icons-material/AccountBalanceWalletOutlined'
import Portrait from '@mui/icons-material/Portrait'
import QrCode from '@mui/icons-material/QrCode'

// sumber: https://www.figma.com/file/Q7fWds5Wcc0kebzU9mrNfa/UI-KIT-MOBILE-APP-UI-(Community)?node-id=1%3A5&mode=dev

export default function SimpleBottomNavigation() {
  const [value, setValue] = React.useState(0)

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: {
          xs: '100vw',
          md: 500,
        },
        height: '100vh',
        backgroundColor: '#ddd',
      }}
    >
      <BottomNavigation
        showLabels
        value={value}
        onChange={(event, newValue) => {
          setValue(newValue)
        }}
        sx={{
          height: '86px',
          alignItems: 'flex-start',

          '*': {
            color: '#020202',
          },

          '.MuiButtonBase-root': {
            justifyContent: 'flex-start',
            py: '13px',

            '.MuiSvgIcon-root': {
              fontSize: 22,
            },

            '&.Mui-selected .MuiSvgIcon-root *': {
              color: '#717171',
            },

            '.MuiBottomNavigationAction-label': {
              fontSize: 11,
            },

            '&.Mui-selected .MuiBottomNavigationAction-label': {
              fontWeight: 700,
            },
          },
        }}
      >
        <BottomNavigationAction label='Home' icon={<Inventory />} />
        <BottomNavigationAction
          label='History'
          icon={<TextSnippetOutlined />}
        />
        <Box
          sx={{
            position: 'relative',
            width: '20%',
          }}
        >
          <IconButton
            sx={{
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center !important',
              width: '63px',
              height: '63px',
              p: '0 !important',
              fontSize: 11,
              backgroundColor: '#3981C7',
              transform: 'translate(-50%, -50%)',
              position: 'absolute',
              left: '50%',
              zIndex: 1,

              '&:hover': {
                backgroundColor: '#649cd5',
              },

              '&, *': {
                color: '#fff !important',
              },

              '.MuiSvgIcon-root': {
                fontSize: '29px !important',
              },
            }}
          >
            <QrCode />
            PAY
          </IconButton>
        </Box>
        <BottomNavigationAction
          label='Wallet'
          icon={<AccountBalanceWalletOutlined />}
        />
        <BottomNavigationAction label='Account' icon={<Portrait />} />
      </BottomNavigation>
    </Box>
  )
}
