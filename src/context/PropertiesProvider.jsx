import React, { createContext, useContext, useState } from 'react'
import { useFilter } from '../hooks/useFilter'
import { useSearch } from '../hooks/useSearch'

import { useProperties } from '../hooks/useProperties'

export const ContextProvider = createContext()

export function useContextProperties() {
  const context = useContext(ContextProvider)

  if (context === undefined) throw new Error('message: Not found')

  return context
}

export function PropertiesProvider({ children }) {
  const { properties } = useProperties()
  const { filter, changeLocation, changeGuests, filterProperties } = useFilter({
    properties
  })
  const {
    toggleSearch,
    toggleGuests,
    toggleLocation,
    adults,
    setAdults,
    childrens,
    setChildrens,
    guests,
    location,
    setLocation,
    toggle
  } = useSearch()

  return (
    <ContextProvider.Provider
      value={{
        properties: filterProperties(),
        changeLocation,
        changeGuests,
        filter,
        toggleSearch,
        toggleGuests,
        toggleLocation,
        adults,
        setAdults,
        childrens,
        setChildrens,
        guests,
        location,
        setLocation,
        toggle
      }}
    >
      {children}
    </ContextProvider.Provider>
  )
}
