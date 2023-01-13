import { useMemo } from 'react'
import { useContextSelector } from 'use-context-selector'
import { TransactionsContext } from '../components/contexts/transactions'

type TransactionValuesTypes = {
  income: number
  outcome: number
  balance: number
}

export default () => {
  const transactions = useContextSelector(
    TransactionsContext,
    (context) => context.transactions,
  )

  const transactionValues = useMemo(() => {
    return transactions.reduce<TransactionValuesTypes>(
      (acc, transaction) => {
        if (transaction.type === 'income') {
          return {
            ...acc,
            income: acc.income + transaction.price,
            balance: acc.balance + transaction.price,
          }
        }

        if (transaction.type === 'outcome') {
          return {
            ...acc,
            outcome: acc.outcome + transaction.price,
            balance: acc.balance - transaction.price,
          }
        }

        return acc
      },
      { income: 0, outcome: 0, balance: 0 },
    )
  }, [transactions])

  return transactionValues
}
