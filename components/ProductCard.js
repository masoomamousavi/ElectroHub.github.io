function ProductCard({ image, description, price }) {
    return (

        <div className="bg-white overflow-hidden shadow-md rounded-md hover:shadow-lg">
            <div className="h-56 flex justify-center items-center p-5">
                <img src={image} className="h-full " />
            </div>
            <div className="text-sm md:h-24 h-auto flex items-center text-slate-500 px-4 pb-5 text-justify">
                <p className="line-clamp-4">{description}</p>
            </div>
            <div className="border-t border-slate-300 flex justify-between items-center py-4 px-5">
                <button className="bg-sky-600 hover:bg-sky-700 text-white rounded-md p-2 text-sm cursor-pointer">Add to Card</button>
                <p className="text-slate-800">{price}</p>
            </div>
        </div>

    )
}
export default ProductCard;