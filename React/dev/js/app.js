import React from "react"
import {render} from "react-dom"
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import FlashCard from './components/FlashCard'

render(
    <div>
        <Navbar />
        <FlashCard></FlashCard>
        <Footer />
    </div>       
    ,document.getElementById("app")
)