import React, { useState, useEffect } from 'react';

function Quote() {
  const [data, setData] = useState([]);
  // 'X-Api-Key': 'TMRyBqbm2R1fLs856R5HGg==bO9wo8NENvf7kWnI' }

  const category = 'inspirational';

  useEffect(() => {
    const fetchData = async () => {
      const res = await fetch(`https://api.api-ninjas.com/v1/quotes?category=${category}`, {
        method: 'GET',
        headers: {
          'X-Api-Key': 'TMRyBqbm2R1fLs856R5HGg==bO9wo8NENvf7kWnI',
        },
      });
      const json = await res.json();
      setData(json);
    };
    fetchData();
  }, [setData]);

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
