import React, { useState,useEffect } from 'react'
import { Player }  from './player'

function App() {
  const [PlayerN , setPlayerN] = useState('')
  const [creditInitiale,setCreditInitiale] = useState(0)
  const [PlayerNames , setPlayerNames] = useState([])
  const [Bool , setBool] = useState(false)
  const [participation,setParticipation] = useState(0)
  const [creditCaisse,setCreditCaisse] = useState(0)
  const [cptWin,setCptWin] = useState(1)
  const [cpt,setCpt] = useState(0)

  const handleSubmit = (e) => {
    e.preventDefault();
    setPlayerNames(prv => [...prv,{id:cpt,name:PlayerN}]);
    setCpt((prv) => prv+1);
    setPlayerN('');
  }

  useEffect(() => {
    setCreditCaisse((prv)=>prv+Number(participation));
    setParticipation(0)
  },[participation]);
  
  function GenererGame(){
    return(
      <div className="Game">
        <div className="Players">
          {PlayerNames.map((player) => 
            <Player 
                key={player.id} 
                id={player.id}
                name={player.name} 
                credit={creditInitiale} 
                setParticipation={setParticipation} 
                PlayerNames={PlayerNames} 
                setPlayerNames={setPlayerNames} 
                creditCaisse={creditCaisse} 
                setCreditCaisse={setCreditCaisse} 
                cptWin={cptWin} 
                setCptWin={setCptWin}
              />
            )}
        </div>
        <div className='Caisse'>
          <div>{creditCaisse}$</div>
          <input 
              type='number' 
              min="1" 
              max={PlayerNames.length}
              value={cptWin}
              onChange={(e) => setCptWin(e.target.value)}
          />
         </div>
         <button type='button' onClick={()=>{setBool(false);setPlayerNames([])}}>finish</button>
      </div>
    );
  }

  return (
    <div>
      {Bool ? 
        <GenererGame />  
      :
        <form  className="Form" onSubmit={handleSubmit}>
          <input
            type='text'
            name='playerName'
            onChange={(e) => setPlayerN(e.target.value)}
            value={PlayerN}
          />
          <button type='submit'>add</button>
          <input 
              type='number' 
              min={0} 
              value={creditInitiale}
              onChange={(e) => setCreditInitiale(e.target.value)}
          />
          <button type='button' onClick={()=>setBool(true)}>finish</button>
        </form>
      }
    </div>
  );
}

export default App;