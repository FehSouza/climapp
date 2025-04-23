import { StyleSheet, View } from 'react-native'
import { LogoIcon } from '../icons'

export const Loading = () => {
  return (
    <View style={style.container}>
      <LogoIcon width={74} height={23} />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
})
