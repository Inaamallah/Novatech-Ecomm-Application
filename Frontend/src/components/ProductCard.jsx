import React from 'react'

const ProductCard = ({ image, category, title, description, price, oldPrice, badge, rating, reviews }) => {
    return (
        <div className="bg-white   rounded-2xl shadow-md overflow-hidden w-64 md:w-72 sm:ml-10 lg:ml-0">
            <div className="relative">
                {badge && (
                    <span className="absolute top-3 left-3 bg-pink-100 text-pink-600 text-xs px-2 py-1 rounded">{badge}</span>
                )}
                <img src={image} alt={title} className="w-full transition-all duration-500 h-44 object-cover hover:scale-110" />
                <button className="absolute top-3 right-3 bg-white/90 rounded-full p-2">♡</button>
            </div>

            <div className="p-4">
                <div className="text-xs text-blue-600 font-medium">{category}</div>
                <h3 className="font-semibold mt-2">{title}</h3>
                {description && <p className="text-sm text-gray-500 mt-1">{description}</p>}

                <div className="mt-3 flex items-center justify-between">
                    <div>
                        <div className="text-lg font-bold">${price}</div>
                        {oldPrice && <div className="text-sm text-gray-400 line-through">${oldPrice}</div>}
                    </div>
                    <div className="text-sm text-gray-500">{rating} ★ <span className="text-xs text-gray-400">({reviews})</span></div>
                </div>
            </div>
        </div>
    )
}

export default ProductCard
