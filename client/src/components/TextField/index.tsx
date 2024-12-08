import { TextField as RadixTextField } from '@radix-ui/themes'

interface TextFieldProps extends RadixTextField.RootProps {
  children?: React.ReactNode
}

export const TextField = (props: TextFieldProps) => {
  return <RadixTextField.Root {...props}>{props.children}</RadixTextField.Root>
}

TextField.Slot = RadixTextField.Slot
