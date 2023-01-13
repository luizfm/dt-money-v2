import * as RadixDialog from '@radix-ui/react-dialog'
import { X } from 'phosphor-react'
import { Close, Content, Overlay } from './styles'

interface DialogProps {
  onOpenChange: () => void
  children: React.ReactNode
  title: string
  description?: string
}

export function Dialog({
  onOpenChange,
  title,
  description,
  children,
}: DialogProps) {
  return (
    <RadixDialog.Root open onOpenChange={onOpenChange}>
      <RadixDialog.Portal>
        <Overlay />
        <Content>
          <RadixDialog.Title>{title}</RadixDialog.Title>
          {Boolean(description) && (
            <RadixDialog.Description>{description}</RadixDialog.Description>
          )}
          <Close>
            <X size={24} />
          </Close>
          {children}
        </Content>
      </RadixDialog.Portal>
    </RadixDialog.Root>
  )
}

export default Dialog
