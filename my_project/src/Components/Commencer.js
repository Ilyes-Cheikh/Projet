import React from 'react';
import Button from '@material-ui/core/Button';
let cssstyle = {
    width: "1050px",
    height: "185px",
    borderStyle: "solid",
    borderRadius: "25px",
    marginTop: "30px",
    marginBottom:"30px",
    borderTopWidth: "3px",
    borderRightWidth: "3px",
    borderLeftWidth: "3px",
    borderBottomWidth: "3px",
    paddingTop: "30px",
    margin:"auto",
    borderColor: "white",
};
function Commencer({enable,handleClick,Name,compteur})
{ return(
    <div style ={cssstyle}>
    {! enable ? <Button color="secondary" style={{marginTop:'40px',marginLeft:'43%'}} onClick={()=>handleClick()}> Commencer </Button> : <div style={{color:"white",marginLeft:'43%',marginTop:'30px'}}>{Name[compteur]}</div>}
</div>
);

}
export default Commencer;