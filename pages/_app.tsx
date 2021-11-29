import AuthRoute from '../authRoutes'
import '../css/stylesheet.css'

export default function MyApp({ Component, pageProps }) {
    return <AuthRoute><Component {...pageProps} /></AuthRoute>
  }