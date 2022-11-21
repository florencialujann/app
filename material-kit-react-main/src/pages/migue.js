import Head from 'next/head';
import { Box, Container } from '@mui/material';
import { DashboardLayout } from '../components/dashboard-layout';
import { Clases } from '../__mocks__/clases';
import { CustomRatingOperator } from '../components/migue/prueba';


const Page = () => (
    <>
        <Head>
            <title>
                Buscar Clase | Tu clase a un click
            </title>
        </Head>
        <Box
            component="main"
            sx={{ flexGrow: 1, py: 8 }}
        > 
            <Container maxWidth={true}>
                <Box sx={{ mt: 3 }}>
                    <CustomRatingOperator />
                </Box>
            </Container>
        </Box>
    </>
);

export default Page;

