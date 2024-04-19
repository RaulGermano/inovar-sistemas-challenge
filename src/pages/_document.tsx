import { appConfig } from '@utils/appConfig'
import { Head, Html, Main, NextScript } from 'next/document'

const Document = () => {
  return (
    <Html lang={appConfig.locale}>
      <Head />

      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}

export default Document