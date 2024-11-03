import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchWeather } from './store/weatherSlice';
import { Box, CssBaseline, Container, Paper, } from '@mui/material/';
import CityName from './components/CityName';
import CurrentWeather from './components/CurrentWeather';
import ForecastList from './components/ForecastList/ForecastList';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';

function App() {
  const dispatch = useDispatch();
  const { current, forecast, status } = useSelector((state) => state.weather);
  const city = 'Новосибирск';

  useEffect(() => {
    const coordinates = { lat: 55.018803, lon: 82.933952 };

    dispatch(fetchWeather(coordinates));
  }, [dispatch]);

  return (
    <>
      <CssBaseline />
      <Box sx={{ backgroundColor: 'primary.light', height: '100vh' }}>
        <Container maxWidth='sm' sx={{
          paddingTop: 4, paddingBottom: 4,
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          height: '100%'
        }}>
          <Paper elevation={16} sx={{ padding: 3, maxHeight: '100%' }}>
          {status === 'loading' && <Loading />}
          {status === 'failed' && <ErrorMessage/>}
          {status === 'succeeded' && (
              <>
                <CityName city={city} />
                {current && <CurrentWeather current={current} />}
                {forecast && <ForecastList forecast={forecast} />}
              </>
            )}
          </Paper>
        </Container >
      </Box >
    </>
  );
}

export default App;
