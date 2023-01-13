import styled from 'styled-components'

export const HeaderContainer = styled.header`
  background-color: ${(props) => props.theme.color['gray-900']};
  padding: 2.5rem 0 7.5rem;
`

export const HeaderContent = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 70rem;
  padding: 0 1.5rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const NewTransactionButton = styled.button`
  padding: 0.75rem 1.25rem;
  color: ${(props) => props.theme.color.white};
  background-color: ${(props) => props.theme.color['green-500']};
  border-radius: 0.375rem;
  border: 0;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.theme.color['green-700']};
    transition: background-color 0.2s;
  }
`
