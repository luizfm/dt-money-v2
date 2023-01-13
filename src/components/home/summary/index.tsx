import { ArrowCircleDown, ArrowCircleUp, CurrencyDollar } from 'phosphor-react'
import useSummary from '../../../hooks/useSummary'
import { defaultTheme } from '../../../styles/themes/defaultTheme'
import { currencyFormatter } from '../../../utils/formatter'
import { SummaryCard, SummaryCardContainer, SummaryContainer } from './styles'
import SummaryTable from './table'

export function Summary() {
  const summary = useSummary()

  return (
    <SummaryContainer>
      <SummaryCardContainer>
        <SummaryCard>
          <header>
            <span>Incomes</span>
            <ArrowCircleUp size={32} color={defaultTheme.color['green-300']} />
          </header>
          <strong>{currencyFormatter.format(summary.income)}</strong>
        </SummaryCard>
        <SummaryCard>
          <header>
            <span>Outcomes</span>
            <ArrowCircleDown size={32} color={defaultTheme.color['red-300']} />
          </header>
          <strong>- {currencyFormatter.format(summary.outcome)}</strong>
        </SummaryCard>
        <SummaryCard variant="green">
          <header>
            <span>Balance</span>
            <CurrencyDollar size={32} color={defaultTheme.color.white} />
          </header>
          <strong>{currencyFormatter.format(summary.balance)}</strong>
        </SummaryCard>
      </SummaryCardContainer>
      <SummaryTable />
    </SummaryContainer>
  )
}

export default Summary
