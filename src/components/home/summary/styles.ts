import styled from 'styled-components'

export const SummaryContainer = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 4rem;
`

export const SummaryCardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 2rem;
`

interface SummaryCardProps {
  variant?: 'green'
}

export const SummaryCard = styled.div<SummaryCardProps>`
  background-color: ${(props) =>
    props.variant === 'green'
      ? props.theme.color['green-700']
      : props.theme.color['gray-600']};
  border-radius: 0.375rem;
  padding: 1.5rem 2rem;

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    span {
      color: ${(props) => props.theme.color['gray-300']};
    }
  }

  strong {
    display: block;
    color: ${(props) => props.theme.color['gray-100']};
    font-size: 2rem;
    margin-top: 0.875rem;
  }
`
