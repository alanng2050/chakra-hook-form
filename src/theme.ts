import { extendTheme } from '@chakra-ui/react'

export const defaultTheme = extendTheme({
  components: {
    Text: {
      variants: {
        error: {
          color: 'red.500',
          fontSize: 'sm',
          ml: 1,
          mt: 1,
        },
      },
    },
  },
})
