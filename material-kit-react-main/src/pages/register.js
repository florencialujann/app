import Head from 'next/head';
import NextLink from 'next/link';
import Router from 'next/router';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Box,
  Button,
  Checkbox,
  Container,
  FormHelperText,
  Link,
  TextField,
  Select,
  Typography,
  MenuItem,
  FormControl,
  InputLabel
  
} from '@mui/material';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

const Register = () => {
  const PerfilUsuario = [];

  const setRol = (event) => {
    formik.values.rol = event.target.value;
  };

  const Registrar = () => {
    PerfilUsuario = {
      nombre : formik.values.firstName,
      apellido : formik.values.lastName,
      email : formik.values.email,
      password : formik.values.password,
      rol : formik.values.rol,
      telefono : formik.values.telefono
    }
    globalThis.sessionStorage.setItem('rol', PerfilUsuario.rol);
    
    Router
        .push('/');
        
    };
  
  const formik = useFormik({

    initialValues: {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      telefono: '',
      rol: '',
      titulo: '',
      policy: false
    },
    validationSchema: Yup.object({

      email: Yup
        .string()
        .email('Must be a valid email')
        .max(255)
        .required(
          'Email es requerido'),
      firstName: Yup
        .string()
        .max(255)
        .required('nombre es requerido'),
      lastName: Yup
        .string()
        .max(255)
        .required('apellido es requerido'),
      password: Yup
        .string()
        .max(255)
        .required('Password es requerido'),
      telefono: Yup
        .string()
        .max(255)
        .required('telefono es requerido'),
      rol: Yup
        .string()
        .max(255) 
        .required('rol es requerido'),
      titulo: Yup
        .string()
        .max(255)
        .required('titulo es requerido'),
      policy: Yup
        .boolean()
        .oneOf(
          [true],
          'This field must be checked'
        )
    }),
    onSubmit: () => {
      Router
        .push('/')
        .catch(console.error);
    }
  });

  return (
    <>
      <Head>
        <title>
          Registrarse | PROFER
        </title>
      </Head>
      <Box
        component="main"
        sx={{
          alignItems: 'center',
          display: 'flex',
          flexGrow: 1,
          minHeight: '100%'
        }}
      >
        <Container maxWidth="sm">
          <NextLink
            href="/"
            passHref
          >
            <Button
              component="a"
              startIcon={<ArrowBackIcon fontSize="small" />}
            >
              Inicio
            </Button>
          </NextLink>
          <form onSubmit={formik.handleSubmit}>
            <Box sx={{ my: 3 }}>
              <Typography
                color="textPrimary"
                variant="h4"
              >
                Crear una cuenta
              </Typography>
              <Typography
                color="textSecondary"
                gutterBottom
                variant="body2"
              >
                Usa tu correo electrónico para crear una cuenta
              </Typography>
            </Box>
            <TextField
              error={Boolean(formik.touched.firstName && formik.errors.firstName)}
              fullWidth
              helperText={formik.touched.firstName && formik.errors.firstName}
              label="Nombre"
              margin="normal"
              name="firstName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.firstName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.lastName && formik.errors.lastName)}
              fullWidth
              helperText={formik.touched.lastName && formik.errors.lastName}
              label="Apellido"
              margin="normal"
              name="lastName"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.lastName}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.email && formik.errors.email)}
              fullWidth
              helperText={formik.touched.email && formik.errors.email}
              label="Correo Electrónico"
              margin="normal"
              name="email"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="email"
              value={formik.values.email}
              variant="outlined"
            />
            <TextField
              error={Boolean(formik.touched.telefono && formik.errors.telefono)}
              fullWidth
              helperText={formik.touched.telefono && formik.errors.telefono}
              label="Numero de telefono"
              margin="normal"
              name="telefono"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              value={formik.values.telefono}
              variant="outlined"
              
            />
            <TextField
              error={Boolean(formik.touched.password && formik.errors.password)}
              fullWidth
              helperText={formik.touched.password && formik.errors.password}
              label="Contraseña"
              margin="normal"
              name="password"
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              type="password"
              value={formik.values.password}
              variant="outlined"
            />
            <FormControl fullWidth>
              <InputLabel id="tipodeusuario">rol</InputLabel>
              <Select
                labelId="tipodeusuario"
                id="tipodeusuario"
                label="Rol"
                onChange={setRol}
              >
                <MenuItem value={"Profesor"}>Profesor</MenuItem>
                <MenuItem value={"Alumno"}>Alumno</MenuItem>
              </Select>
            </FormControl>

            <Box
              sx={{
                alignItems: 'center',
                display: 'flex',
                ml: -1
              }}
            >
              <Checkbox
                checked={formik.values.policy}
                name="policy"
                onChange={formik.handleChange}
              />
              <Typography
                color="textSecondary"
                variant="body2"
              >
                He leído y acepto los
                {' '}
                <NextLink
                  href="#"
                  passHref
                >
                  <Link
                    color="primary"
                    underline="always"
                    variant="subtitle2"
                  >
                    Términos y Condiciones
                  </Link>
                </NextLink>
              </Typography>
            </Box>
            {Boolean(formik.touched.policy && formik.errors.policy) && (
              <FormHelperText error>
                {formik.errors.policy}
              </FormHelperText>
            )}
            <Box sx={{ py: 2 }}>
              <Button
                color="primary"
                disabled={formik.isSubmitting}
                fullWidth
                size="large"
                type="submit"
                variant="contained"
                onClick={Registrar}
              >
                Registrarme Ahora!
              </Button>
            </Box>
            <Typography
              color="textSecondary"
              variant="body2"
            >
              Ya tienes una cuenta?
              {' '}
              <NextLink
                href="/login"
                passHref
              >
                <Link
                  variant="subtitle2"
                  underline="hover"
                >
                  Inicia Sesión
                </Link>
              </NextLink>
            </Typography>
          </form>
        </Container>
      </Box>
    </>
  );
};

export default Register;
