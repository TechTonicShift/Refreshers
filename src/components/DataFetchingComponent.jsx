import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ProductCard from './ProductCard';

function DataFetchingComponent() {
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const promises = Array.from({ length: 10 }, (_, index) =>
          fetch(`https://jsonplaceholder.typicode.com/todos/${index + 1}`)
        );

        const responses = await Promise.all(promises);

        const data = await Promise.all(
          responses.map((response) => {
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
            return response.json();
          })
        );

        setDataList(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div>
      <h2>Product List:</h2>
      <div>
        {dataList.map((data, index) => (
          <ProductCard
            key={index}
            productId={index + 1}
            title={`Product ${index + 1}`}
            subtitle={`Subtitle for Product ${index + 1}`}
            content={`Some quick example text for Product ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}

export default DataFetchingComponent;
