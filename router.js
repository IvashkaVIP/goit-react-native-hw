import React from "react";
import { createStackNavigator } from "@react-navigation/stack";


const MainStack = createStackNavigator();

import LoginScreen from "./screens/auth/LoginScreen";
import RegistrationScreen from "./screens/auth/RegistrationScreen";
import Home from "./screens/mainScreens/Home";

export const useRoute = (isAuth) => {
  if (!isAuth) {
    return (
      <MainStack.Navigator>
        <MainStack.Screen
          name="Registration"
          component={RegistrationScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Login"
          component={LoginScreen}
          options={{
            headerShown: false,
          }}
        />
        <MainStack.Screen
          name="Home"
          component={Home}
          options={{
              headerShown: false,
        }}
        />
      </MainStack.Navigator>
    );
  }
//   return (
//     <HomeStack.Navigator>
//       <HomeStack.Screen name="Home" component={Home} />
//     </HomeStack.Navigator>
//   );
};
