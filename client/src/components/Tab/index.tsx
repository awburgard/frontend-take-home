import { Tabs as RadixTabs } from '@radix-ui/themes'

interface TabProps extends RadixTabs.RootProps {}

export const Tabs = ({ children, ...props }: TabProps) => {
  return <RadixTabs.Root {...props}>{children}</RadixTabs.Root>
}
