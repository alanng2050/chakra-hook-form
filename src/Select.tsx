import {
  FormControl,
  Text,
  FormLabel,
  useToken,
  HStack,
  Checkbox,
  Box,
} from '@chakra-ui/react'
import React from 'react'
import ReactSelect from 'react-select'
import type {
  MultiValueGenericProps,
  OptionProps,
  ValueContainerProps,
} from 'react-select'
import type { Option } from './types'

interface Props<T, K extends boolean = false> {
  label?: string
  err?: string
  selectProps: React.ComponentProps<typeof ReactSelect<T, K>>
}

const CustomOption = <T, K extends boolean = false>(
  props: OptionProps<T, K>
) => {
  const { innerProps, innerRef, isMulti, isSelected } = props
  const data = props.data as Option<number>

  return (
    <HStack
      sx={{
        p: 2,
        px: 4,
        _hover: {
          bg: 'gray.100',
        },
      }}
      ref={innerRef}
      {...innerProps}
    >
      {isMulti && <Checkbox isChecked={isSelected}></Checkbox>}
      <Text sx={{ fontSize: 'sm' }}>{data.label}</Text>
    </HStack>
  )
}

const MultiValueContainer = (props: MultiValueGenericProps) => {
  return `${props.data.label}, `
}

const ValueContainer = <T, K extends boolean = false>(
  props: ValueContainerProps<T, K>
) => {
  if (Array.isArray(props.children)) {
    return (
      <HStack sx={{ overflow: 'hidden' }}>
        <Text
          as={Box}
          sx={{
            overflow: 'hidden',
            textOverflow: 'ellipsis',
            whiteSpace: 'nowrap',
          }}
          {...props.innerProps}
        >
          {props.children[0]}
        </Text>
        {/* input search is isSearchable=true */}
        {props.children[1]}
      </HStack>
    )
  }

  return props.children
}

export function Select<T, K extends boolean = false>({
  label,
  err,
  selectProps,
}: Props<T, K>) {
  const blue500 = useToken('colors', 'blue.500')

  return (
    <FormControl
      width="100%"
      sx={{
        '& .react-select__option': {
          fontSize: 'sm',
        },

        '& .react-select__control': {
          pl: 2,
          flexWrap: 'nowrap',
          borderRadius: 'md',
          fontSize: 'sm',
          height: 10,

          borderColor: 'gray.200',
          _hover: {
            borderColor: 'gray.200',
          },

          '&--is-focused': {
            borderColor: 'blue.500',
            boxShadow: `0 0 0 1px ${blue500}`,
            _hover: {
              borderColor: 'blue.500',
            },
          },
        },
      }}
    >
      {label && <FormLabel>{label}</FormLabel>}
      <ReactSelect
        menuPortalTarget={document.body}
        isSearchable={!selectProps.isMulti}
        closeMenuOnSelect={!selectProps.isMulti}
        className="react-select-container"
        classNamePrefix={'react-select'}
        hideSelectedOptions={false}
        components={{
          Option: CustomOption,
          MultiValueContainer,
          ValueContainer,
        }}
        styles={{ menuPortal: (style) => ({ ...style, zIndex: 9999 }) }}
        {...selectProps}
      />
      {err && <Text variant="error">{err}</Text>}
    </FormControl>
  )
}
