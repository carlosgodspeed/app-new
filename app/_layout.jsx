import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import {UserDetailContext} from "./components/context/UserDetailContext";
import { useState } from "react";

export default function RootLayout() {

  useFonts({
    'outfit':require('./assets/fonts/Outfit-Regular.ttf'),
    'outfit-bold':require('./assets/fonts/Outfit-Bold.ttf'),
  })

  const [ userDetail, setUserDetail]=useState();

  return (
  <UserDetailContext.Provider value={{userDetail,setUserDetail}}>

  <Stack screenOptions={{
    headerShown: false,
  }}>

  </Stack>
  </UserDetailContext.Provider>
  );
}
