import React from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';

export default () => (
  <Popup trigger={<button> Trigger</button>} position="right center">
		<div>Califica a tu Profesor !!</div>
		<div></div>
  </Popup>
);