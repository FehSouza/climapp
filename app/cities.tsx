import { theme } from '@/theme'
import { StyleSheet, Text, View } from 'react-native'

export default function Cities() {
  return (
    <View style={style.container}>
      <Text>Cities</Text>
    </View>
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
})
