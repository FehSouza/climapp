import { theme } from '@/theme'
import { useState } from 'react'
import { StyleSheet, TextInput, View } from 'react-native'
import { SearchIcon } from '../icons'

export const SearchBox = () => {
  const [pressed, setPressed] = useState(false)

  return (
    <View style={[style.container, pressed && style.pressed]}>
      <TextInput
        placeholder="Digite a cidade"
        placeholderTextColor={theme.colors.white}
        style={style.input}
        onFocus={() => setPressed(true)}
        onBlur={() => setPressed(false)}
      />
      <SearchIcon />
    </View>
  )
}

const style = StyleSheet.create({
  container: {
    minHeight: 40,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: theme.spacing.sm,
    paddingHorizontal: theme.spacing.sm,
    backgroundColor: theme.colors.whiteTrans15,
    borderRadius: theme.borderRadius.md,
    borderColor: 'transparent',
    borderWidth: 1,
    overflow: 'hidden',
  },

  pressed: {
    borderColor: theme.colors.white,
  },

  input: {
    flex: 1,
    height: '100%',
    fontFamily: theme.fontFamily.montserrat400,
    fontSize: theme.fontSize.md,
    color: theme.colors.white,
  },
})
