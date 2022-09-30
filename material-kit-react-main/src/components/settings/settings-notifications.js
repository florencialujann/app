import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Checkbox,
  Divider,
  FormControlLabel,
  Grid,
  Typography
} from '@mui/material';

export const SettingsNotifications = (props) => (
  <form {...props}>
    <Card>
      <CardHeader
        subheader="puedes cambiar las notificaciones cuando quieras"
        title="Notificaciones"
      />
      <Divider />
      <CardContent>
        <Grid
          container
          spacing={6}
          wrap="wrap"
        >
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Notificaciones
            </Typography>
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="Coreo electronico"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="Push Notifications"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Mensaje de texto"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="Llamadas"
            />
          </Grid>
          <Grid
            item
            md={4}
            sm={6}
            sx={{
              display: 'flex',
              flexDirection: 'column'
            }}
            xs={12}
          >
            <Typography
              color="textPrimary"
              gutterBottom
              variant="h6"
            >
              Mensajes
            </Typography>
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="Correo electronico"
            />
            <FormControlLabel
              control={<Checkbox />}
              label="Push Notifications"
            />
            <FormControlLabel
              control={(
                <Checkbox
                  color="primary"
                  defaultChecked
                />
              )}
              label="Llamadas"
            />
          </Grid>
        </Grid>
      </CardContent>
      <Divider />
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'flex-end',
          p: 2
        }}
      >
        <Button
          color="primary"
          variant="contained"
        >
          Guardar
        </Button>
      </Box>
    </Card>
  </form>
);
