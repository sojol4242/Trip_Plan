import { StatusBar } from "expo-status-bar";
import React from "react";
import { Text, View, Image, TouchableOpacity } from "react-native";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer, DefaultTheme } from "@react-navigation/native";
import { Onboarding, Destination } from "./Screens/index";
import { icons, COLORS, SIZES } from './constants';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    border: "transparent",
  },
};

const Stack = createStackNavigator();
// const App = () => {
//   return (

//   );
// };
// export default () => {
//   return <App />;
// };

const App = () => {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator initialRoute={"Onboarding"}>
        {/* screens */}
        <Stack.Screen
          name="Onboarding"
          component={Onboarding}
          options={{
            title: null,
            headerStyle: {
              backgroundColor: COLORS.white,
            },
            headerLeft: null,
            headerRight: () => {
              <TouchableOpacity
                style={{ marginRight: SIZES.padding }}
                onPress={() => console.log("Pressed")}
              >
                <Image
                  source={icons.barMenu}
                  resizeMode="contain"
                  style={{
                    width: 25,
                    height: 25,
                  }}
                />
              </TouchableOpacity>;
            },
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
