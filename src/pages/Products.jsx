
// src/pages/Products.jsx
import React, { useContext, useState } from 'react';
import { ProductContext } from '../context/ProductContext';
import ProductCard from '../components/ProductCard';

const Products = () => {
  const { products } = useContext(ProductContext);
  const [currentPage, setCurrentPage] = useState(1);
  const productsPerPage = 5;

  const startIndex = (currentPage - 1) * productsPerPage;
  const endIndex = currentPage * productsPerPage;
  const currentProducts = products.slice(startIndex, endIndex);

  const totalPages = (products.length % productsPerPage === 0)
    ? products.length / productsPerPage
    : (products.length - (products.length % productsPerPage)) / productsPerPage + 1;

  const getPageButtons = () => {
    const pageButtons = [];
    for (let i = 1; i <= totalPages; i++) {
      pageButtons.push(
        <button
          key={i}
          onClick={() => setCurrentPage(i)}
          className={`px-3 py-1 rounded ${currentPage === i ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
        >
          {i}
        </button>
      );
    }
    return pageButtons;
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Products</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {currentProducts.map(product => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center gap-2">
        {getPageButtons()}
      </div>
    </div>
  );
};

export default Products;




// import React, { useContext, useState } from 'react';
// import { ProductContext } from '../context/ProductContext';
// import ProductCard from '../components/ProductCard.jsx';

// const Products = () => {
//   const { products } = useContext(ProductContext);
//   const [currentPage, setCurrentPage] = useState(1);
//   const productsPerPage = 5;

//   const indexOfLast = currentPage * productsPerPage;
//   const indexOfFirst = indexOfLast - productsPerPage;
//   const currentProducts = products.slice(indexOfFirst, indexOfLast);

//   const totalPages = Math.ceil(products.length / productsPerPage);

//   return (
//     <div className="p-4">
//       <h1 className="text-2xl font-bold mb-4">Products</h1>
//       <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
//         {currentProducts.map(product => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>

//       {/* Pagination Controls */}
//       <div className="mt-4 flex justify-center gap-2">
//         {[...Array(totalPages)].map((_, i) => (
//           <button
//             key={i}
//             onClick={() => setCurrentPage(i + 1)}
//             className={`px-3 py-1 rounded ${currentPage === i + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
//           >
//             {i + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Products;
