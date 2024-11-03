// Объект с переводами погодных условий
const conditionTranslations = {
  CLEAR: 'Ясно',
  PARTLY_CLOUDY: 'Малооблачно',
  CLOUDY: 'Облачно с прояснениями',
  OVERCAST: 'Пасмурно',
  LIGHT_RAIN: 'Небольшой дождь',
  RAIN: 'Дождь',
  HEAVY_RAIN: 'Сильный дождь',
  SHOWERS: 'Ливень',
  SLEET: 'Дождь со снегом',
  LIGHT_SNOW: 'Небольшой снег',
  SNOW: 'Снег',
  SNOWFALL: 'Снегопад',
  HAIL: 'Град',
  THUNDERSTORM: 'Гроза',
  THUNDERSTORM_WITH_RAIN: 'Гроза с дождем',
  THUNDERSTORM_WITH_HAIL: 'Гроза с градом'
};

// Функция для получения перевода
export const translateCondition = (condition) => {
  return conditionTranslations[condition] || 'Неизвестно';
};