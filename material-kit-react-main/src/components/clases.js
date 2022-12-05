
import {misClases} from '../__mocks__/misClases';
import { ProductListToolbar } from './clases/product-list-toolbar';
import { ProductCard } from './clases/misClasesP-card';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { misClasesAlumno } from '../__mocks__/misClasesAlumno';
import { ProductAlumnoCard } from './clases/productAlumno-card';

const Alumno = () => {
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

const loginRedirect = () => {
  return (
    <div>
      <h1>Clase</h1>
    </div>
  )
}

export const clases = () => {
    const PerfilUsuario = globalThis.sessionStorage.getItem('PerfilUsuario');
    if (PerfilUsuario == 'Alumno') {
        return (
            <Alumno/>
        );
    } else if (PerfilUsuario == 'Profesor') {
        return (
            <Profesor/>
        );
    } else {
        return (
          <loginRedirect/>
        );
    }
}