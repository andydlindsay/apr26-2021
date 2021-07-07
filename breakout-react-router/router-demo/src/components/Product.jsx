import {useParams, useHistory} from 'react-router-dom';
import {useEffect, useState} from 'react';

const Product = () => {
  const params = useParams(); // req.params
  const history = useHistory();
  // const [user, setUser] = useState({});

  // useEffect(() => {
  //   setUser(prev => ({ ...prev, email: 'somethingelse' }));
  // }, [setUser]);

  useEffect(() => {
    setTimeout(() => {
      history.push('/');
    }, 3000);
  }, [history]);

  return (
    <div>
      <h2>Eight Track Number #{params.productId}</h2>
    </div>
  );
};

export default Product;
