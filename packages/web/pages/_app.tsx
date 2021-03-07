import React from 'react';
import { AppProps } from 'next/app';

const MyApp: React.FC<any> = ({ Component, pageProps }: AppProps) => {
  return <Component {...pageProps} />;
};

export default MyApp;
