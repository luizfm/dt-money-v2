import * as RadixRadioGroup from '@radix-ui/react-radio-group'
import styled from 'styled-components'

export const NewTransactionForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  width: 100%;

  button[type='submit'] {
    margin-top: 1.5rem;
    height: 3.125rem;
    border-radius: 0.375rem;
    border: 0;
    background-color: ${(props) => props.theme.color['green-300']};
    color: ${(props) => props.theme.color['gray-100']};
    font-weight: bold;
    cursor: pointer;

    &:disabled {
      cursor: not-allowed;
      opacity: 0.6;
    }

    &:not(:disabled):hover {
      background-color: ${(props) => props.theme.color['green-500']};
      transition: background-color 0.2s;
    }
  }
`

export const InputContainer = styled.div`
  display: flex;

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
`

export const RadioInputContainer = styled(RadixRadioGroup.Root)`
  display: flex;
  align-items: center;
  justify-content: space-between;
  column-gap: 1rem;
  margin-top: 0.5rem;
`

type RadioInputButtonProps = {
  variant: 'income' | 'outcome'
}

export const RadioInputButton = styled(
  RadixRadioGroup.Item,
)<RadioInputButtonProps>`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  column-gap: 1rem;
  border: 0;
  padding: 1rem;
  background-color: ${(props) => props.theme.color['gray-700']};
  border-radius: 0.375rem;
  cursor: pointer;

  &[data-state='unchecked']:hover {
    background-color: ${(props) => props.theme.color['gray-600']};
    transition: background-color 0.2s;
  }

  &[data-state='checked'] {
    background-color: ${(props) =>
      props.variant === 'income'
        ? props.theme.color['green-300']
        : props.theme.color['red-300']};
    color: ${(props) => props.theme.color.white};

    svg {
      color: ${(props) => props.theme.color.white};
    }
  }

  svg {
    color: ${(props) =>
      props.variant === 'income'
        ? props.theme.color['green-300']
        : props.theme.color['red-300']};
  }
`
