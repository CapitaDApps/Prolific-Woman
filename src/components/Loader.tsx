import React from 'react'
import FooterCircle from './FooterCircle'

export default function Loader() {
  return (
     <div className="flex gap-3 items-center flex-col justify-center h-screen w-full bg-[#9F00C8]/50">
          <FooterCircle />

          <h3 className="text-white text-center sofia-medium text-xl px-3 md:text-2xl lg:text-3xl pt-2 font-semibold">THE PROLIFIC WOMAN TRYBE</h3>
        </div>
  )
}
