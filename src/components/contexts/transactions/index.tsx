import React, { useCallback, useEffect, useState } from 'react'
import { createContext } from 'use-context-selector'
import { api } from '../../../lib/axios'

export interface Transaction {
  id: number
  description: string
  type: 'income' | 'outcome'
  category: string
  price: number
  createdAt: string
}

type NewTransactionType = Omit<Transaction, 'id' | 'createdAt'>

const transactionsContextInitialState = {
  transactions: [],
  fetchTransactions: () => {},
  addNewTransaction: () => {},
}

type TransactionsContextType = {
  transactions: Transaction[]
  fetchTransactions: (query?: string) => void
  addNewTransaction: (transaction: NewTransactionType) => void
}

export const TransactionsContext = createContext(
  transactionsContextInitialState as TransactionsContextType,
)

interface TransactionsContextProviderProps {
  children: React.ReactNode
}

export function TransactionsContextProvider({
  children,
}: TransactionsContextProviderProps) {
  const [transactions, setTransactions] = useState<Transaction[]>([])

  const fetchTransactions = useCallback(async (query?: string) => {
    const response = await api.get('transactions', {
      params: {
        q: query,
      },
    })
    setTransactions(response.data)
  }, [])

  const addNewTransaction = useCallback(
    async (transaction: NewTransactionType) => {
      const response = await api.post('transactions', {
        ...transaction,
        createdAt: new Date().toISOString(),
      })

      setTransactions((prevValue) => [...prevValue, response.data])
    },
    [],
  )

  useEffect(() => {
    fetchTransactions()
  }, [fetchTransactions])

  return (
    <TransactionsContext.Provider
      value={{ transactions, fetchTransactions, addNewTransaction }}
    >
      {children}
    </TransactionsContext.Provider>
  )
}
