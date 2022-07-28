import { NativeBaseProvider, StatusBar } from "native-base";

import { Poppins_400Regular } from '@expo-google-fonts/poppins'
import { useFonts, Roboto_400Regular } from "@expo-google-fonts/roboto";

import { THEME } from './src/styles/theme'
import { Loading } from "./src/components/Loading";
import { Home } from "./src/screens/Home";

export default function App() {
  const [fontsLoaded] = useFonts({ Poppins_400Regular, Roboto_400Regular })

  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        barStyle="light-content"
        translucent
      />
        { fontsLoaded ? <Home /> : <Loading />}
    </NativeBaseProvider>
  );
}