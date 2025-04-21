import { theme } from '@/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { StatusBar, StyleSheet, Text } from 'react-native'

export default function Index() {
  return (
    <LinearGradient
      colors={[theme.colors.blue500, theme.colors.blue700]}
      style={[style.container, StyleSheet.absoluteFill]}
    >
      <StatusBar backgroundColor={theme.colors.blue500} barStyle={'light-content'} translucent />

      <Text style={style.text}>Hello World</Text>
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  text: {
    fontFamily: theme.fontFamily.montserrat700,
    fontSize: theme.fontSize.xl,
    color: theme.colors.violet300,
  },
})
