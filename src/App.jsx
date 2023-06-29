import React from 'react'
import { Properties } from './components/Properties'
import { Header } from './components/Header'
import { Footer } from './components/Footer'

function App() {
  return (
    <div className="w-full min-h-screen relative font-monserrat">
      <div className="container mx-auto p-2 pt-0">
        <Header />
        <Properties />
        <Footer />
      </div>
    </div>
  )
}

export default App
