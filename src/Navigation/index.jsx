import React from "react";
import { NavigationContainer, useNavigation } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/HomeScreen/HomeScreen';
import TabViewScreen from "../Screens/TabView/DoctorsScreen";
import back from '../../assets/icons/backarrow.svg'
import SvgUri from "react-native-svg-uri";
import { TouchableOpacity } from "react-native-gesture-handler";
import PrescriptionScreen from "../Screens/Prescription/PrescriptionScreen";

const Stack = createStackNavigator();

const StackNavigation = props => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home" screenOptions={{
                headerStyle: {
                    textAlign: "left"
                },
            }} >
                <Stack.Screen
                    name="Home"
                    component={Home}
                />
                <Stack.Screen
                    name="DOCTORS"
                    component={TabViewScreen}
                    options={{
                        headerTitleAlign: "left",
                        headerLeft: () => <TouchableOpacity><SvgUri source={back} /></TouchableOpacity>,
                      }}
                />
                <Stack.Screen
                    name="Prescription"
                    component={PrescriptionScreen}
                    options={{
                        headerTitleAlign: "left",
                      }}
                />
            </Stack.Navigator>
        </NavigationContainer>
    );
};

export default StackNavigation;