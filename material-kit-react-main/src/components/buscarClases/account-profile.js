import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Typography,
  Grid,
  TextField
} from '@mui/material';

const user = {
  avatar: '/static/images/avatars/avatar_6.png',
  city: 'CABA',
  country: 'Argentina',
  jobTitle: 'Senior Developer',
  name: 'Romina Perez',
  rol: 'Profesor/a',
  experience: 'Graduado de Harvard',
};

export const AccountProfile = () => (
  <Card >
    <CardContent>
      <Box
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexDirection: 'column'
        }}
      >
        <Avatar
          src={user.avatar}
          sx={{
            height: 64,
            mb: 2,
            width: 64
          }}
        />
        <Typography
          color="textPrimary"
          gutterBottom
          variant="h5"
        >
          {user.name}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {`${user.city} ${user.country}`}
        </Typography>
        <Typography
          color="textSecondary"
          variant="body2"
        >
          {user.rol}
        </Typography>
      </Box>
    </CardContent>
    <Divider />
    <Grid
    item
    
    xs={12}
  >
    <TextField
      fullWidth
      label="Información del profesor/a"
      name="experiencia"
      /*onChange={handleChange}*/
      required
      value={user.experience}
      variant="outlined"
    />
  </Grid>        
    <CardActions>
      {/* <Button
        color="primary"
        fullWidth
        variant="text"
      >
        Subir foto
      </Button> */}
    </CardActions>
  </Card>
);
