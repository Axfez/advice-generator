import './App.css'
import { Box } from '@mui/material'
import { colors, fonts } from './variables'
import { useEffect, useState } from 'react'
import { Dice, DividerDesk, DividerMob } from './svg'

function App() {

  const [text, setText] = useState([])

  const fetchAdvice = async () => {
    const res = await fetch('https://api.adviceslip.com/advice')
    const data = await res.json()

    console.log(data)

    setText(data.slip)
  }

  useEffect(() => { fetchAdvice() }, [])

  return (
    <Box sx={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      position: 'relative',
      bgcolor: `${colors.darkGrayishBlue}`,
      padding: '20px 10px 40px',
      borderRadius: '20px',
      letterSpacing: '6px'
    }}>
      <Box sx={{
        color: `${colors.neonGreen}`,
        fontSize: 21,
      }}>
        ADVICE #{text.id}
      </Box>
      <Box sx={{
        color: '#fff',
        fontWeight: `${fonts.Weights}`,
        fontSize: `${fonts.quote}`,
        paddingBottom: '40px',
      }}>
        “{text.advice}”
      </Box>
      <Box as='img' />
      <DividerDesk />

      <Box sx={{
        display: 'flex',
        cursor: 'pointer',
        width: '80px',
        height: '80px',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'absolute',
        bottom: '-40px',
        bgcolor: `${colors.neonGreen}`,
        borderRadius: '50%',
      }}>
        <Dice />
      </Box>
    </Box>

  );
}

export default App;
