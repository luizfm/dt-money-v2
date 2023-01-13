import styled from 'styled-components'

export const SummaryTableContainer = styled.section``

export const SummaryTableContent = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 1.5rem;
  margin: 0 auto;
  width: 100%;
`

export const SummaryTableForm = styled.form`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;

  div {
    flex: 1;

    label {
      clip: rect(0 0 0 0);
      clip-path: inset(50%);
      height: 1px;
      overflow: hidden;
      position: absolute;
      white-space: nowrap;
      width: 1px;
    }

    input {
      width: 100%;
      border: 0;
      padding: 1rem;
      color: ${(props) => props.theme.color['gray-300']};
      background-color: ${(props) => props.theme.color['gray-900']};
      border-radius: 0.375rem;

      &::placeholder {
        color: ${(props) => props.theme.color['gray-500']};
      }
    }
  }

  button {
    background-color: transparent;
    display: flex;
    height: 3.375rem;
    align-items: center;
    justify-content: space-between;
    border: 1px solid ${(props) => props.theme.color['green-300']};
    color: ${(props) => props.theme.color['green-300']};
    padding: 1rem 2rem;
    gap: 0.75rem;
    background-color: transparent;
    cursor: pointer;
    border-radius: 0.375rem;

    &:not(:disabled):hover {
      background: ${(props) => props.theme.color['green-500']};
      border-color: ${(props) => props.theme.color['green-500']};
      color: ${(props) => props.theme.color.white};
      transition: background-color 0.2s, border-color 0.2s, color 0.2s;
    }

    &:disabled {
      opacity: 0.6;
      cursor: not-allowed;
    }
  }
`

export const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0 0.5rem;

  td {
    padding: 1.25rem 2rem;
    background-color: ${(props) => props.theme.color['gray-700']};

    &:first-child {
      border-top-left-radius: 0.375rem;
      border-bottom-left-radius: 0.375rem;
    }

    &:last-child {
      border-bottom-right-radius: 0.375rem;
      border-top-right-radius: 0.375rem;
    }
  }
`

interface PriceHighlightProps {
  variant: 'income' | 'outcome'
}

export const PriceHighlight = styled.span<PriceHighlightProps>`
  color: ${(props) =>
    props.variant === 'income'
      ? props.theme.color['green-300']
      : props.theme.color['red-300']};
`
