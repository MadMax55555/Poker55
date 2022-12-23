import React from 'react'

export function Label({text}) {
  return (
    <label 
      class="col-span-1 mb-2 text-xs md:text-lg flex items-center justify-center font-medium text-bleu-marine"
    >
      {text}
    </label>
  )
}

export function Button({text,onClick}) {
  return (
    <button 
      class="col-span-1 text-white bg-vert hover:bg-vert-bleu focus:outline-none focus:ring-4 focus:ring-vert font-medium rounded-full text-sm px-5 py-2.5 flex items-center justify-center mr-2 mb-2 overflow-clip"
      onClick={onClick}
    >
      {text}
    </button>
  )
}