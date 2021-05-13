import React, { useState, useEffect } from "react";
import { helpHttp } from "../helpers/helpHttp";
import CrudForm from "./CrudForm";
import CrudTable from "./CrudTable";

const CrudApi = () => {
  const [db, setDb] = useState([]);
  const [dataToEdit, setDataToEdit] = useState(null);
  const [error, setError] = useState(null);

  let api = helpHttp();
  let url = "http://localhost:5000/santos";

  // cuando tengo el obejeto vacio o sea el [], el segundo parametro
  // solo se ejecutara solo una vez
  useEffect(() => {
    api.get(url).then((res) => {
        // console.log(res);
        if (!res.err) {
            setDb(res);
        } else {
            setDb(null);
        }
    })
  }, [url])

  const createData = (data) => {
    data.id = Date.now();
    //console.log(data);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.post(url, options).then((res) => {
      console.log(res);
      if (!res.err) {
        setDb([...db, res]);
      } else {
        setError(res);
      }
    });
  };

  const updateData = (data) => {
    let endpoint = `${url}/${data.id}`;
    // console.log(endpoint);

    let options = {
      body: data,
      headers: { "content-type": "application/json" },
    };

    api.put(endpoint, options).then((res) => {
      console.log(res);
      if (!res.err) {
        let newData = db.map(el => el.id === data.id ? data : el);
        setDb(newData);
      } else {
        setError(res);
      }
    });

  };

  const deleteData = (id) => {
    let isDelete = window.confirm(
      `Estas seguro que deseeas eliminar el registro? '${id}'?`
    );
    
    if(isDelete) {
      let endpoint = `${url}/${id}`;
      let options = {
        headers: { "content-type": "application/json" },
      };

      api.del(endpoint, options).then((res) => {
        console.log(res);
      if (!res.err) {
        let newData = db.filter((el) => el.id !== id);
        setDb(newData);
      } else {
        setError(res);
      }
    });
    } else {
      return;
    }
  };


  return (
    <div>
      <h2>CRUD Appi</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        <CrudTable
          data={db}
          setDataToEdit={setDataToEdit}
          deleteData={deleteData}
        />
      </article>
    </div>
  );
};

export default CrudApi;
