import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';

const Page = () => {
  return (
    <BrowserRouter>
        <Header/>
    </BrowserRouter>
  )
}

export default Page;