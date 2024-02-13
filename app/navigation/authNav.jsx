import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useSelector } from "react-redux";
import Auth from "../screens/auth/Auth";
import HomeNav from "./HomeNav";
import ProductDetail from "../screens/home/ProductDetail";

const Stack = createNativeStackNavigator();

export default AuthNav = () => {
  const isLogin = useSelector((state) => state.auth.user);
  
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {isLogin === null ? (
          <Stack.Screen
            name="auth"
            component={Auth}
            options={{ headerShown: false }}
          />
        ) : (
          <>
            <Stack.Screen
              name="home"
              component={HomeNav}
              options={{ headerShown: false }}
            />
            <Stack.Screen
              name="product-detail"
              component={ProductDetail}
              options={{ headerShown: false }}
            />
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};
