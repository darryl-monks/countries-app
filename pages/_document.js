import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    const setActiveTheme = `
      function getUsersActiveTheme() {
        const activeTheme = window.localStorage.getItem('theme')

        if (activeTheme) {
          return activeTheme
        } else {
          return 'light'
        }
      }

      document.body.dataset.theme = getUsersActiveTheme()
    `
    return (
      <Html>
        <Head />
        <body>
          <script dangerouslySetInnerHTML={{ __html: setActiveTheme }} />
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument