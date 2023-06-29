import { useState } from 'react'

export function useFilter({ properties }) {
  const [filter, setFilter] = useState({
    location: 'Finland',
    minGuests: 0
  })

  const changeLocation = (location) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      location: location
    }))
  }

  const changeGuests = (guests) => {
    setFilter((prevFilter) => ({
      ...prevFilter,
      minGuests: guests
    }))
  }

  const filterProperties = () => {
    return properties.filter(
      (propertie) =>
        (propertie.location === filter.location ||
          filter.location === 'Finland') &&
        propertie.maxGuests >= filter.minGuests
    )
  }

  return { filter, changeLocation, changeGuests, filterProperties }
}
