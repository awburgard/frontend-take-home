import { Tabs as RadixTabs } from '@radix-ui/themes'

export const Tabs = ({ children, ...props }: RadixTabs.RootProps) => {
  return <RadixTabs.Root {...props}>{children}</RadixTabs.Root>
}

Tabs.Trigger = RadixTabs.Trigger
Tabs.Content = RadixTabs.Content
Tabs.List = RadixTabs.List
