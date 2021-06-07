import React, {useEffect } from 'react';
import '../styles/globals.css'
import TagManager from 'react-gtm-module'

const tagManagerArgs = {
  id: 'GTM-W2MWDBS'
}

function MyApp({ Component, pageProps }) {
  useEffect(() => {
    TagManager.initialize(tagManagerArgs)
  }, [])
  return <Component {...pageProps} />
}

export default MyApp
