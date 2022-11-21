//Mis Clases
import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { misClases } from '../__mocks__/misclases';
import { ProductListToolbar } from '../components/clases/product-list-toolbar';
import { ProductCard } from '../components/clases/misClasesP-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { misClasesAlumno } from '../__mocks__/misClasesAlumno';
import { ProductAlumnoCard } from '../components/clases/productAlumno-card';


const Page = () => (
  <>

    <Head>
      <title>
        Mis Clases | PROFER
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
    
      {/* contenedor del cuerpo */}
      
      <Container maxWidth={false}>
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
      
    </Box>
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
