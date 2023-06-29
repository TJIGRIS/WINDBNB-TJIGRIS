import React from 'react'
import { useContextProperties } from '../context/PropertiesProvider'
import { AiOutlineSearch } from 'react-icons/ai'

export function MiniSearch() {
  const { filter, toggle, guests } = useContextProperties()

  return (
    <section className="h-[60px] shadow-main [&>div]:px-4 [&>div]:py-2 rounded-lg flex items-cente overflow-hidden">
      <div className="flex flex-grow flex-col border-r-[1px] h-full justify-center">
        <button type="button" onClick={() => toggle(true, false, true)}>
          {filter.location}
        </button>
      </div>

      <div className="flex flex-grow justify-center border-r-[1px] h-full">
        <button
          className="w-full h-full"
          onClick={() => toggle(true, true, false)}
        >
          {guests > 0
            ? guests === 1
              ? `${guests} guest`
              : `${guests} guests`
            : 'Add guests'}
        </button>
      </div>

      <div className="flex items-center">
        <button
          className="text-xl text-colorThree rounded-xl w-full"
          onClick={() => toggle(true, false, false)}
        >
          <AiOutlineSearch size={23} />
        </button>
      </div>
    </section>
  )
}
