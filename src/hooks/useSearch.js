import { useMemo, useState } from 'react'

export function useSearch() {
  const [toggleSearch, setToggleSearch] = useState(false)
  const [toggleGuests, setToggleGuests] = useState(false)
  const [toggleLocation, setToggleLocation] = useState(false)

  const [location, setLocation] = useState('Finland')
  const [childrens, setChildrens] = useState(0)
  const [adults, setAdults] = useState(0)
  const [guests, setGuests] = useState(0)

  function toggle(search, guests, location) {
    setToggleSearch(search)
    setToggleGuests(guests)
    setToggleLocation(location)
  }

  useMemo(() => {
    const result = childrens + adults

    setGuests(result)
  }, [adults, childrens])

  return {
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
  }
}
