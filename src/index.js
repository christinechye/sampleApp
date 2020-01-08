// create navigation 

import React from 'react'
import AddCity from './AddCity/AddCity'
import Cities from './Cities/Cities' 

import { 
    createAppContainer
} from 'react-navigation'; 

import { 
    createBottomTabNavigator,
} from 'react-navigation-tabs'

import { 
    createStackNavigator
} from 'react-navigation-stack'; 

import colors from './theme' 

// stack 
const CitiesNav = createStackNavigator ({ 
    Cities: { 
        screen: Cities,
        navigationOptions: ({ }) => ({ 
            headerStyle: { 
                backgroundColor: colors.primary
            }, 
            headerTintColor: '#fff',
        }), 
    }
}); 

const Tabs = createBottomTabNavigator({ 
    AddCity: {screen: AddCity},
    Cities: {screen: CitiesNav}
}); 

const AppContainer = createAppContainer(Tabs); 
// now AppContainer is the main component for React to render 

export default AppContainer; 