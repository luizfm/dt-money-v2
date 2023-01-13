import { MagnifyingGlass } from 'phosphor-react'
import { useForm } from 'react-hook-form'
import * as zod from 'zod'
import { zodResolver } from '@hookform/resolvers/zod'

import { currencyFormatter, dateFormatter } from '../../../../utils/formatter'
import { TransactionsContext } from '../../../contexts/transactions'

import {
  PriceHighlight,
  SummaryTableContainer,
  SummaryTableContent,
  SummaryTableForm,
  Table,
} from './styles'
import { useContextSelector } from 'use-context-selector'

const searchFormSchema = zod.object({
  query: zod.string(),
})

type SearchFormData = zod.infer<typeof searchFormSchema>

export function SummaryTable() {
  const {
    register,
    handleSubmit,
    formState: { isSubmitting },
  } = useForm<SearchFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(searchFormSchema),
  })

  const { transactions, fetchTransactions } = useContextSelector(
    TransactionsContext,
    (context) => ({
      transactions: context.transactions,
      fetchTransactions: context.fetchTransactions,
    }),
  )

  const onSubmit = handleSubmit(async (formData) => {
    await fetchTransactions(formData.query)
  })

  return (
    <SummaryTableContainer>
      <SummaryTableContent>
        <SummaryTableForm onSubmit={onSubmit}>
          <div>
            <label htmlFor="search-transaction-input">
              Search for a transaction
            </label>
            <input
              id="search-transaction-input"
              placeholder="Search for a transaction"
              {...register('query')}
            />
          </div>
          <button
            type="submit"
            disabled={isSubmitting}
            aria-label="Submit query search"
          >
            <MagnifyingGlass size={20} />
            Search
          </button>
        </SummaryTableForm>
        <Table>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td width="50%">{transaction.description}</td>
                <td>
                  <PriceHighlight variant={transaction.type}>
                    {transaction.type === 'outcome' && '- '}
                    {currencyFormatter.format(transaction.price)}
                  </PriceHighlight>
                </td>
                <td>{transaction.category}</td>
                <td>{dateFormatter.format(new Date(transaction.createdAt))}</td>
              </tr>
            ))}
          </tbody>
        </Table>
      </SummaryTableContent>
    </SummaryTableContainer>
  )
}

export default SummaryTable
