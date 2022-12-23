import React from 'react'

export function Caisse({credit,PlayerNames,cptWin,setCptWin}){

    return(
        <div className='Caisse'>
          <div className='col-span-2 text-xl font-bold text-black'>${credit}</div>
          <div className='col-span-2 text-lg font-bold text-black'>{cptWin}</div>
          <input 
            type="range" 
            min="1" 
            max={PlayerNames.length} 
            value={cptWin}
            onChange={(e) => setCptWin(e.target.value)}
            step="1" 
            class="bg-bleu-claire border border-vert overflow-hidden h-2 appearance-none cursor-pointer col-span-4 w-full p-2.5 rounded-full"
            ></input>
         </div>
    )
}