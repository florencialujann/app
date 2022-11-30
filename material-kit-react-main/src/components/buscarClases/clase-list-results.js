//Buscar Clases. tabla datos profesores disponibles 
import { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import PropTypes from 'prop-types';
import { format } from 'date-fns';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
  Button
} from '@mui/material';
import { getInitials } from '../../utils/get-initials';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import { FiltroCalificacion, FiltroClase, FiltroFrecuencia, FiltroModal, BasicModal, FiltroProfe } from './popups';


export const ClaseListResults = ({ clases, ...rest }) => {
  const [selectedClaseID, setSelectedClaseID] = useState([]);
  const [limit, setLimit] = useState(10);
  const [page, setPage] = useState(0);

  const handleSelectAll = (event) => {
    let newSelectedClaseID;

    if (event.target.checked) {
      newSelectedClaseID = clases.map((clase) => clase.id);
    } else {
      newSelectedClaseID = [];
    }

    setSelectedClaseID(newSelectedClaseID);
  };

  const handleSelectOne = (event, id) => {
    const selectedIndex = selectedClaseID.indexOf(id);
    let newSelectedClaseID = [];

    if (selectedIndex === -1) {
      newSelectedClaseID = newSelectedClaseID.concat(selectedClaseID, id);
    } else if (selectedIndex === 0) {
      newSelectedClaseID = newSelectedClaseID.concat(selectedClaseID.slice(1));
    } else if (selectedIndex === selectedClaseID.length - 1) {
      newSelectedClaseID = newSelectedClaseID.concat(selectedClaseID.slice(0, -1));
    } else if (selectedIndex > 0) {
      newSelectedClaseID = newSelectedClaseID.concat(
        selectedClaseID.slice(0, selectedIndex),
        selectedClaseID.slice(selectedIndex + 1)
      );
    }

    setSelectedClaseID(newSelectedClaseID);
  };

  const handleLimitChange = (event) => {
    setLimit(event.target.value);
  };

  const handlePageChange = (event, newPage) => {
    setPage(newPage);
  };

  return (
    <Card {...rest}>
      <PerfectScrollbar>
        <Box sx={{ minWidth: 100 }}>
          <Table>
            <TableHead >
              <TableRow >
                <TableCell padding="checkbox">
                  <Checkbox
                    checked={selectedClaseID.length === clases.length}
                    color="primary"
                    indeterminate={
                      selectedClaseID.length > 0
                      && selectedClaseID.length < clases.length
                    }
                    onChange={handleSelectAll}
                  />
                </TableCell>
                {/* <FilterAltIcon></FilterAltIcon> */}
                
                
                <TableCell style={{textAlign: 'Center', color:'white'}} >
                  <FiltroProfe></FiltroProfe>
                </TableCell>

                <TableCell style={{textAlign: 'Center'}}>
                  <FiltroModal></FiltroModal>
                </TableCell>

                <TableCell style={{textAlign: 'Center'}}>
                  <FiltroClase></FiltroClase>
                </TableCell>

                <TableCell style={{textAlign: 'Center'}}>
                  <FiltroCalificacion></FiltroCalificacion>
                </TableCell>

                <TableCell style={{textAlign: 'Center'}}>
                  <FiltroFrecuencia></FiltroFrecuencia>
                </TableCell>

                <TableCell style={{textAlign: 'Center'}}>
                </TableCell>


                {/* <TableCell>
                  Nombre  
                </TableCell>
                <TableCell>
                  Materia
                </TableCell>
                <TableCell>
                  Precio
                </TableCell>
               {/*  <TableCell>
                  Email
                </TableCell>
                <TableCell>
                  Teléfono
                </TableCell> */}
               {/*  <TableCell>
                  Calificación
                </TableCell>
                <TableCell>
                  Contactar
                </TableCell>  */}
              </TableRow>
            </TableHead>
            <TableBody>
              {clases.slice(0, limit).map((clase) => (
                <TableRow
                  hover
                  key={clase.id}
                  selected={selectedClaseID.indexOf(clase.id) !== -1}
                >
                  <TableCell padding="checkbox">
                    <Checkbox
                      checked={selectedClaseID.indexOf(clase.id) !== -1}
                      onChange={(event) => handleSelectOne(event, clase.id)}
                      value="true"
                    />
                  </TableCell>
                  <TableCell>
                    <Box
                      sx={{
                        alignItems: 'center',
                        display: 'flex'
                      }}
                    >
                      <Avatar
                        src={clase.avatarUrl}
                        sx={{ mr: 2 }}
                      >
                        {getInitials(clase.name)}
                      </Avatar>
                      <Typography
                        color="textPrimary"
                        variant="body1"
                      >
                        {clase.name}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell style={{textAlign: 'Center'}}>
                    {clase.materia}
                  </TableCell>
                  <TableCell style={{textAlign: 'Center'}}>
                    {clase.tipo}
                  </TableCell>
                  {/* <TableCell>
                    {clase.email}
                  </TableCell> */}
                  {/* <TableCell>
                    {clase.phone}
                  </TableCell> */}
                  <TableCell style={{textAlign: 'Center'}}>
                    {clase.calificacion}
                  </TableCell>

                  <TableCell style={{textAlign: 'Center'}}>
                    {clase.frecuencia}
                  </TableCell>

                  <TableCell>
                  <BasicModal></BasicModal>
                  </TableCell>
                  
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Box>
      </PerfectScrollbar>
      <TablePagination
        component="div"
        count={clases.length}
        onPageChange={handlePageChange}
        onRowsPerPageChange={handleLimitChange}
        page={page}
        rowsPerPage={limit}
        rowsPerPageOptions={[5, 10, 25]}
      />
    </Card>
  );
};

ClaseListResults.propTypes = {
  customers: PropTypes.array.isRequired
};
