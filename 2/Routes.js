import React from "react";
import { View,Text } from "react-native";
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createStackNavigator} from "@react-navigation/stack";
import Contacts from './screens/Contacts';
import Profile from './screens/Profile';
// import colors from './utils/colors';

const Stack = createStackNavigator();
const StackNavigator = () =>{
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName = "Contacts" 
                                screenOptions = {{headerTintColor: 'white',
                                headerStyle: {backgroundColor: 'tomato'},
                                headerTitleAlign: 'center'}}>
                <Stack.Screen name='Contacts' component={Contacts} options={{title:'Contacts'}}/>
                <Stack.Screen name='Profile' component={Profile} options={({route}) => {
                                            const {contact} = route.params;
                                            const {name} = contact;
                                            return {
                                                title: name.split(' ')[0],
                                                headerTintColor: 'white',
                                                headerStyle: {
                                                    backgroundColor: colors.blue,
                                                }
                                            };
                }}/>
            </Stack.Navigator>
        </NavigationContainer>
    );
}

export default StackNavigator;