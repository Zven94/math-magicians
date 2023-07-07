import React, { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(null);
  // 'X-Api-Key': 'TMRyBqbm2R1fLs856R5HGg==bO9wo8NENvf7kWnI' }

  const category = 'inspirational';

  useEffect(() => {
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
          method: 'GET',
          headers: {
            'X-Api-Key': 'TMRyBqbm2R1fLs856R5HGg==bO9wo8NENvf7kWnI',
          },
        });
        const json = await res.json();
        setData(json);
      } catch (error) {
        setHasError(true);
      }

      setIsLoading(false);
    };
    fetchData();
  }, [setData, setIsLoading]);

  // condition and msg for error

  if (hasError) return <div className="quote">Something went wrong!</div>;

  // condition and msg for loading

  if (isLoading) return <div className="quote">Loading...</div>;

  return (
    <>
      {data.map((item) => (
        <div key={item.quote}>
          <h3 className="quote">
            ``
            {item.quote}
            ``
          </h3>
          <h3 className="author">
            by
            {item.author}
          </h3>
        </div>
      ))}
    </>
  );
}

export default Quote;
