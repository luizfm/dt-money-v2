import { useCallback, useState } from 'react'
import IgniteLogo from '../../assets/ignite-logo.svg'
import NewTransactionDialog from '../new-transaction-dialog'

import { HeaderContainer, HeaderContent, NewTransactionButton } from './styles'

export function Header() {
  const [isTransactionDialogOpen, setIsTransactionDialogOpen] = useState(false)

  const onToggleTransactionDialog = useCallback(() => {
    setIsTransactionDialogOpen((prevValue) => !prevValue)
  }, [])

  return (
    <HeaderContainer>
      <HeaderContent>
        <img
          src={IgniteLogo}
          alt="Dois triângulos, um sobre o outro, na diagonal"
        />
        <NewTransactionButton
          aria-label="Add a new transaction on your table"
          onClick={onToggleTransactionDialog}
        >
          Add new transaction
        </NewTransactionButton>
      </HeaderContent>
      {isTransactionDialogOpen && (
        <NewTransactionDialog onOpenChange={onToggleTransactionDialog} />
      )}
    </HeaderContainer>
  )
}

export default Header
