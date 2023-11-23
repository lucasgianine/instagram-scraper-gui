import { SetStateAction, useState } from 'react'
import TextField from '@mui/material/TextField'
import InputAdornment from '@mui/material/InputAdornment'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SearchIcon from '@mui/icons-material/Search'

function SearchProfile () {
  const [username, setUsername] = useState('')

  // Updates the state every time the input changes
  const handleChange = (
    event: {
      target: { value: SetStateAction<string> }
    }) => {
    setUsername(event.target.value)
  }

  // Send request to the API
  const handleSubmit = (
    event: { preventDefault: () => void }
  ) => {
    event.preventDefault()
    console.log(username)
  }

  return (
    <>
      <Box sx={{ padding: '2em' }}>
        <h1>Get latest post by<br />Instagram username</h1>

        <TextField
          id='input_username'
          label='Username'
          color='primary'
          onChange={handleChange}
          sx={{
            m: 1,
            width: '50ch',
            background: 'rgba(255, 255, 255, 0.87)',
            borderRadius: '10px 10px 0px 0px',
            boxShadow: '0px 0px 5px #646cff'
          }}
          InputProps={{
            startAdornment: <InputAdornment position='start'>@</InputAdornment>
          }}
          variant='filled'
          focused
        />

        <Typography sx={{
          color: '#888',
          fontSize: '10px'
        }}>
          Enter the username of the profile you want to get the latest post from here
        </Typography>
      </Box>

      <Button
        variant='contained'
        size='large'
        startIcon={<SearchIcon />}
        onClick={handleSubmit}>
        Search Profile
      </Button>
    </>
  )
}

export default SearchProfile
