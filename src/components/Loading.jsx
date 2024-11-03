import { LinearProgress, Typography } from '@mui/material/';

const Loading = () => {
  return (
    <>
      <Typography variant='h5'>Загрузка</Typography>
      <LinearProgress sx={{marginTop: 1}}/>
    </>
  )
}

export default Loading