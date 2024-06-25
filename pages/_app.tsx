import { QueryClient, QueryClientProvider } from 'react-query'
import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { Provider } from 'react-redux'
import { store } from '@/store/store'
// import 'bootstrap/dist/css/bootstrap.min.css'

const queryClient = new QueryClient()

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider store={store}>
      <QueryClientProvider client={queryClient}>
        <ToastContainer autoClose={1500} />
        <Component {...pageProps} />
      </QueryClientProvider>
    </Provider>
  )
}
