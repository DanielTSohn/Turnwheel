import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react'
import { supabaseClient } from './supabaseClient';

const columns = [
  { field: 'id', headerName: 'Characters', width: 240 },
];

export function CharacterNames()
{
  const [characters, setCharacters] = useState([]);
  async function getCharacters()
  {
  let { data: Character} = await supabaseClient
  .from('char_growth_rates')
  .select('Character')
  setCharacters(Character);
  }
  getCharacters();

  const rows = characters.map(c =>({ id: c.Character, width: '100%'}));
  if(characters !== null && characters !== undefined)
  {
    return(
      <div style={{ height: '40vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 100 }}
        checkboxSelection
      />
    </div>
    )
  }
  return(
    <p>Loading Characters...</p>
  )

}