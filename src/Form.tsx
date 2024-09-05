import { Box, ChakraProvider } from '@chakra-ui/react'
import { defaultTheme } from './theme'

export const Form = ({
  theme,
  children,
  ...rest
}: React.ComponentProps<typeof Box> & { theme?: Record<string, any> }) => {
  return (
    <ChakraProvider theme={{ ...defaultTheme, ...theme }}>
      <Box {...rest}>{children}</Box>
    </ChakraProvider>
  )
}
