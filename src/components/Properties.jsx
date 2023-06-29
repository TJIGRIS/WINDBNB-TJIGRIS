import React, { useState } from 'react'
import { CartProperties } from './CartProperties'
import { useContextProperties } from '../context/PropertiesProvider'

export function Properties() {
  const { properties } = useContextProperties()
  const isProperties = properties.length > 0

  return (
    <main className="min-h-[calc(100vh-33vh)] md:min-h-[calc(100vh-18vh)]">
      <header className="flex justify-between mb-4">
        <h3 className="font-bold text-2xl">
          {isProperties ? `Stays In ${properties[0].country}` : 'No Found'}
        </h3>
        <p>
          {properties.length > 0
            ? `${properties.length + ' stays'}`
            : `${properties.length + ' stay'}`}
        </p>
      </header>

      <ul className="grid grid-cols-layout gap-[57px] place-items-center text-colorOne">
        {isProperties ? (
          properties.map((propertie) => (
            <CartProperties key={propertie.id} {...propertie} />
          ))
        ) : (
          <p>not found properties</p>
        )}
      </ul>
    </main>
  )
}
