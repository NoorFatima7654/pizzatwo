'use client'
import React from 'react'
import Header from './components/Header';
import Footer from "../app/components/Footer";
import Card from "../app/components/Card";
import Carousel from "../app/components/Carsoul";
import Banner from "../app/components/Banner";
import ProductList from "../app/components/Productlist";
import Progressor from "../app/components/Progressor";
import Testimonals from "../app/components/Testimonal";
import Offer from "../app/components/Offer";
import Pizza from "../app/components/Pizza";
import Menuitems from '../app/components/Menuitems';
import Reservation from "../app/components/Reservation";


export default function App() {
  return (
 
        
<div
  style={{
    color: "white",
    background: "linear-gradient(to right, black, #334155)", // From black to slate-700 equivalent in hex
    minHeight: "100vh",
  }}
>
  <Header />
  <Carousel />
  <Progressor />
  <Pizza />
  <Banner />
  <ProductList />
  <Menuitems />
  <Offer />
  <Reservation />
  <Card />
  <Testimonals />
  <Footer />
</div>
  
  

  )
}


