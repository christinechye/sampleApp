import React from 'react'
import { 
    View,
    Text,
    StyleSheet,
    ScrollView,
    TouchableWithoutFeedback
} from 'react-native'

import colors from '../theme'

export default class Cities extends React.Component { 

    static navigationOptions = { 
        title: 'Cities',
        headerTitleStyles: { 
            color: 'white',
            fontSize: 20,
            fontweight: '400'
        }
    }

    // want to display data 
    viewPropData = () => {
        // see index.js for class reference
        return this.props.screenProps.cities.map((city, index) => { 
            // want to design each "array element" from the map function 
            return (
                <View style = {styles.cityContainer}> 
                    <Text style = {styles.city}> 
                        {city.city}
                    </Text>
                    <Text style = {styles.country}> 
                        {city.country}
                    </Text>
                </View>
            )
        }) 
    }

    render() { 
        // after adding a city through the submit button 
        return ( 
            <ScrollView> 
                <View> 
                    {this.viewPropData()}
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create ({ 
    cityContainer: { 
        padding: 10, 
        borderBottomWidth: 2, 
        borderBottomColor: colors.primary
    }, 
    city: { 
        fontSize: 20,
    },
    country: { 
        color: 'rgba(0, 0, 0, 0.5)'
    }
})