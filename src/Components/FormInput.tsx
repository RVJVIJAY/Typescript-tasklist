import React from "react";
import { Statedata, type Alldata } from "../Type";

interface Formdata extends Statedata {
  setalldata: React.Dispatch<React.SetStateAction<Alldata[]>>;
  alldata: Alldata[];
  editid:number | null,
  seteditid:React.Dispatch<React.SetStateAction<number | null>>
}

const FormInput: React.FC<Formdata> = ({
  data,
  setdata,
  setalldata,
  alldata,
  editid,
  seteditid
}) => {
 
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmedData = data.trim();

    if (trimmedData === "") {
      alert("Please fill the field first");
      return;
    }

    if (editid) {
      setalldata((prev) =>
        prev.map((item) =>
          item.id === editid ? { ...item, data: trimmedData } : item
        )
      );
      seteditid(null); 
    } else {
      const id = alldata.length > 0 ? Math.max(...alldata.map(item => item.id)) + 1 : 1; // Unique ID
      const newdata = { id, data: trimmedData };
      setalldata((prev) => [...prev, newdata]);
    }

    setdata(''); // Clear the input field
  };

  return (
    <div className="form-container">
      <form onSubmit={handleSubmit} className="form">
        <input
          type="text"
          placeholder="enter the title"
          value={data}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setdata(e.target.value)
          }
        />
        <button className="btn">{editid ? "Update task":"Add To task"}</button>
      </form>
    </div>
  );
};

export default FormInput;
