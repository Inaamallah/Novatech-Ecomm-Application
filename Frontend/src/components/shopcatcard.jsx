import React from "react";

const ShopCard = ({ image, productName, productNumber }) => {
    return (
        <div className="group rounded-3xl overflow-hidden shadow-lg cursor-pointer">
            <div className="relative overflow-hidden">

                {/* Image */}
                <img
                    src={image}
                    alt={productName}
                    className="w-full h-72 object-cover transition-transform duration-500 group-hover:scale-110"
                />

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                {/* Bottom Content */}
                <div className="absolute bottom-0 left-0 right-0 flex items-center justify-between p-6">

                    {/* Text */}
                    <div>
                        <h3 className="text-white text-xl font-semibold">
                            {productName}
                        </h3>

                        <p className="text-white/70 text-sm">
                            {productNumber} Products
                        </p>
                    </div>

                    {/* Arrow */}
                    <button className="w-11 h-11 rounded-full bg-white group-hover:bg-blue-500 flex items-center justify-center transition-colors duration-300">
                        <span className="text-2xl text-slate-900  group-hover:text-white transition-colors duration-300">
                            →
                        </span>
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ShopCard;