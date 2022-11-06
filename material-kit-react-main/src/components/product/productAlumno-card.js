import PropTypes from 'prop-types';
import { Avatar, Box, Card, CardContent, Divider, Grid, Typography } from '@mui/material';
import { Clock as ClockIcon } from '../../icons/clock';
import {Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Input, Label } from 'reactstrap';


export const ProductAlumnoCard = ({ productAlumno, ...rest }) => (
  
  <Card
     
    sx={{
      display: 'flex',
      flexDirection: 'column',
      height: '100%'
    }}
    {...rest}
  >
    <CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          pb: 3
        }}
      >
        
      </Box>
      <Typography
        align="center"
        color="textPrimary"
        gutterBottom
        variant="h5"
      >
        {productAlumno.title}
      </Typography>
      <Typography
        align="center"
        color="textPrimary"
        variant="body1"
      >
        {productAlumno.description},
        {productAlumno.frecuencia},
        
      </Typography>
    </CardContent>
    
    <Box sx={{ flexGrow: 1 }} />
    <Divider />
    <Box sx={{ p: 2 }}>
      <Grid
        container
        spacing={2}
        sx={{ justifyContent: 'space-between' }}
      >
        
        <Grid
          item
          sx={{
            alignItems: 'center',
            display: 'flex'
          }}
        >
          
          <Typography
            color="textSecondary"
            display="inline"
            sx={{ pl: 1 }}
            variant="body2"
            align='center'
          >
            <div>
              <div>
            {/* <Button color="primary" onClick={this.abrirModal}>Calificar Profesor</Button> */}
            <Button color="primary">Calificar Profesor</Button>
            </div></div>
            {/* <Modal isOpen={this.state.abierto }>
              <ModalHeader>Calificar Profesor</ModalHeader>
              <ModalBody>
                <FormGroup>
                  <Label for="exampleEmail">Calificación</Label>
                  <Label for="exampleSelect">Select</Label>
                  <Input type="select" name="select" id="exampleSelect">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                  </Input>
                  
                </FormGroup>
              </ModalBody>
                  
              <ModalFooter>
                <Button color="primary">Calificar Profesor</Button>
                <Button color="primary" onClick={this.abrirModal}>Calificar</Button>{' '}
              </ModalFooter> 

                    
            </Modal> */}

          </Typography>
        </Grid>
      </Grid>
    </Box>
  </Card>

  
  
);

ProductAlumnoCard.propTypes = {
  productAlumno: PropTypes.object.isRequired
};
