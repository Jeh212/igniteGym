import {
  NativeStackNavigationProp,
  createNativeStackNavigator,
} from "@react-navigation/native-stack";
import { SignUp } from "@screens/SignUp/Signup";
import { Signin } from "@screens/Signin/Signin";

type IAuthRoutes = {
  signIn: undefined;
  signUp: undefined;
};

export type AuthNavigatorRoutesProps = NativeStackNavigationProp<IAuthRoutes>;

const { Navigator, Screen } = createNativeStackNavigator<IAuthRoutes>();

export function AuthRoutes() {
  return (
    <Navigator screenOptions={{ headerShown: false }}>
      <Screen name="signIn" component={Signin} />
      <Screen name="signUp" component={SignUp} />
    </Navigator>
  );
}
