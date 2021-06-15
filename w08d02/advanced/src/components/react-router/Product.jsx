import { useEffect } from 'react';
import { useParams, useHistory } from 'react-router-dom';

const Product = () => {
  const params = useParams();
  // console.log(params);

  const history = useHistory();
  console.log(history);

  useEffect(() => {
    setTimeout(() => {
      history.push('/about');
    }, 3000);
  }, [history]);

  // useEffect(() => {
  //   axios.get(`/products/${params.productId}`)
  //     .then(res => console.log(res.data));
  // }, [params.productId]);

  return (
    <div>
      <h2>Product #{params.productId}</h2>
    </div>
  );
};

export default Product;
