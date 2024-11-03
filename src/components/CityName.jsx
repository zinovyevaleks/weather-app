import { Paper, Typography } from '@mui/material';

const CityName = ({ city }) => {
  return (
    <Paper elevation={6} sx={{ marginTop: 4, paddingTop: 3, paddingBottom: 3, paddingLeft: 1, paddingRight: 1 }}>
      <Typography component='h1' variant='h3' sx={{ textAlign: 'center' }} >{city}</Typography>
    </Paper>
  )
}

export default CityName