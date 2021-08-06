import Image from "next/image";

function SmallCover({img, location, distance}) {
    return (
        <div className="flex items-center m-2 mt-5 space-x-4 rounded-xl cursor-pointer hover:bg-gray-100 hover::scale-105" >
            <div className="relative h-16 w-16">
                <Image src={img} layout="fill" className="rounded-full" />
                
            </div>

            <div>
                <h1>{location}</h1>
                <h3 className="text-gray-300">{distance}</h3>
                </div>
        </div>
    )
}

export default SmallCover
