import { useState } from 'react';
import { Box, Button, Card, CardContent, CardHeader, Divider, TextField } from '@mui/material';

export const SettingsPassword = (props) => {
  const [values, setValues] = useState({
    password: '',
    confirm: ''
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  return (
    <form {...props}>
      <Card>
        <CardHeader
          subheader="Cambiar contraseña"
          title="Contraseña"
        />
        <Divider />
        <CardContent>
          <TextField
            fullWidth
            label="Contraseña actual"
            margin="normal"
            name="contraseña"
            onChange={handleChange}
            type="password"
            value={values.password}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Nueva contraseña"
            margin="normal"
            name="confirmar"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Confirmar nueva contraseña"
            margin="normal"
            name="confirmar"
            onChange={handleChange}
            type="password"
            value={values.confirm}
            variant="outlined"
          />
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
            Actualizar
          </Button>
        </Box>
      </Card>
    </form>
  );
};
