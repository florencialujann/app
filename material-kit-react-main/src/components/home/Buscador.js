import { Avatar, Box, Card, CardContent, Grid, Typography,TextField,Button } from '@mui/material';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import MoneyIcon from '@mui/icons-material/Money';

export const Buscador = (props) => (
  <Card
    sx={{ height: '100%' }}
    {...props}
  >
    <CardContent>
      <Grid
      
        container
        spacing={3}
        //sx={{ justifyContent: 'center' }}
        sx={{ 
          justifyContent: 'center' 
      
      
      
      
      
      }}
        
      >
        <TextField id="outlined-basic" label="Seleccionar clase" variant="outlined" />
        <Button variant="contained">Buscar</Button> 

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
