import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Box, Container, Grid, Typography } from '@mui/material';
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import {AccountProfile} from './account-profile.js';
import { AccountProfileDetails } from './account-profile-details.js';


const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

const materias = [
  'Todos',
  'Algebra',
  'Calculo',
  'Fisica',
  'Quimica',
  'Biologia',
  'Programacion',
  'Ingles',
];



const tipoDeClase = [
  
  'Individual',
  'Grupal',
  
];

const tipoDeCalificacion = [
  
  'Todos',
  '5',
  '4',
  '3',
  '2',
  '1',
  
  
];

const tipoDeFrecuencia = [
  
  'Todos',
  'Unica',
  'Semanal',
  'Mensual',
  
];



function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export function FiltroModal() {
  const theme = useTheme();
  const [personName, setPersonName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setPersonName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
  };

  return (
    <div>
      <FormControl sx={{ m: 1, width: 100 }}>
        <InputLabel id="Materia" style={{color:'white'  }}>Materia</InputLabel>
        <Select
          labelId="Materia"
          id="demo-multiple-materia"
          multiple
          value={personName}
          onChange={handleChange}
          input={<OutlinedInput label="Materia" />}
          MenuProps={MenuProps}
          style={{color:'white'  }}
        >
          {materias.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>

        
      </FormControl>
    </div>

    
  );
}
  export function FiltroClase() {
    const theme = useTheme();
    const [personName, setPersonName] = React.useState([]);
  
    const handleChange = (event) => {
      const {
        target: { value },
      } = event;
      setPersonName(
        // On autofill we get a stringified value.
        typeof value === 'string' ? value.split(',') : value,
      );
    };
  
    return (
      <div>
        <FormControl sx={{ m: 1, width: 100 }}>
          <InputLabel id="Clase" style={{color:'white'  }}>Clase</InputLabel>
          <Select
            labelId="Clase"
            id="demo-multiple-clase"
            multiple
            value={personName}
            onChange={handleChange}
            input={<OutlinedInput label="Clase" />}
            MenuProps={MenuProps}
            style={{color:'white'  }}
          >
            {tipoDeClase.map((tipoDeClase) => (
              <MenuItem
                key={tipoDeClase}
                value={tipoDeClase}
                style={getStyles(tipoDeClase, personName, theme)}
              >
                {tipoDeClase}
              </MenuItem>
            ))}
          </Select>
  
          
        </FormControl>
      </div>
  
      
    );
}
    export function FiltroCalificacion() {
      const theme = useTheme();
      const [personName, setPersonName] = React.useState([]);
    
      const handleChange = (event) => {
        const {
          target: { value },
        } = event;
        setPersonName(
          // On autofill we get a stringified value.
          typeof value === 'string' ? value.split(',') : value,
        );
      };
    
      return (
        <div>
          <FormControl sx={{ m: 1, width: 100 }}>
            <InputLabel id="Calificacion" style={{color:'white'  }}>Calificacion</InputLabel>
            <Select
              labelId="Calificacion"
              id="demo-multiple-calificion"
              multiple
              value={personName}
              onChange={handleChange}
              input={<OutlinedInput label="Calificacion" />}
              MenuProps={MenuProps}
              style={{color:'white'  }}
            >
              {tipoDeCalificacion.map((tipoDeClase) => (
                <MenuItem
                  key={tipoDeClase}
                  value={tipoDeClase}
                  style={getStyles(tipoDeClase, personName, theme)}
                >
                  {tipoDeClase}
                </MenuItem>
              ))}
            </Select>
    
            
          </FormControl>
        </div>
    
        
      );
      
    }

      export function FiltroFrecuencia() {
        const theme = useTheme();
        const [personName, setPersonName] = React.useState([]);
      
        const handleChange = (event) => {
          const {
            target: { value },
          } = event;
          setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        };
      
        return (
          <div>
            <FormControl sx={{ m: 1, width: 100 }}>
              <InputLabel id="Frecuencia" style={{color:'white'  }} >Frecuencia</InputLabel>
              <Select
                labelId="Frecuencia"
                id="demo-multiple-Frecuencia"
                multiple
                value={personName}
                onChange={handleChange}
                input={<OutlinedInput label="Frecuencia" />}
                MenuProps={MenuProps}
                style={{color:'white'  }}
              >
                {tipoDeFrecuencia.map((tipoDeClase) => (
                  <MenuItem
                    key={tipoDeClase}
                    value={tipoDeClase}
                    style={getStyles(tipoDeClase, personName, theme)}
                  >
                    {tipoDeClase}
                  </MenuItem>
                ))}
              </Select>
      
              
            </FormControl>
          </div>
      
          
        );
      }
      export function FiltroProfe() {
        //const theme = useTheme();
       /*  const [personName, setPersonName] = React.useState([]); */
      
        /* const handleChange = (event) => {
          const {
            target: { value },
          } = event;
          setPersonName(
            // On autofill we get a stringified value.
            typeof value === 'string' ? value.split(',') : value,
          );
        }; */
      
        return (
          <div>
            <FormControl sx={{ m: 1, width: 100, }}>
              <InputLabel id="Profesor" style={{color:'white', textAlign: 'center'  }} >Profesor</InputLabel>
          {/*      <Select
                //labelId="Pofesor"
                //id="demo-multiple-Frecuencia"
                //value={personName}
                //onChange={handleChange}
                //input={<OutlinedInput label="Frecuencia" />}
                //MenuProps={MenuProps}
                //style={{color:'white'  }}
              >
                {tipoDeFrecuencia.map((tipoDeClase) => (
                  <MenuItem
                    key={tipoDeClase}
                    value={tipoDeClase}
                    style={getStyles(tipoDeClase, personName, theme)}
                  >
                    {tipoDeClase}
                  </MenuItem>
                ))} 
              </Select>  */}
      
              
            </FormControl>
          </div>
      
          
        );
      }
      const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',        
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
      };                

export function BasicModal() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <Button onClick={handleOpen}>Ver mas</Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
        <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth="lg">
        <Typography
          sx={{ mb: 3 }}
          variant="h4"
        >
          Detalle
        </Typography>
        <Grid
          container
          spacing={3}
        >
          <Grid
            item
            lg={4}
            md={6}
            xs={12}
          >
            <AccountProfile />
          </Grid>
          <Grid
            item
            lg={8}
            md={6}
            xs={12}
          >
            <AccountProfileDetails />
          </Grid>
        </Grid>
      </Container>
    </Box>
        <Button onClick={handleClose}>Enviar</Button>
          
        </Box>
      </Modal>
    </div>
  );
}
      
    