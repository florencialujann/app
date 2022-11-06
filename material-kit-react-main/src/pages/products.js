import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { products } from '../__mocks__/products';
import { ProductListToolbar } from '../components/product/product-list-toolbar';
import { ProductCard } from '../components/product/product-card';
import { DashboardLayout } from '../components/dashboard-layout';
import { productsAlumno } from '../__mocks__/productsAlumno';
import { ProductAlumnoCard } from '../components/product/productAlumno-card';

//Mis Clases
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
      
      <ProductListToolbar />

      <Container maxWidth={false}>
      <h3>Mis Clases como Profesor</h3>
      <Container maxWidth={false}>
        
        
        <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {products.map((product) => (
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
  <h3>Mis Clases como Alumno</h3>
      
      <Container maxWidth={false}>
        
       
                <Box sx={{ pt: 3 }}>
          <Grid
            container
            spacing={3}
          >
            {productsAlumno.map((productAlumno) => (
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
