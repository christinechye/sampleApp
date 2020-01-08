/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  // adding this 
  Image, 
} from 'react-native';

import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

// adding more 

import Tabs from './src' 

export default class App extends React.Component { 

    // add the following to control the data 
    state = { 
      cities: [], // an array for now 
    }; 

    // need a function to add a city to the array, takes city as an argument 
    addCity = (city) => { 
      const newCities = this.state.cities; 
      newCities.push(city); 
      this.setState ({
        cities: newCities 
      })
    }; 

    render () { 
      return (
        <Tabs 
          screenProps = {{
            cities: this.state.cities, 
            addCity: this.addCity
          }}
        />
      )
    }
}