import { Avatar, Box, Card, CardContent, Grid, Typography,TextField,Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';

export const Buscador = (props) => (
  <Card
    sx={{ height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)'}}
    {...props}
  >
    
    <CardContent>
      <Grid
        container
        spacing={0}
        
        sx={{
          justifyContent: 'center',

          
        }}
      >
        
        {/* <Grid
            sx={{
              justifyContent: 'center',

          
            }}
            >

              
              <div>
                <h6>Aún no estás registrado?</h6>
                <Button variant="contained">Registrate</Button>
              </div>
            
          </Grid> */}
          <Grid
            /* item
              xl={6}
              lg={6}
              sm={6}
              xs={6}*/
            > 
            <h6>Iniciá sesión aquí</h6>
            <Button variant="contained" href= "./login">Iniciar sesión</Button>
          </Grid>



       {/*  <Grid item>
          <Typography
            color="textSecondary"
            gutterBottom
            variant="overline"
          >
            NUEVO USUARIOS 
          </Typography>
          
          <Typography
            color="textPrimary"
            variant="h4"
          >
            1,5k
          </Typography>
        </Grid> */}
        
        
        {/* <Grid item>
          <Avatar
            sx={{
              backgroundColor: 'success.main',
              height: 56,
              width: 56
            }}
          >
            <MoneyIcon />
          </Avatar>
        </Grid> */}
      </Grid>
   {/*    <Box
      
        sx={{
          pt: 2,
          JustifyContent: 'center',
          
        }}
      >
        </Box> */}
        {/* <ArrowDownwardIcon color="success" />
        <Typography
          color="success"
          sx={{
            mr: 1
          }}
          variant="body2"
        >
          12%
        </Typography>
        <Typography
          color="textSecondary"
          variant="caption"
        >
          Del último mes
        </Typography> */}
    </CardContent>
  </Card>
);
