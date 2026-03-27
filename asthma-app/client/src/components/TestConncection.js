import axios from 'axios';
import { useEffect } from 'react';

function TestConnection() {
  useEffect(() => {
    axios.get('http://localhost:5000/api/test')
      .then(res => {
        console.log('SUCCESS:', res.data);
      })
      .catch(err => {
        console.error('ERROR:', err);
      });
  }, []);

  return <div>Check console</div>;
}

export default TestConnection;