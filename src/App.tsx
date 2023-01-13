import { ThemeProvider } from 'styled-components'
import { TransactionsContextProvider } from './components/contexts/transactions'
import Header from './components/header'
import Home from './pages/home'
import { GlobalStyles } from './styles/global'
import { defaultTheme } from './styles/themes/defaultTheme'

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <TransactionsContextProvider>
        <Header />
        <Home />
      </TransactionsContextProvider>
    </ThemeProvider>
  )
}

export default App
