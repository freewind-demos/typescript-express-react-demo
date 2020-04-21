import axios from 'axios';
import React, {useState, useEffect} from 'react'

export default function Hello() {
  const [serverMessage, setServerMessage] = useState();

  useEffect(() => {
    (async () => {
      const message = (await axios.get('/hello/express')).data;
      setServerMessage(message);
    })();
  }, []);
  return <div>
    <h1>Server message: {serverMessage}</h1>
  </div>
};
