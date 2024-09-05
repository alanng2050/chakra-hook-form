import {
  FormControl,
  Text,
  FormLabel,
  InputGroup,
  Textarea as CTextarea,
} from '@chakra-ui/react'

export function Textarea({
  label,
  err,
  inputProps,
  rightIcon,
  containerProps,
}: {
  label?: string
  err?: string
  inputProps?: React.ComponentProps<typeof CTextarea>
  rightIcon?: React.ReactNode
  containerProps?: React.ComponentProps<typeof FormControl>
}) {
  return (
    <FormControl {...containerProps}>
      {label && <FormLabel>{label}</FormLabel>}
      <InputGroup>
        <CTextarea variant="outline" fontSize="sm" {...inputProps} />
        {rightIcon}
      </InputGroup>
      {err && <Text variant="error">{err}</Text>}
    </FormControl>
  )
}
