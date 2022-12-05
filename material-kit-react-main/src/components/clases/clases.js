import {misClases} from '../../__mocks__/misClases';
import { ProductListToolbar } from '../clases/product-list-toolbar';
import { ProductCard } from '../clases/misClasesP-card';
import { Box, Container, Grid, Pagination,Button,Modal,BasicRating,TextField } from '@mui/material';
import { misClasesAlumno } from '../../__mocks__/misClasesAlumno';
import { ProductAlumnoCard } from '../clases/productAlumno-card';
import * as React from 'react';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'CABA',
  country: 'Argentina',
  jobTitle: 'Senior Developer',
  name: 'Romina Perez',
  timezone: 'GTM-7'
};

function Alumno(){
  return (
    <Container maxWidth={false}>
<Box color="#315466" sx={{ pt: 3 }}>
  <h3>Mis Clases como Alumno</h3>
</Box>
<Container maxWidth={false}>
        <Box sx={{ pt: 3 }}>
  <Grid
    container
    spacing={3}
  >
    {misClasesAlumno.map((productAlumno) => (
      <Grid
        item
        key={productAlumno.id}
        lg={4}
        md={6}
        xs={12}
      >
        <ProductAlumnoCard productAlumno={productAlumno} />
      </Grid>
    ))}
  </Grid>
</Box>
<Box
  sx={{
    display: 'flex',
    justifyContent: 'center',
    pt: 3
  }}
>
  <Pagination
    color="primary"
    count={3}
    size="small"
  />
</Box>
</Container>
</Container>
  );
}	

const Profesor = () => {
  return (<Container maxWidth={false}>
    <ProductListToolbar />
    <Box color="#315466" sx={{ pt: 3 }}>
      <h3>Mis Clases como Profesor</h3>
      </Box>
  <Container maxWidth={false}>
    <Box sx={{ pt: 3 }}>
      <Grid
        container
        spacing={3}
      >
        {misClases.map((product) => (
          <Grid
            item
            key={product.id}
            lg={4}
            md={6}
            xs={12}
          >
            <ProductCard product={product} />
          </Grid>
        ))}
      </Grid>
    </Box>
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        pt: 3
      }}
    >
      <Pagination
        color="primary"
        count={3}
        size="small"
      />
    </Box>
    </Container>
  </Container>
  );
}

const BasicModal = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
      <Button href='/login'>Iniciar Sesión</Button>
  );
}

export const AccountProfile = () => {
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
  else{
    return (
      <BasicModal/>
    );
  }
};
