import React, { useEffect, useState } from "react";

function Api() {
  const [products, setProducts] = useState([]);

  const fetchdata = async () => {
    try {
      const result = await fetch("https://fakestoreapi.com/products");
      const finalresult = await result.json();
      setProducts(finalresult);
    } catch (error) {
      console.log("error occur ", error);
    }
  };

  useEffect(() => {
    fetchdata();
  }, []);

  return (
    <div className="flex flex-wrap justify-center gap-4">
      {products.map((product) => (
        <div
          key={product.id}
          className="max-w-xs rounded overflow-hidden shadow-lg bg-white"
        >
          <img
            className="w-full h-48 object-cover object-center"
            src={product.image}
            alt={product.title}
          />
          <div className="px-6 py-4">
            <div className="font-bold text-xl mb-2">{product.title}</div>
            <p className="text-gray-700 text-base">{product.description}</p>
          </div>
          <div className="px-6 pt-4 pb-2">
            <span className="inline-block bg-green-200 rounded-full px-3 py-1 text-sm font-semibold text-green-800 mr-2 mb-2">
              Price: ${product.price}
            </span>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Api;
