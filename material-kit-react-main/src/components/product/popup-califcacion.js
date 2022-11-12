import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'material-kit-react-main/src/components/settings/settings-popup-calificacion';

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
		<div>Califica a tu Profesor!!</div>
		<div></div>
  </Popup>
);