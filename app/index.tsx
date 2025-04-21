import { EnterButton, LogoIcon } from '@/components'
import { theme } from '@/theme'
import { LinearGradient } from 'expo-linear-gradient'
import { Image, StatusBar, StyleSheet, Text } from 'react-native'

export default function Index() {
  return (
    <LinearGradient
      colors={[theme.colors.blue500, theme.colors.blue700]}
      style={[style.container, StyleSheet.absoluteFill]}
    >
      <StatusBar backgroundColor={theme.colors.blue500} barStyle={'light-content'} translucent />

      <LogoIcon />

      <Image
        source={require('@/assets/images/homeImage.png')}
        accessibilityLabel="Ícone representando várias condições climáticas: sol, nuvens, chuva, neve e céu nublado, organizados em um gráfico circular estilizado."
        fadeDuration={500}
        width={192}
        height={180}
      />

      <Text style={style.text}>Boas-vindas!</Text>

      <EnterButton />
    </LinearGradient>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    gap: theme.spacing['2xl'],
    padding: theme.spacing.lg,
  },

  text: {
    fontFamily: theme.fontFamily.montserrat400,
    fontSize: theme.fontSize.xl,
    color: theme.colors.white,
  },
})
