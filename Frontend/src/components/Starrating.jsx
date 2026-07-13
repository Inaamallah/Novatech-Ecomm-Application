import React from 'react'
import { Star } from 'lucide-react'
const Starrating = ({ Rating }) => {
    return (
        <div className='flex gap-1 items-center'>
            {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} size={16} className={
                    i <= Rating
                        ? "fill-yellow-400 text-yellow-400"
                        : "fill-gray-200 text-gray-200"
                } />
            ))}

            <span>& Up</span>
        </div>
    )
}

export default Starrating
