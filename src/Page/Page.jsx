import React from 'react'
import { BrowserRouter } from 'react-router-dom';
import Header from '../components/Header/Header';
import Introduction from '../components/Introduction/Introduction';
import About from '../About/About';
import Portfolio from '../Portfolio/Portfolio';

const Page = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Introduction/>
        <About/>
        <Portfolio/>
    </BrowserRouter>
  )
}

export default Page;