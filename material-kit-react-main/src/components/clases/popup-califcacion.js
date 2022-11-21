// import React from 'react';
// import Popup from 'reactjs-popup';
// import 'reactjs-popup/dist/index.css';
// import 'material-kit-react-main/src/components/settings/settings-popup-calificacion';

// export default () => (
//   <Popup trigger={<button> Trigger</button>} position="right center">
// 		<div>Califica a tu Profesor!!</div>
// 		<div></div>
//   </Popup>
// );
import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Rating from '@mui/material/Rating';
import {BasicRating} from '../clases/calificador';
import TextField from '@mui/material/TextField';



const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

export function AgregarClaseModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}> Agragar Clase</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <TextField
          helperText="Igrese Nombre de la Clase"
          id="nombreClase"
          label="Nombre"
        />
        <TextField
          helperText="Igrese Nombre de la Materia"
          id="nombreMateria"
          label="Materia"
        />
        <TextField
          helperText="Duracion de la Clase"
          id="duracionClase"
          label="Duracion"
        />
        <TextField
          helperText="Igrese frecuencia de la Clase"
          id="frecuenciaClase"
          label="Frecuencia"
        />
           <TextField
          helperText="Igrese Costo de la Clase"
          id="costoClase"
          label="$"
        />
                
        <Button onClick={handleClose}>Crear</Button>
          
        </Box>
      </Modal>
    </div>
  );
}

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Calificar y Comentar</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
            <BasicRating/>

            <TextField
          id="outlined-multiline-static"
          label=""
          multiline
          rows={4}
          defaultValue="Agregar un comentario"
        />
        <Button onClick={handleClose}>Enviar</Button>
          
        </Box>
      </Modal>
    </div>
  );
}
