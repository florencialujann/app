//Mis Clases
import Head from 'next/head';
import { Box, Container, Grid, Pagination } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { misClasesAlumno } from '../__mocks__/misClasesAlumno';
import { ProductAlumnoCard } from '../components/clases/productAlumno-card';
import { Clases } from '../components/clases/clases';


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
      <Clases />
    </Box>
    
  </>
);

Page.getLayout = (page) => (
  <DashboardLayout>
    {page}
  </DashboardLayout>
);

export default Page;
