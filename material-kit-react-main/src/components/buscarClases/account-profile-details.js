import { useState } from 'react';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField
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
    description: 'Descripción de la Clase de Algebra 1',
    cost: '1500',
    deascription: 'Información de Clase de Algebra 1',
    email: 'RominaPerez@Gmail.com',
    phone: '1122345568',
    state: 'CABA',
    country: 'Argentina',
    comments: 'Comentarios de Alumnos',
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form
      autoComplete="off"
      noValidate
      {...props}
    >
      <Card>
        <CardHeader
          subheader="La información de tu clase"
          title="Clase"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={10}
              xs={12}
            >
              <TextField
                fullWidth
                /*helperText="Please specify the first name"*/ 
                label="Descripción de la clase"
                name="nombre"
                onChange={handleChange}
                required
                value={values.description}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={4}
              xs={12}
            >
              <TextField
                fullWidth
                label="Costo por clase"
                name="apellido"
                onChange={handleChange}
                required
                value={values.cost}
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={8}
              xs={12}
            >
              <TextField
                fullWidth
                label="Correo electrónico"
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
                label="Número de telefono"
                name="telefono"
                onChange={handleChange}
                /*type="number"*/
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
                label="País"
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
              {/* <TextField
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
              </TextField> */}
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Comentarios"
                name="comentarios"
                onChange={handleChange}
                required
                value={values.comments}
                variant="outlined"
              />
            </Grid>
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
