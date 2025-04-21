import { theme } from '@/theme'
import { useRouter } from 'expo-router'
import { Pressable, StyleSheet, Text } from 'react-native'
import { ArrowIcon } from '../icons'

export const EnterButton = () => {
  const router = useRouter()

  const handlePress = () => router.push('/cities')

  return (
    <Pressable style={({ pressed }) => [style.button, pressed && style.active]} onPress={handlePress}>
      <Text style={style.text}>Entrar</Text>
      <ArrowIcon />
    </Pressable>
  )
}

const style = StyleSheet.create({
  button: {
    width: '100%',
    height: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: theme.spacing.sm,
    backgroundColor: theme.colors.violet300,
    borderRadius: theme.borderRadius.lg,
  },

  active: {
    backgroundColor: theme.colors.violet500,
  },

  text: {
    fontFamily: theme.fontFamily.montserrat600,
    fontSize: theme.fontSize.lg,
    color: theme.colors.blue900,
  },
})
