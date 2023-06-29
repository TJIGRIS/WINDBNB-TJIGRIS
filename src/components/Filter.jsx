import React from 'react'

import { useContextProperties } from '../context/PropertiesProvider'
import { MiniSearch } from './MiniSearch'
import { BigSearch } from './BigSearch'

export function Filter() {
  const { toggleSearch } = useContextProperties()

  return (
    <>
      <MiniSearch />

      {toggleSearch && <BigSearch />}
    </>
  )
}
