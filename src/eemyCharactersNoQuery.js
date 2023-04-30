import * as React from 'react';
import { DataGrid } from '@mui/x-data-grid';
import { useState } from 'react'
import { supabaseClient } from './supabaseClient';

const columns = [
  { field: 'id', headerName: 'Enemy ID', width: 120 },
  { field: 'class', headerName: 'Class', width: 240 },
  { field: 'level', headerName: 'Level', width: 120 },
];

export function Enemies()
{
  const [characters, setCharacters] = useState([]);
  async function getCharacters()
  {
  let { data: Character} = await supabaseClient
  .from('enemy_dummy')
  .select('enemy_id, class, level')
  setCharacters(Character);
  }
  getCharacters();

  const rows = characters.map(c =>({ id: c.enemy_id, class: c.class, level: c.level}));
  if(characters !== null && characters !== undefined)
  {
    return(
      <div style={{ height: '40vh', width: '100%' }}>
      <DataGrid
        rows={rows}
        columns={columns}
        paginationModel={{ page: 0, pageSize: 15 }}
        checkboxSelection
      />
    </div>
    )
  }
  return(
    <p>Loading Characters...</p>
  )

}