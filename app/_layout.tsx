import { Loading } from '@/components'
import { theme } from '@/theme'
import {
  Montserrat_400Regular,
  Montserrat_600SemiBold,
  Montserrat_700Bold,
  useFonts,
} from '@expo-google-fonts/montserrat'
import { LinearGradient } from 'expo-linear-gradient'
import { Slot } from 'expo-router'
import { StatusBar, StyleSheet } from 'react-native'

export default function RootLayout() {
  const [fontsLoaded] = useFonts({ Montserrat_400Regular, Montserrat_600SemiBold, Montserrat_700Bold })

  if (!fontsLoaded) return <Loading />

  return (
    <LinearGradient colors={[theme.colors.blue500, theme.colors.blue700]} style={StyleSheet.absoluteFill}>
      <StatusBar backgroundColor={theme.colors.blue500} barStyle={'light-content'} translucent />
      <Slot />
    </LinearGradient>
  )
}
