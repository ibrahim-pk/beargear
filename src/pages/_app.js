import '@/styles/globals.css'
import '@/styles/css/navbar.css'
import DisableRightClick from '@/Component/InspactDisable/InspactDisable';
export default function App({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
       <div>
        <DisableRightClick  />
        {getLayout(<Component {...pageProps} />)}
       </div>
  )
}
