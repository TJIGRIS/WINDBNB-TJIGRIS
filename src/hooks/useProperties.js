import { useState } from 'react'
import Item from '../mooks/stays.json'

export function useProperties() {
  const [items] = useState(
    Item.map((item, index) => ({
      id: index + 1,
      ...item
    }))
  )

  const properties = items.map((item) => ({
    id: item.id,
    image: item.photo,
    type: item.type,
    beds: item.beds,
    rating: item.rating,
    title: item.title,
    superHost: item.superHost,
    maxGuests: item.maxGuests,
    location: item.city + ',' + ' ' + item.country,
    country: item.country
  }))

  return { properties }
}
