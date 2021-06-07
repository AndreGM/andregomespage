import React, {useEffect } from 'react';
import '../styles/globals.css'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  gtmId: 'GTM-W2MWDBS',
  events: {
    sendUserInfo: 'userInfo'
}
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
