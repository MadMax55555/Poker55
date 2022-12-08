import React, { useState,useEffect} from 'react'

export function Player({id,name,credit,setParticipation,PlayerNames,setPlayerNames,creditCaisse,setCreditCaisse,cptWin,setCptWin}){
    const [playerCredit,setPlayerCredit] = useState(Number(credit))
    const [montant,setMontant] = useState(0)

    const Quitter = () => {
        const newplayerNames = PlayerNames.filter((player) => player.id !== id);
        setPlayerNames(newplayerNames);
    }

    const Win = () => {
        if(creditCaisse !== 0){
            setPlayerCredit((prv) => prv+(creditCaisse/cptWin));
            setCreditCaisse((prv) => prv-(creditCaisse/cptWin));
            if(cptWin > 1){setCptWin((prv) => prv - 1 )}
        } 
    }
    
    const Participer = () =>{
        setPlayerCredit((prv) => Number(prv)-Number(montant));
        setParticipation(montant);
        setMontant(0)
    }

    const AllIn = () => {
        setParticipation(playerCredit);
        setPlayerCredit(0);
    }

    return(
        <div className='playerCard'>
            <div className='playerName'>{name}</div>
            <div className='playerCredit'>{playerCredit}$</div>
            <button type='button' /*onClick={AllIn}*/>ALL IN</button>
            <button type='button' onClick={Quitter}>Quitter</button>
            <button type='button' onClick={Participer}>Participer</button>
            <button type='button' onClick={Win}>Win</button>
            <input 
              type='number' 
              min="0" 
              max={playerCredit}
              value={montant}
              onChange={(e) => setMontant(e.target.value)}
            />
        </div>
    )
}