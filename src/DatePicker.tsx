import { BoxProps, FormControl, FormLabel, Text } from '@chakra-ui/react'
import { ChakraDatePicker } from '@tinychange/chakra-datepicker'

export const CustomDatePicker = ({
  label,
  err,
  id,
  containerProps,
  ...rest
}: {
  id?: string
  label?: string
  err?: string
  containerProps?: BoxProps
} & React.ComponentProps<typeof ChakraDatePicker>) => {
  return (
    <FormControl {...containerProps}>
      {label && <FormLabel>{label}</FormLabel>}
      <ChakraDatePicker portalId={`datepicker-${id}`} {...rest} />
      {err && <Text variant="error">{err}</Text>}
    </FormControl>
  )
}
