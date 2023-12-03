import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction';

const Page = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Introduction/>
    </BrowserRouter>
  )
}

export default Page;