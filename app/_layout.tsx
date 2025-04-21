import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat'
import { Stack } from 'expo-router'

const options = {
  headerShown: false,
}

export default function RootLayout() {
  const [fontsLoaded] = useFonts({
    Montserrat_400Regular,
    Montserrat_600SemiBold,
    Montserrat_700Bold,
  })

  if (!fontsLoaded) return null

  return (
    <Stack>
      <Stack.Screen name="index" options={options} />
      <Stack.Screen name="cities" options={options} />
    </Stack>
  )
}
