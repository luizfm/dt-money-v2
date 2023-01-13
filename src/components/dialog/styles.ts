import * as RadixDialog from '@radix-ui/react-dialog'
import styled from 'styled-components'

export const Overlay = styled(RadixDialog.Overlay)`
  position: fixed;
  width: 100vw;
  height: 100vh;
  inset: 0;
  background-color: rgba(0, 0, 0, 0.75);
`

export const Content = styled(RadixDialog.Content)`
  position: fixed;
  top: 50%;
  left: 50%;
  min-width: 34rem;
  transform: translate(-50%, -50%);
  padding: 2.5rem;
  background-color: ${(props) => props.theme.color['gray-800']};
  border-radius: 0.375rem;

  h2 {
    margin-bottom: 2rem;
    color: ${(props) => props.theme.color['gray-100']};
  }
`

export const Close = styled(RadixDialog.Close)`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  line-height: 0;
  border: 0;
  background-color: transparent;
  cursor: pointer;
`
