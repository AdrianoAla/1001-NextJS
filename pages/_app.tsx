import AuthRoute from '../authRoutes'
import '../css/stylesheet.css'
import Head from 'next/head'

export default function MyApp({ Component, pageProps }) {
    return (
    <html lang='en-US'>
      <Head>
        <meta name="google-site-verification" content="xumJ3-kn2Ksq5-JmkXXJ2seuI90nDpOzr6R0bsh9PxA" />
        <meta property="og:locale" content="en_US" />
        <meta property="og:title" content="1001" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://adrianoalasia.com/" />
        <meta property="og:image" content="link to image / logo" />
        <meta property="og:description" content="1001 is a simple math puzzle game where you must turn a 6 digit number into another 6 digit number using a set of 3 actions using as little actions as possible." />
        <meta name="theme-color" content="#adf3dc" />
      </Head>
      <AuthRoute>
        <Component {...pageProps} />
      </AuthRoute>
    </html>
    )
  }