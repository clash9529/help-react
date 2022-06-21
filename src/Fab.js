import * as React from 'react';
import Box from '@mui/material/Box';
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import {useNavigate, useParams} from "react-router-dom";


export default function FloatingActionButtons() {
  const navigate = useNavigate()
  return (
    <Fab color="primary" aria-label="add">
      <AddIcon onClick={() => navigate("/deceased_posts/add") }/>
      {/*<AddIcon />*/}
    </Fab>
  );
}