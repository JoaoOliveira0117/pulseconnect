import { ReactNode } from 'react'

import * as RadixDropdownMenu from '@radix-ui/react-dropdown-menu'
import './style.css'

interface DropdownMenuProps {
  trigger: ReactNode;
  children: ReactNode;
}

export default function DropdownMenu({ trigger, children }: DropdownMenuProps) {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger>{trigger}</RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          className="RadixDropdownMenuContent"
          sideOffset={5}
        >
          {children}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  )
}
