import '@/styles/globals.css'
import '@/styles/css/navbar.css'
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
       <div>
        {getLayout(<Component {...pageProps} />)}
       </div>
  )
}
