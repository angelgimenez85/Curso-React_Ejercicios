import React, { useState, useEffect } from 'react';
import CrudForm from './CrudForm';
import CrudTable from './CrudTable';
import { helpHttp } from '../helpers/helpHttp';
import Loader from './Loader';
import Message from './Message';

const CrudApi = () => {
  const [db, setDb] = useState(null);
  const [dataToEdit, setDataToEdit] = useState();
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const api = helpHttp();
  const url = 'http://localhost:3000/santos';

  useEffect(() => {
    setLoading(true);
    api.get(url).then((res) => {
      setTimeout(() => {
        if (!res.err) {
          setDb(res);
          setError(null);
        } else {
          setDb(null);
          setError(res);
        }
        setLoading(false);
      }, 1000);
    });
  }, []);

  const createData = (data) => {
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    api.post(url, options).then((res) => {
      !res.err ? setDb([...db, res]) : setError(res);
    });
  };

  const updateData = (data) => {
    const endpoint = `${url}/${data.id}`;
    const options = {
      body: data,
      headers: { 'content-type': 'application/json' },
    };
    api.put(endpoint, options).then((res) => {
      if (!res.err) {
        let newData = db.map((el) => (el.id === data.id ? data : el));
        setDb(newData);
      } else {
        setError(res);
      }
    });
  };

  const deleteData = (id) => {
    if (confirm('¿Seguro deseas eliminar el registro?')) {
      const endpoint = `${url}/${id}`;
      api.del(endpoint).then((res) => {
        if (!res.err) {
          const newDb = db.filter((el) => el.id !== id);
          setDb(newDb);
        } else {
          setError(res);
        }
      });
    }
  };

  return (
    <div>
      <h2>CRUD API</h2>
      <article className="grid-1-2">
        <CrudForm
          createData={createData}
          updateData={updateData}
          dataToEdit={dataToEdit}
          setDataToEdit={setDataToEdit}
        />
        {loading && <Loader />}
        {error && (
          <Message
            msg={`Error ${error.status}:   ${error.statusText}`}
            bgColor="#dc3545"
          />
        )}
        {db && (
          <CrudTable
            data={db}
            setDataToEdit={setDataToEdit}
            deleteData={deleteData}
          />
        )}
      </article>
    </div>
  );
};

export default CrudApi;
