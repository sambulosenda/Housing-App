import Image from "next/image"
import banner from '../public/hero.jpeg'


function Banner() {
    return (
        <div className="relative h-[300px] sm:h[400px] lg:h=[500px] xl:h-[600px] 2xl:h-[700px] ">
            <Image src={banner}
            layout = 'fill'
            objectFit="cover"
            />
            <div className="absolute top-1/2 w-full text-center">
                <p>Not sure sure where to go sadsa?</p>
                <button className="text-purple-500 bg-white px-10 py-4 shadow-md rounded-full font-bold my-3 hover:shadow-xl ">I am flexsdsdsdsible </button>
            </div>


        </div>
    )
}

export default Banner

//pick todays date
