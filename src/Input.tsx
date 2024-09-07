import {
  FormControl,
  Input as CInput,
  Text,
  FormLabel,
  InputGroup,
  InputRightElement,
} from '@chakra-ui/react'

export function Input({
  label,
  err,
  inputProps,
  rightIcon,
  containerProps,
}: {
  label?: string
  err?: string
  inputProps?: React.ComponentProps<typeof CInput>
  rightIcon?: React.ReactNode
  containerProps?: React.ComponentProps<typeof FormControl>
}) {
  return (
    <FormControl {...containerProps}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <CInput variant="outline" {...inputProps} />
        {rightIcon && <InputRightElement>{rightIcon}</InputRightElement>}
      </InputGroup>
      {err && <Text variant="error">{err}</Text>}
    </FormControl>
  )
}
