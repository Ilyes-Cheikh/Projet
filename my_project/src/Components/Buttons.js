import React from 'react';

export default function Butt({incrementer,enable}) {



  return (
    <div style={{textAlign:"center"}}>
      <button disabled={! enable} type="button" className="btn btn-success" style={{padding:'40px 40px',margin:"80px",FontSizes:"24px"}} onClick={()=>incrementer()}
>
        Present
      </button>
       <button disabled={! enable} type="button" className="btn btn-warning" style={{padding:'40px 40px',margin:"80px",color:'white'}} onClick={()=>incrementer()}
>
        Excusé
      </button>
      <button disabled={! enable} type="button" className="btn btn-danger" style={{padding:'40px 40px',margin:"80px"}} onClick={()=>incrementer()}
>
        Absent
      </button>

    </div>
  );
}