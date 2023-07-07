import { Footer, Header, Main } from './components'
import { ItemsProvider } from './context/ItemsProvider'

const App = () => {
  return (
    <ItemsProvider>
      <Header />
      <Main />
      <Footer />
    </ItemsProvider>
  )
}

export default App