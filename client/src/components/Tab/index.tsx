import { Tabs as RadixTabs } from '@radix-ui/themes'

interface TabProps extends RadixTabs.RootProps {}

export const Tabs = ({ children, ...props }: TabProps) => {
  return <RadixTabs.Root {...props}>{children}</RadixTabs.Root>
}

Tabs.Trigger = RadixTabs.Trigger
Tabs.Content = RadixTabs.Content
Tabs.List = RadixTabs.List
