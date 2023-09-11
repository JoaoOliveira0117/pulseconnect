"use client";
import * as RadixDropdownMenu from "@radix-ui/react-dropdown-menu";
import "./style.css";

interface DropdownMenuProps {
  trigger: React.ReactNode;
  items: React.ReactNode[];
}

export default function DropdownMenu({ trigger, items }: DropdownMenuProps) {
  return (
    <RadixDropdownMenu.Root>
      <RadixDropdownMenu.Trigger asChild>{trigger}</RadixDropdownMenu.Trigger>

      <RadixDropdownMenu.Portal>
        <RadixDropdownMenu.Content
          className="RadixDropdownMenuContent"
          sideOffset={5}
        >
          {items.map((item, i) => (
            <RadixDropdownMenu.Item key={i} className="RadixDropdownMenuItem">
              {item}
            </RadixDropdownMenu.Item>
          ))}
        </RadixDropdownMenu.Content>
      </RadixDropdownMenu.Portal>
    </RadixDropdownMenu.Root>
  );
}
