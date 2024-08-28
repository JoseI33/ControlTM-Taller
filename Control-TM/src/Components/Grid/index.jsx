const Grid = () => {
    return (
        <div className="bg-white cursor-pointer w-46 h-60 rounded-lg">
            <figure className="relative mb-2 w-full h-4/5">
                <span className="absolute bottom-0 left-0 bg-white/60 rounded-lg text-black text-xs m-2 px-3 py-0.5"></span>
                <img className="w-full h-full object-cover rounded-lg" src="https://images.pexels.com/photos/6834429/pexels-photo-6834429.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="prueba" />
            </figure>
        </div>
    )
}

export default Grid