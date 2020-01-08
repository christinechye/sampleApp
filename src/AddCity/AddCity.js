import React from 'react'
import { 
    View,
    Text, 
    StyleSheet,
    TextInput,
    TouchableOpacity,
} from 'react-native' 

import uuidV4 from 'uuid/v4' // will help to create a unique identifier 
import colors from '../theme' 

// create the class of the screen 

export default class AddCity extends React.Component { 

    // we need forms to keep up with the cities and the country we're adding 
    state = { 
        // initially, will be set as empty strings 
        city: '',
        country: '',
    };

    // function to change the text 
    OnChangeText = (key, value) => { 
        this.setState ({ 
            [key]: value
        })
    }; 

    // we need a submit function 
    submit = () => { 
        // check if it's an empty string 
        if (this.state.city === '' || this.state.country === '') 
            return;

        // if not, then execute below 
        const city = { // creating a city object to add it to the array
            city: this.state.city,
            country: this.state.country,
            locations: [], // empty array for now to keep track of data
            id: uuidV4(), // makes sure it's unique
        }

        // call in the city 
        this.props.screenProps.addCity(city) 

        // clear out the city and country input 
        this.setState ({ 
            city: '',
            country: ''
        }, () => { 
            // callback function 
            // used to perform an action immediately after 
            // setting state then a callback function is helpful 
            
            // to navigate to the other tab 
            this.props.navigation.navigate('Cities'); 
        })
    }

    render() { 
        // render displays the view you want on the device 

        // we want to be able to add a city (functionality) 

        return (
            <View style = {styles.container}>
                <Text style = {styles.heading}>
                    Add a place! 
                </Text>
                <TextInput 
                    placeholder = 'City'
                    value = {this.state.city}
                    onChangeText = {val => this.OnChangeText('city', val)}
                    style = {styles.input}
                /> 
                <TextInput 
                    placeholder = 'Country'
                    value = {this.state.country}
                    onChangeText = {val => this.OnChangeText('country', val)}
                    style = {styles.input}
                /> 
                <TouchableOpacity onPress = {this.submit}> 
                    <View style = {styles.button}> 
                        <Text style = {styles.buttonText}>
                            Add a place! 
                        </Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

}

const styles = StyleSheet.create ({
    input: { 
        backgroundColor: 'white',
        margin: 10,
        paddingHorizontal: 8,
        height: 50
    },
    button: { 
        height: 50, 
        backgroundColor: colors.button, 
        justifyContent: 'center', 
        alignItems: 'center', 
        margin: 10
    },
    buttonText: { 
        color: 'gray'
    },
    container: { 
        backgroundColor: colors.primary, 
        flex: 1, // makes sure that each container is stacked on top of each other
        justifyContent: 'center'
    }, 
    heading: { 
        fontSize: 40,
        textAlign: 'center',
        margin: 10,
        color: 'white'
    }

})