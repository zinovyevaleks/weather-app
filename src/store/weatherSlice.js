import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { gql } from '@apollo/client';
import client from '../apolloClient';

// Дата для разработки, чтобы не расходовать лимит API Яндекса
const mockWeatherData = {
  now: {
    c: 15, // Температура в градусах Цельсия
    f: 59, // Температура в Фаренгейтах
    icon: 'https://example.com/weather-icon.svg', // Ссылка на иконку
    condition: 'THUNDERSTORM_WITH_HAIL', // Описание текущего состояния погоды
  },
  forecast: {
    hours: {
      edges: Array.from({ length: 48 }, (_, i) => {
        const date = new Date();
        date.setMinutes(0); // Установить минуты в 0
        date.setSeconds(0); // Установить секунды в 0
        date.setMilliseconds(0);
        return {
          node: {
            timestamp: Math.floor(date.getTime() / 1000) + i * 3600, // Каждый час на протяжении 48 часов
            temperature: 10 + Math.floor(Math.random() * 10), // Температура от 10 до 20 градусов
          },
        };
      }),
    },
  },
};

// Асинхронный экшен для получения данных о погоде и прогнозе
export const fetchWeather = createAsyncThunk(
  'weather/fetchWeather',
  async ({ lat, lon }) => {
    // const GET_WEATHER_FORECAST = gql`
    //   query GetWeatherForecast {
    //     weatherByPoint(request: { lat: ${lat}, lon: ${lon} }) {
    //       now {
    //         c: temperature
    //         icon(format: SVG)
    //         condition
    //       }
    //       forecast {
    //         hours(first: 48) {
    //           edges {
    //             node {
    //               timestamp
    //               temperature
    //             }
    //           }
    //         }
    //       }
    //     }
    //   }
    // `;

    // const response = await client.query({
    //   query: GET_WEATHER_FORECAST,
    // });
    // return response.data.weatherByPoint;
    return mockWeatherData;
  }
);

const weatherSlice = createSlice({
  name: 'weather',
  initialState: {
    current: null,
    forecast: [],
    status: 'idle',
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchWeather.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.current = action.payload.now;
        state.forecast = action.payload.forecast.hours.edges.map(
          (edge) => edge.node
        );
      })
      .addCase(fetchWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      });
  },
});

export default weatherSlice.reducer;
