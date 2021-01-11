import React from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

function Buttons2() {
  return (
<ButtonGroup size="large" color="primary" aria-label="large outlined primary button group" style={{marginLeft:'38%'}}>
  <Button style={{color:"red",borderColor:"red"}}>Tous</Button>
  <Button style={{color:"red",borderColor:"red"}}>Present</Button>
  <Button style={{color:"red",borderColor:"red"}}>Abscent</Button>
</ButtonGroup>
  );
}
export default Buttons2
