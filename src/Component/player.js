import React, { useState} from 'react'
import { Button } from './material';

export function Player({id,name,credit,PlayerNames,setPlayerNames,creditCaisse,setCreditCaisse,cptWin,setCptWin}){
    const [montant,setMontant] = useState(0)

    const Quitter = () => {
        const newplayerNames = PlayerNames.filter((player) => player.id !== id);
        setPlayerNames(newplayerNames);
    }

    const Win = () => {
        if(creditCaisse !== 0){
            const win = Number(creditCaisse)/Number(cptWin);
            const newCredit = Number(credit) + win ;
            setCreditCaisse((prv) => Number(prv)-win);
            if(cptWin>1){setCptWin((prv) => Number(prv) - 1)}
            const newplayerNames = PlayerNames.map((player) => {
                if(player.id === id){
                    return { ...player, credit:newCredit };
                }else{
                    return player;
                }
            });
            setPlayerNames(newplayerNames);
        }  
    }
    
    const Participer = () => {
        if(montant !== 0){
            const participationPlayer = montant;
            const creditPlayer = credit - participationPlayer;
            const newplayerNames = PlayerNames.map((player) => {
                if(player.id === id){
                    setCreditCaisse((prv) => Number(prv) + Number(participationPlayer));
                    return { ...player,credit:creditPlayer };
                }else{
                    return player;
                }
            });
            setPlayerNames(newplayerNames);
        }  
    }

    const AllIn = () => {
        if(credit !== 0){
            const playerCredit = credit;
            const newplayerNames = PlayerNames.map((player) => {
                if(player.id === id){
                    setCreditCaisse((prv) => Number(prv) + Number(playerCredit));
                    return { ...player,credit:0 };
                }else{
                    return player;
                }
            });
            setPlayerNames(newplayerNames);
        }
    }

    return(
        <div className="my-4 py-6 mx-auto bg-bleu-claire ring-4 ring-vert rounded-xl shadow-lg grid gap-1 grid-cols-4 items-center p-4">
            <div className="col-span-2 text-xl font-medium text-black">{name}</div>
            <div className='col-span-2 text-xl font-bold text-black'>${credit}</div>
            <input 
              class="col-span-4 input"
              type='number' 
              min="0" 
              max={credit}
              placeholder ="Participation" 
              onChange={(e) => setMontant(e.target.value)}
            />
            <Button text="Participer" onClick={Participer}/>
            <Button text="ALL_IN" onClick={AllIn}/>
            <Button text="Win" onClick={Win}/>
            <Button text="Quitter" onClick={Quitter}/>   
        </div>
    )
}