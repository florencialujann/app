//dependencias
//incluir la constante express en el proyecto
const express = require('express');
const path = require('path');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

//configuracion de body-parser. procesa los objetos para usarlos en la app. 
//intermediario, permite tomar la info del navegador y transf en objetos hacia la API
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
//database connection
mongoose.connect(
	'mongodb+srv://root:1234' +
	'@proferdb.9j4sxhh.mongodb.net/' +
	'?retryWrites=true&w=majority',

	{useNewUrlParser: true, useUnifiedTopology: true});
mongoose.connection.on('error', err =>
{
	console.log('Error en la conexión a la base de datos', err);
});
mongoose.connection.once('open', () =>
{
	console.log('Conexión a la base de datos establecida');
});

//servidor estatico
//configurar el servidor para que sirva los archivos estaticos
//dirname contiene la ruta hacia el directorio que tiene la aplicacion, 
//nombre del subdirectorio de archivos estaticos
app.use(express.static(path.join(__dirname, '../src/pages/index.js')));
//route (accesible mediante el navegador web) 
app.get('/index.js', (req, res) =>
{
	//send envia informacion al navegador
	res.send('Abemus Server. la app sirve archivos desde el subdir index.js');
});

//ruta
//realizar las operaciones CRUD
//redirige a create.js
//app.use('/api/createinvoice', require('./routes/create.js'));
//app.use('/api/readinvoice', require('./routes/read.js'));
//app.use('/api/updateinvoice', require('./routes/update.js'));
//app.use('/api/deleteinvoice', require('./routes/delete.js'));

//puerto
app.listen(3000, () =>{
	console.log('Escuchando el puerto 3000!')

});
