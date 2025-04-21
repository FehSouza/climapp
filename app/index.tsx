import { theme } from '@/theme'
import { StyleSheet, Text, View } from 'react-native'

export default function Index() {
  return (
    <View style={style.container}>
      <Text style={style.text}>Hello World</Text>
    </View>
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
