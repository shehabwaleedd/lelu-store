import React from 'react'

const ProductCard = ({ product }) => {
    return (
        <section>
            <div className="border border-gray-300 p-4">
                <img src={product.image} alt={product.name} className="w-full mb-4" />
                <h3 className="text-lg font-bold mb-2">{product.name}</h3>
                <p className="text-gray-700 mb-2">${product.price}</p>
                <p className="text-gray-500">{product.description}</p>
            </div>
        </section>
    )
}

export default ProductCard