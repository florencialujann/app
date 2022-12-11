import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  DesktopDatePicker
} from '@mui/material';

  

  
const states = [
  {
    value: 'caba',
    label: 'CABA'
  },
  {
    value: 'new-york',
    label: 'New York'
  },
  {
    value: 'san-francisco',
    label: 'San Francisco'
  }
];

export const AccountProfileDetails = (props) => {
  const [values, setValues] = useState({
    firstName: 'Romina',
    lastName: 'Perez',
    email: 'RominaPerez@Gmail.com',
    phone: '4749',
    state: 'CABA',
    country: 'Argentina',
    title: 'titulo',
    experiencia: 'experiencia',
    Fecha_Nacimiento: '21/12/1999',
    Estudios_cursados: 'Estudios_cursados'
  });
  
  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };


const Clases = () => {
    const PerfilUsuario = globalThis.sessionStorage.getItem('rol');
    if (PerfilUsuario == 'Alumno') {
      return (
          <Alumno/>
      );
  }
    else if(PerfilUsuario == 'Profesor') {
      return (
          <Profesor/>
      );
    }
  }

const Profesor = () => {
  return ( 
    <Grid
      item
      xs={12}
     >

        <Grid
        Item
        xs={12}
        >
        <TextField
          fullWidth
          label="titulo"
          name="titulo"
          onChange={handleChange}
          required
          value={values.title}
          variant="outlined"
        />
        </Grid>
        <Grid
        Item
        xs={12}
        >
        <TextField
          fullWidth
          id="Experiencia"
          label="Experiencia"
          placeholder="Escriba su experiencia"
          name="experiencia"
          onChange={handleChange}
          required
          value={values.experiencia}
          multiline
          variant="filled"
        />
        </Grid>
    </Grid>
  );
}

const Alumno = () => {
  return (
    <Grid
      item
      xs={12}
      >
      <Grid
      Item
      xs={12}
      > 
      <DesktopDatePicker
          
          label="Fecha de Nacimiento"
          inputFormat="DD/MM/YYYY"
          //value={values.Fecha_Nacimiento}
          //onChange={handleChange}
          required
          //renderInput={(params) => <TextField {...params} />}
        />
      </Grid>
        <Grid
          Item
          s={12}
        >
          <TextField
          fullWidth
          id="ESTUDIOS_CURSADOS"
          label="ESTUDIOS CURSADOS"
          placeholder="Escriba sus estudios cursados"
          name="Estudios_cursados"
          onChange={handleChange}
          required
          value={values.Estudios_cursados}
          multiline
          variant="filled"
        />

      </Grid>
    </Grid>
  );
}

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="Puedes modificar tu perfil cuando quieras"
          title="Perfil"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                /*helperText="Please specify the first name"*/ 
                label="Nombre"
                name="nombre"
                onChange={handleChange}
                required
                value={values.firstName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Apellido"
                name="apellido"
                onChange={handleChange}
                required
                value={values.lastName}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Correo electronico"
                name="mail"
                onChange={handleChange}
                required
                value={values.email}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Numero de telefono"
                name="telefono"
                onChange={handleChange}
                type="number"
                value={values.phone}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Pais"
                name="pais"
                onChange={handleChange}
                required
                value={values.country}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                label="Selecione su ciudad"
                name="Ciudad"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
            <Clases />
          </Grid>
        </CardContent>
        <Divider />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'flex-end',
            p: 2
          }}
        >
          <Button
            color="primary"
            variant="contained"
          >
            Guardar detalles
          </Button>
        </Box>
      </Card>
    </form>
  );
};
