import '@/styles/globals.css'
import '@/styles/css/navbar.css'
import DisableRightClick from '@/Component/InspactDisable/InspactDisable';
import { useEffect, useState } from 'react';
export default function App({ Component, pageProps }) {
  const [showChild, setShowChild] = useState(false);
  useEffect(() => {
    setShowChild(true);
  }, []);

  const getLayout = Component.getLayout || ((page) => page);
  if (!showChild) {
    return null;
  }

  if (typeof window === 'undefined') {
    return <></>;
  } else {
    return (
      <div>
        {/* <DisableRightClick  /> */}
        {getLayout(<Component {...pageProps} />)}
       </div>
    );
  }
 
}
