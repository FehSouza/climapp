import { theme } from '@/theme'
import { router } from 'expo-router'
import { Pressable, StyleSheet, Text, View } from 'react-native'
import { ArrowLeftIcon } from '../icons'

interface ErrorProps {
  message: string
}

export const Error = ({ message }: ErrorProps) => {
  return (
    <View style={style.container}>
      <Text style={style.text}>{message}</Text>

      <Pressable style={style.backButton} onPress={() => router.back()}>
        <ArrowLeftIcon />
        <Text style={style.text}>Voltar</Text>
      </Pressable>
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.xl,
  },

  text: {
    fontFamily: theme.fontFamily.montserrat400,
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
    textAlign: 'center',
  },

  backButton: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: theme.spacing.sm,
  },
})
