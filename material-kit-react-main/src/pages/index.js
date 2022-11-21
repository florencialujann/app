import Head from 'next/head';
import { Box, Container, Grid, Button } from '@mui/material';
import { Buscador } from '../components/home/Buscador';
//import { LatestOrders } from '../components/dashboard/latest-orders';
import { PublicidadProfe, PublicidadAlumno } from '../components/home/conoce-las-clases';
//import { Sales } from '../components/dashboard/sales';
//import { TasksProgress } from '../components/dashboard/tasks-progress';
//import { TotalCustomers } from '../components/dashboard/total-customers';
//import { TotalProfit } from '../components/dashboard/total-profit';
//import { TextoImagenHome } from '../components/home/textoImg-home';
import { DashboardLayout } from '../components/dashboard-layout';


const Page = () => (
  <>
    <Head>
      <title>
        Inicio | PROFER
      </title>
    </Head>
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8
      }}
    >
      <Container maxWidth={false}>
        <div className="container">
          <Box
              sx={{
                
                display: 'flex',
                mt: 2,
                mx: 'auto',
                width: 'flex',
                '& img': {
                  width: '100%'
                }
              }}
            >
            <img
              alt="Go to pro"
              src="/static/images/claseVirtual/clasevirtual2Lila.jpeg"
          />
          </Box>
          {/* <Button variant="contained">Buscar</Button> */}
        </div>
        <Grid
          container
          spacing={3}
        >
          {/* grid del box Buscador. todos en 12 hace que siempre ocupe toda la pagina */}
          
          <Grid
            item
            xl={12}
            lg={12}
            sm={12}
            xs={12}
          >
            {/* <TotalCustomers />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          > */}
           {/*  <TasksProgress />
          </Grid>
          <Grid
            item
            xl={3}
            lg={3}
            sm={6}
            xs={12}
          > */}
            {/* <TotalProfit sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={8}
            md={12}
            xl={9}
            xs={12}
          > */}
            {/*   <Sales /> */}
            

          </Grid>
        {/*   <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >

          </Grid> */}

          
          <Grid
            item
            lg={6}
            md={6}
            xl={6}
            xs={12}
          >
            <PublicidadProfe sx={{ height: '100%' }} />
          </Grid>

          <Grid
           item
           lg={6}
           md={6}
           xl={6}
           xs={12}>
      
            <PublicidadAlumno sx={{ height: '100%' }} />
          </Grid>
          <Grid
            item
            lg={12}
            sm={12}
            xl={12}
            xs={12}
          >
            <Buscador />
          </Grid>
          {/* <Grid
            item
            lg={4}
            md={6}
            xl={3}
            xs={12}
          >
            <LatestOrders />
          </Grid> */}
        </Grid>
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
