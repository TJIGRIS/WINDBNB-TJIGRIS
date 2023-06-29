import React from 'react'
import start from '../assets/stars.png'

export function CartProperties({
  image,
  type,
  beds,
  rating,
  title,
  superHost
}) {
  return (
    <li className="w-full md:max-w-[500px] h-[340px] flex flex-col justify-between gap-1">
      <div className="w-full h-[269px]">
        <img
          className="w-full h-full object-cover rounded-[24px]"
          src={image}
          alt=""
        />
      </div>

      <div className="flex justify-between">
        <div className="flex items-center gap-2 [&>p]:text-colorFour">
          {superHost && (
            <div className="py-1 px-2 border-colorTwo border-[1px] text-colorTwo rounded-xl text-xs font-bold">
              SUPER HOST
            </div>
          )}

          <p>{type}</p>

          {beds === 1 && <p>{beds} . bet</p>}
          {beds > 1 && <p>{beds} . bets</p>}
        </div>
        <div className="flex items-center gap-2 text-sm text-colorTwo">
          <div className="h-4 w-4">
            <img className="w-full " src={start} alt="" />
          </div>
          <span>{rating}</span>
        </div>
      </div>

      <h2 className="font-semibold">{title}</h2>
    </li>
  )
}
