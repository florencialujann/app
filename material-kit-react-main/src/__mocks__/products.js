import { v4 as uuid } from 'uuid';

export const products = [
  {
    id: uuid(),
    
    nombreProfesor: 'Profesor 1',
    description: 'Descripción de la clase',
    frecuencia: 'Semanal',
    precio: '$1000',
    title: 'Álgebra',
    rol: 'Rol: Profesor'
    
  },
  {
    id: uuid(),
    nombreProfesor: 'Profesor 2',
    description: 'Descripción de la clase',
    frecuencia: 'Semanal',
    precio: '$1500',
    title: 'Análisis Matemático',
    rol: 'Rol: Profesor'
  },
  {
    id: uuid(),
    nombreProfesor: 'Profesor 3',
    description: 'Descripción de la clase',
    frecuencia: 'Semanal',
    precio: '$900',
    title: 'Matemáticas Discretas',
    rol: 'Rol: Profesor'
  },
  {
    id: uuid(),
    nombreProfesor: 'Profesor 6',
    description: 'Descripción de la clase',
    frecuencia: 'Semanal',
    precio: '$1000',
    title: 'Cocina Thai',
    rol: 'Rol: Alumno'
  },
  {
    id: uuid(),
    nombreProfesor: 'Profesor 4',
    description: 'Descripción de la clase',
    frecuencia: 'Semanal',
    precio: '$900',
    title: 'Cocina Italiana',
    rol: 'Rol: Alumno'
  },
  {
    id: uuid(),
    nombreProfesor: 'Profesor 5',
    description: 'Descripción de la clase',
    frecuencia: 'Semanal',
    precio: '$3000',
    title: 'Francés',
    rol: 'Rol: Alumno'
  }
];
