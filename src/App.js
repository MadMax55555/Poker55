import React, { useState } from 'react'
import { Player }  from './Component/player'
import { Caisse }  from './Component/caisse'
import { Label }  from './Component/material'

function App() {
  const [PlayerN , setPlayerN] = useState('')
  const [creditInitiale,setCreditInitiale] = useState(0)
  const [PlayerNames , setPlayerNames] = useState([])
  const [creditCaisse,setCreditCaisse] = useState(0)
  const [Bool , setBool] = useState(false)
  const [cpt,setCpt] = useState(0)
  const [cptWin,setCptWin] = useState(1)

  const handleSubmit = (e) => {
    e.preventDefault();
    if(PlayerN === ''){
      setPlayerNames(prv => [...prv,{id:cpt,name:"Player"+(cpt+1),credit:creditInitiale}]);
    }else{
      setPlayerNames(prv => [...prv,{id:cpt,name:PlayerN,credit:creditInitiale}]);
    }
    setCpt((prv) => prv+1);
    setPlayerN('');
  }
  
  function GenererGame(){
    return(  
      <div className="bg-bleu m-4 p-4 rounded-lg">
        <div className="">
          {PlayerNames.map((player) => 
            <Player 
                key={player.id} 
                id={player.id}
                name={player.name} 
                credit={player.credit}
                PlayerNames={PlayerNames} 
                setPlayerNames={setPlayerNames} 
                creditCaisse={creditCaisse}
                setCreditCaisse={setCreditCaisse}
                cptWin={cptWin}
                setCptWin={setCptWin}
            />
          )}
        </div>
        <Caisse 
          PlayerNames={PlayerNames}
          setPlayerNames={setPlayerNames} 
          credit={creditCaisse}
          cptWin={cptWin}
          setCptWin={setCptWin}
        />
        <button type='button' class="btn" onClick={()=>{setBool(false);setCpt(0);setPlayerNames([])}}>End game</button>
      </div>
    );
  }

  return (
    <div>
      <div className='block py-4 container mx-auto gap-4 bg-vert-bleu text-2xl font-mono text-center mb-8'>Poker 55</div>
      {Bool ? 
        <GenererGame />  
      :
        <div class="container bg-bleu-claire mx-auto p-8 border-4 border-bleu-marine rounded-3xl shadow-lg shadow-bleu-claire">
          <form class="space-y-8 grid grid-cols-8 " onSubmit={handleSubmit}>
            <h5 class="col-span-8 text-xl md:text-3xl font-semibold text-bleu-marine">Registration</h5>
            <Label text='Initial credit'/>
            <input 
              class="col-span-7 input"
              type='number' 
              min={0} 
              value={creditInitiale}
              onChange={(e) => setCreditInitiale(e.target.value)}
            />
            <Label text='Add players'/>
            <input
              class="col-span-5 input"
              placeholder={"Player "+(cpt+1)}
              type='text'
              name='playerName'
              onChange={(e) => setPlayerN(e.target.value)}
              value={PlayerN}
            />
            <button type='submit' disabled={creditInitiale===0} class="col-span-2 text-bleu-marine text-[10px] md:text-sm flex items-center justify-center bg-vert hover:bg-vert-bleu focus:outline-none focus:ring-4 focus:ring-vert rounded-lg px-5 py-2.5 mr-2 mb-2">Add</button>
            <button type='button' class="col-span-4 btn" onClick={()=>setBool(true)}>Start the game</button>
          </form>
        </div>
      }
    </div>
  );
}

export default App;