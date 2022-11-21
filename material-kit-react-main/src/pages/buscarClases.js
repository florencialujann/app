//Buscar Clase
import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { ClaseListResults } from '../components/buscarClases/clase-list-results';
import { ClaseListToolbar } from '../components/buscarClases/clase-list-toolbar';
import { DashboardLayout } from '../components/dashboard-layout';
import { Clases } from '../__mocks__/clases';
import { Popup } from '../../src/components/home/popup1';

const Page = () => (
  <>
    <Head>
      <title>
        Buscar Clase | Tu clase a un click
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
        <ClaseListToolbar />
        {/* <Popup>
          <h1>Popup</h1>
        </Popup> */}
        <Box sx={{ mt: 3 }}>
          <ClaseListResults clases={Clases} />
        </Box>
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
