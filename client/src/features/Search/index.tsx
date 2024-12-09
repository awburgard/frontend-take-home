import { MagnifyingGlassIcon } from '@radix-ui/react-icons'
import { Box, Flex } from '@radix-ui/themes'

import { TextField } from '@/components/TextField'

interface SearchProps {
  placeholder: string
  search: string
  icon?: boolean
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
  actionButton?: React.ReactNode
}

export const Search = ({
  placeholder,
  icon = true,
  search,
  onChange,
  disabled = false,
  actionButton,
}: SearchProps) => {
  return (
    <Flex justify='between' align='center' gap='2' mb='5' width='100%'>
      <Box width='100%'>
        <TextField
          placeholder={placeholder}
          value={search}
          onChange={onChange}
          disabled={disabled}
        >
          {icon ? (
            <TextField.Slot>
              <MagnifyingGlassIcon />
            </TextField.Slot>
          ) : null}
        </TextField>
      </Box>
      {actionButton ? actionButton : null}
    </Flex>
  )
}
