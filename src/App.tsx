import React, { useState } from 'react';
import FormInput from './Components/FormInput';
import { Alldata } from './Type';
import ListData from './Components/ListData';
function App() {
  const [data,setdata]=useState<string>('')
  const [alldata,setalldata]=useState<Alldata[]>([]);
  const [editid,seteditid]=useState<number | null>(null);

  const handleedit=(id:number)=>{
    const updatedata=alldata.find((item)=>item.id===id)
    console.log(updatedata)
    if(updatedata){
      setdata(updatedata.data)
      seteditid(id)
    }
  }
  return (
    <div className="App">
      <h1 > Task List </h1>
        <FormInput data={data} setdata={setdata} setalldata={setalldata} alldata={alldata} editid={editid} seteditid={seteditid}/>
        <ListData setalldata={setalldata} alldata={alldata} handleedit={handleedit}/>
    
    </div>
  );
}

export default App;
