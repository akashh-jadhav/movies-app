import React from 'react'
import {BroweserRouter, Route, Routes} from "react-router-dom"
import HomeContainer from '../Home'
import MoviesContainer from "../Movies"
import AboutContainer from "../About"
import SearchContainer from "../Search"
import TVSeriesContainer from "../TVSeries"
import ContactContainer from "../Contact"
import DetailContainer from '../Details'
import HeaderComponents from '../Components/Header'
import FooterComponents from "../Components/Footer"

const RouterComponents = () => {
  return (
    <>
        <BroweserRouter basename="/movies-app">
        <HeaderComponents/>
            <Routes>
                <Route path="/movies-app" element={<HomeContainer/>}/>
                <Route path="/movies-app" element={<HomeContainer/>}/>
                <Route path="/About" element={<AboutContainer/>}/>
                <Route path="/Movies" element={<MoviesContainer/>}/>
                <Route path="/Contact" element={<ContactContainer/>}/>
                <Route path="/Search" element={<SearchContainer/>}/>
                <Route path="/Series" element={<TVSeriesContainer/>}/>
                <Route path="/Details/:movieid/:mediatype" element={<DetailContainer/>}/>
            </Routes>
            <FooterComponents/>
        </BroweserRouter>
    </>
  )
}

export default RouterComponents;