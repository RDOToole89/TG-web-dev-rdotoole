import { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { WeatherData } from '../../types/app';
import { digitToString } from '../../utils/toDigit';
import { CityScreenInterface } from './cityscreen';
import { days } from '../../utils/days';
import { computeTime } from '../../utils/computeTime';
import { spacing } from '../../utils/sizes';
import { CityDetails } from '../CityDetails/CityDetails';

export const CityScreen = ({ weatherData, resetCity }: CityScreenInterface) => {
  const [cityDetailsActive, setCityDetailsActive] = useState(false);
  const {
    coord: coordinates,
    main: temperatures,
    name: cityName,
    weather: weatherInfo,
  }: WeatherData = weatherData;

  // @ts-ignore
  const { description, icon } = weatherInfo ? weatherInfo[0] : '';

  const currentTemperature = temperatures?.temp;
  const maxTemperature = temperatures?.temp_max;
  const minTemperature = temperatures?.temp_min;
  const humidity = temperatures?.humidity;
  const weatherString = { uri: `http://openweathermap.org/img/wn/${icon}@2x.png` };

  const currentDate = computeTime('Boston', '-5');

  const dayOfTheWeek = days[currentDate.getDay()];
  const currentMinutes = digitToString(currentDate.getMinutes());
  const currentHours = digitToString(currentDate.getHours());

  const activateSevenDayForecast = () => {
    setCityDetailsActive(!cityDetailsActive);
  };

  return !cityDetailsActive ? (
    <View style={styles.dataContainer}>
      <View style={styles.mgBottomContainer}>
        <Text>{cityName}</Text>
        <Text>
          {dayOfTheWeek} {currentHours}:{currentMinutes}
        </Text>
      </View>
      <View>
        <Image style={styles.tinyLogo} source={weatherString} />
        <Text>{description}</Text>
        <Text>{currentTemperature} °C</Text>
      </View>
      <View style={styles.mgBottomContainer}>
        <Text>min. temp {minTemperature} °C</Text>
        <Text>max. temp {maxTemperature} °C</Text>
        <Text>humidity {humidity}</Text>
      </View>
      <TouchableOpacity style={{ marginBottom: spacing.md }} onPress={activateSevenDayForecast}>
        <Text>7 Day Forecast</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={resetCity}>
        <Text>Go back to home</Text>
      </TouchableOpacity>
    </View>
  ) : (
    <CityDetails
      resetCity={resetCity}
      activateSevenDayForecast={activateSevenDayForecast}
      coordinates={coordinates}
      cityName={cityName}
    />
  );
};

const styles = StyleSheet.create({
  dataContainer: {
    flex: 0.4,
    width: '80%',
    justifyContent: 'center',
    backgroundColor: '#BAE6FD',
    padding: spacing.lg,
  },
  mgBottomContainer: {
    marginBottom: spacing.md,
  },
  tinyLogo: {
    width: 50,
    height: 50,
  },
});
