import React from 'react'
import { AiOutlineClose, AiOutlineSearch } from 'react-icons/ai'
import { useContextProperties } from '../context/PropertiesProvider'
import { ImLocation } from 'react-icons/im'
import { GrSubtract } from 'react-icons/gr'
import { LiaPlusSquare } from 'react-icons/lia'

export function BigSearch() {
  const {
    changeLocation,
    changeGuests,
    toggleGuests,
    adults,
    setAdults,
    childrens,
    setChildrens,
    toggle,
    guests,
    toggleLocation,
    location,
    setLocation
  } = useContextProperties()

  return (
    <section className="absolute w-full h-full z-10 bg-black/30 top-0 bottom-0 left-0 right-0">
      <div className="bg-white w-full">
        <section className="relative container mx-auto h-[700px] md:h-[400px] pt-20 px-2 lg:px-0">
          <section className="flex items-left flex-col md:flex-row shadow-main [&>div>button]:px-4 [&>div>button]:py-2 rounded-lg  [&>div>button>small]:text-[10px] [&>div>button>small]:font-bold md:h-[60px] h-max">
            <div className="absolute top-4 left-0 right-0 flex justify-between w-full items-center font-semibold md:hidden">
              <p>Edit your search</p>
              <button onClick={() => toggle(false, false, false)}>
                <AiOutlineClose />
              </button>
            </div>

            <div className="relative flex flex-grow">
              <button
                className={`flex flex-grow flex-col  h-full justify-center border-[1px] rounded-xl border-white ${
                  toggleLocation && '!border-colorOne'
                }`}
                onClick={() => toggle(true, false, true)}
              >
                <small>LOCATION</small>
                <p>{location}</p>
              </button>

              {toggleLocation && (
                <div className="absolute flex flex-grow flex-col translate-y-[10rem] gap-5 pl-4 md:translate-y-20 [&>button]:text-left [&>button]:flex [&>button]:gap-2 [&>button]:items-center text-colorTwo">
                  <button onClick={() => setLocation('Helsinki, Finland')}>
                    <ImLocation />
                    <span
                      className={`${
                        location === 'Helsinki, Finland' && 'font-bold'
                      }`}
                    >
                      Helsinki, Finland
                    </span>
                  </button>
                  <button onClick={() => setLocation('Turku, Finland')}>
                    <ImLocation />
                    <span
                      className={`${
                        location === 'Turku, Finland' && 'font-bold'
                      }`}
                    >
                      Turku, Finland
                    </span>
                  </button>
                  <button onClick={() => setLocation('Oulu, Finland')}>
                    <ImLocation />
                    <span
                      className={`${
                        location === 'Oulu, Finland' && 'font-bold'
                      }`}
                    >
                      Oulu, Finland
                    </span>
                  </button>
                  <button onClick={() => setLocation('Vaasa, Finland')}>
                    <ImLocation />
                    <span
                      className={`${
                        location === 'Vaasa, Finland' && 'font-bold'
                      }`}
                    >
                      Vaasa, Finland
                    </span>
                  </button>
                </div>
              )}
            </div>

            <span className="w-full md:w-[2px] h-[2px] md:h-full  block bg-colorShadow"></span>

            <div className="relative flex flex-grow">
              <button
                className={`flex flex-grow flex-col  h-full  justify-center border-[1px] rounded-xl border-white ${
                  toggleGuests && '!border-colorOne'
                }`}
                onClick={() => toggle(true, true, false)}
              >
                <small>{guests > 0 ? 'GUESTS' : 'GUEST'}</small>
                <span>{guests > 0 ? `${guests}` : 'Add guests'}</span>
              </button>
              {toggleGuests && (
                <div className="absolute flex flex-grow flex-col gap-5 pl-4 translate-y-[6rem] md:translate-y-20 [&>button]:text-left [&>button]:flex [&>button]:gap-2 [&>button]:items-center text-colorTwo [&>div>div]:flex [&>div>div]:gap-4 [&>div>div]:mt-2 [&>div>p]:font-bold [&>div>span]:text-colorFour">
                  <div>
                    <p>Adult</p>
                    <span>Ages 13 or above</span>

                    <div>
                      <button
                        onClick={() => (adults > 0 ? setAdults(adults - 1) : 0)}
                      >
                        <GrSubtract />
                      </button>
                      <p>{adults}</p>
                      <button
                        onClick={() => adults >= 0 && setAdults(adults + 1)}
                      >
                        <LiaPlusSquare size={27} />
                      </button>
                    </div>
                  </div>

                  <div>
                    <p>Childrens</p>
                    <span>Ages 2-12</span>

                    <div>
                      <button
                        onClick={() =>
                          childrens > 0 ? setChildrens(childrens - 1) : 0
                        }
                      >
                        <GrSubtract />
                      </button>
                      <p>{childrens}</p>
                      <button
                        onClick={() =>
                          childrens >= 0 && setChildrens(childrens + 1)
                        }
                      >
                        <LiaPlusSquare size={27} />
                      </button>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <span className="w-[2px] h-full md:block bg-colorShadow hidden "></span>

            <div className="flex flex-grow justify-center items-center absolute md:relative bottom-4 md:bottom-0 left-0 right-0 p-2 w-full md:w-max">
              <button
                className="text-sm text-white rounded-xl flex items-center gap-2 bg-colorThree h-full"
                onClick={() => (
                  toggle(false, false, false),
                  changeGuests(guests),
                  changeLocation(location)
                )}
              >
                <AiOutlineSearch size={17.05} />
                <span>Search</span>
              </button>
            </div>
          </section>
        </section>
      </div>
    </section>
  )
}
