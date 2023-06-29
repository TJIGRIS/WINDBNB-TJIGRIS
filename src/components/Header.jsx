import React from 'react'
import logo from '../assets/logo.svg'
import { Filter } from './Filter'

export function Header() {
  return (
    <header className="flex flex-col md:flex-row gap-7 justify-between py-6">
      <div className="flex items-center">
        <img src={logo} alt="" />
      </div>

      <Filter />
    </header>
  )
}
