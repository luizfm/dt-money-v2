import { ArrowCircleDown, ArrowCircleUp } from 'phosphor-react'
import * as zod from 'zod'
import { Controller, useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'

import Dialog from '../dialog'

import {
  InputContainer,
  NewTransactionForm,
  RadioInputButton,
  RadioInputContainer,
} from './styles'
import { TransactionsContext } from '../contexts/transactions'
import { useContextSelector } from 'use-context-selector'

const newTransactionSchema = zod.object({
  description: zod.string(),
  price: zod.number(),
  category: zod.string(),
  type: zod.enum(['income', 'outcome']),
})

type NewTransactionFormData = zod.infer<typeof newTransactionSchema>

type NewTransactionDialogProps = {
  onOpenChange: () => void
}

export function NewTransactionDialog({
  onOpenChange,
}: NewTransactionDialogProps) {
  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { isSubmitting },
  } = useForm<NewTransactionFormData>({
    mode: 'onSubmit',
    resolver: zodResolver(newTransactionSchema),
  })

  const addNewTransaction = useContextSelector(
    TransactionsContext,
    (context) => context.addNewTransaction,
  )

  const onSubmit = handleSubmit(async (formData) => {
    console.log(formData)
    await addNewTransaction(formData)
    reset()
    onOpenChange()
  })

  return (
    <Dialog onOpenChange={onOpenChange} title="New transaction">
      <NewTransactionForm onSubmit={onSubmit}>
        <InputContainer>
          <label htmlFor="transaction-description">Description</label>
          <input
            id="transaction-description"
            placeholder="Description"
            {...register('description')}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="transaction-price">Price</label>
          <input
            id="transaction-price"
            placeholder="Price"
            type="number"
            {...register('price', { valueAsNumber: true })}
          />
        </InputContainer>
        <InputContainer>
          <label htmlFor="transaction-category">Category</label>
          <input
            id="transaction-category"
            placeholder="Category"
            {...register('category')}
          />
        </InputContainer>
        <Controller
          name="type"
          control={control}
          render={({ field }) => (
            <RadioInputContainer
              onValueChange={field.onChange}
              value={field.value}
            >
              <RadioInputButton value="income" variant="income">
                <ArrowCircleUp size={24} />
                Income
              </RadioInputButton>
              <RadioInputButton value="outcome" variant="outcome">
                <ArrowCircleDown size={24} />
                Outcome
              </RadioInputButton>
            </RadioInputContainer>
          )}
        />
        <button
          type="submit"
          aria-label="Register a new transaction"
          disabled={isSubmitting}
        >
          Register
        </button>
      </NewTransactionForm>
    </Dialog>
  )
}

export default NewTransactionDialog
