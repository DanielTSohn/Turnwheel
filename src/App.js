import { useState } from 'react'
import { supabase } from './supabaseClient';
import { BasicTabs } from './NavigationTabs';
import './App.css';


// Gets playable characters via Query to Supabase
function Characters() 
{
  const [characterStats, setCharacters] = useState([]);
  async function getCharacters() 
  {
    let { data: char_growth_rates, error } = await supabase
    .from('char_growth_rates')
    .select('*')
    // Update the state
    setCharacters(char_growth_rates);
    if (error)
    {
      alert("Cannot get character data!")
    }
  }
  // Execute the function
  getCharacters();
  // Below is what displays when you use <Library />
  return (
    <table>
    {
      <div>
        <thead>
          <tr>
            <th scope = "col">Name</th>
            <th scope = "col">Health</th>
            <th scope = "col">Strength</th>
            <th scope = "col">Magic</th>
            <th scope = "col">Dexterity</th>
            <th scope = "col">Speed</th>
            <th scope = "col">Defense</th>
            <th scope = "col">Resistance</th>
            <th scope = "col">Luck</th>
            <th scope = "col">Build</th>
          </tr>
        </thead>
        {
        characterStats.map((c)=> (
          <tbody>
            <th scope = "row">{c.Character}</th>
            <td>{c.HP}</td>
            <td>{c.Strength}</td>
            <td>{c.Magic}</td>
            <td>{c.Dexterity}</td>
            <td>{c.Speed}</td>
            <td>{c.Defense}</td>
            <td>{c.Resistance}</td>
            <td>{c.Luck}</td>
            <td>{c.Build}</td>
          </tbody>
          ))
        }
      </div>
    }
    </table>
  )
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BasicTabs />
      <Characters />
      </header>
    </div>
  );
}

export default App;