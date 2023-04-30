import * as React from 'react';
import { supabaseClient } from './supabaseClient';
import { QueryClient, QueryClientProvider, useQueryClient } from "react-query";
import {
  SupabaseQueryProvider,
  useSupabaseMutation,
  useSupabaseQuery,
} from "supabase-query";

import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnmount: false,
        refetchOnReconnect: true,
        retry: false,
        staleTime: Infinity,
      },
    },
  });

export function DataTable() {
return (
    <SupabaseQueryProvider client={ supabaseClient }>
        <QueryClientProvider client={ queryClient }>
            <Characters />
        </QueryClientProvider>
    </SupabaseQueryProvider>
);

// Gets playable characters via Query to Supabase
function Characters() 
{
    const {characterNames, isLoading } = useSupabaseQuery((supabase) => 
        supabase.from('char_growth_rates').select('Character')
    );
    const queryClientA = useQueryClient();
    const { mutate, isLoading: isPosting } = useSupabaseMutation({
        onSuccess: () => queryClientA.invalidateQueries('char_growth_rates'),
        }); 
        
    if (isLoading) return <p>Loading Characters...</p>;
    if(characterNames !== undefined)
    {
        return (
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                    <TableCell>Character</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {characterNames.map((row) => (
                    <TableRow
                        key={row.Characters}
                        sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell component="th" scope="row">
                        {row.Characters}
                        </TableCell>
                    </TableRow>
                    ))}
                </TableBody>
                </Table>
            </TableContainer>
          )
    }
    return(
        <p>Loading Characters...</p>
    )
}

}