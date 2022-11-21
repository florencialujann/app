import { formatDistanceToNow, subHours } from 'date-fns';
import { v4 as uuid } from 'uuid';
import {
  Box,
  Button,
  Card,
  CardHeader,
  Divider,
  IconButton,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Grid
} from '@mui/material';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const products = [
  {
    id: uuid(),
    name: 'Dropbox',
    imageUrl: '/static/images/products/product_1.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Medium Corporation',
    imageUrl: '/static/images/products/product_2.png',
    updatedAt: subHours(Date.now(), 2)
  },
  {
    id: uuid(),
    name: 'Slack',
    imageUrl: '/static/images/products/product_3.png',
    updatedAt: subHours(Date.now(), 3)
  },
  {
    id: uuid(),
    name: 'Lyft',
    imageUrl: '/static/images/products/product_4.png',
    updatedAt: subHours(Date.now(), 5)
  },
  {
    id: uuid(),
    name: 'GitHub',
    imageUrl: '/static/images/products/product_5.png',
    updatedAt: subHours(Date.now(), 9)
  }
];

export const PublicidadProfe = (props) => (
  <Card {...props}>
    {
      <Box>
        
        <Grid
        /* item
        lg={6}
        md={6}
        xl={6}
        xs={6} */>
          <div align='center' >
          <h1>
            ¡Viví de lo que te apasiona!
          </h1>
          </div>
          <div align="justify">

            <p>Independiente y sin intermediarios, enseñá en tu ciudad o barrio a alumnos geniales.
          <br></br>
            Idiomas, deportes, música, arte, ocio, apoyo escolar, ayuda con los deberes, materias académicas, más de 1000 materias para enseñar.
          <br></br>
            Estudiantes, profesores, maestras, profes, autodidactas, apasionados de la enseñanza...¡Sumate a la comunidad de Superprofes! Te esperamos </p>
            </div>
            <div align='center' > 
            <img
              
          alt="Estudia con Profer"
              src="/static/images/claseVirtual/clases-ingles-online-nativos-1-cuadrada.jpeg"
              
        />
        </div>
        </Grid>
        
        
        

        

        
      </Box>
    }
{/*     <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Products"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
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
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Mirar Todos
      </Button>
    </Box> */}
  </Card>
);

export const PublicidadAlumno = (props) => (
  <Card {...props}>
    {
      <Box>
        <Grid
        >
        <div align="justify">
        <h1>
          Buscá tu clase
          <br></br>
        </h1>

        <p>Independiente y sin intermediarios, toma clases desde cualquier lugar con Exelentes profesores .
        <br></br>
         Idiomas, deportes, música, arte, ocio, apoyo escolar, ayuda con los deberes, materias académicas, más de 1000 materias para aprender.
        <br></br>
        ¡Sumate a la comunidad de Alumnos de Profer! Te esperamos </p>
        </div>
        <div align="center">
        <img
              style={{
              }}
              
              alt="Estudia con Profer"
              src="/static/images/claseVirtual/claseVirtualDibujoPRof.png"
        />
        </div>
        </Grid>
      </Box>
    }
{/*     <CardHeader
      subtitle={`${products.length} in total`}
      title="Latest Products"
    />
    <Divider />
    <List>
      {products.map((product, i) => (
        <ListItem
          divider={i < products.length - 1}
          key={product.id}
        >
          <ListItemAvatar>
            <img
              alt={product.name}
              src={product.imageUrl}
              style={{
                height: 48,
                width: 48
              }}
            />
          </ListItemAvatar>
          <ListItemText
            primary={product.name}
            secondary={`Updated ${formatDistanceToNow(product.updatedAt)}`}
          />
          <IconButton
            edge="end"
            size="small"
          >
            <MoreVertIcon />
          </IconButton>
        </ListItem>
      ))}
    </List>
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
        endIcon={<ArrowRightIcon />}
        size="small"
        variant="text"
      >
        Mirar Todos
      </Button>
    </Box> */}
  </Card>
);
