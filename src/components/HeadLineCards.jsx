import React from "react";

const HeadLineCards = () => {
    return (
        <div className='max-w-[1650px] mx-auto p-4 py-12 grid md:grid-cols-3 gap-6'>
            {/*--------Card1--------- */}
            <div className='rounded-xl relative'>
                {/*--------overlay------- */}
                <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>Sun's Out, BOGO'S Out</p>
                    <p className='px-2'>Through 8/26</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'> Order Now </button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="
https://images.pexels.com/photos/2471171/pexels-photo-2471171.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                " alt="/" />
            </div>

            {/*--------Card2--------- */}
            <div className='rounded-xl relative'>
                {/*--------overlay------- */}
                <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'> New restaurants </p>
                    <p className='px-2'>Addes </p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'> Order Now </button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="
https://images.pexels.com/photos/3789885/pexels-photo-3789885.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2
                " alt="/" />
            </div>

            {/*--------Card3--------- */}
            <div className='rounded-xl relative'>
                {/*--------overlay------- */}
                <div className='absolute w-full h-full bg-black/40 rounded-xl text-white'>
                    <p className='font-bold text-2xl px-2 pt-4'>We deliver desserts too</p>
                    <p className='px-2'>Tasty Treat</p>
                    <button className='border-white bg-white text-black mx-2 absolute bottom-4'> Order Now </button>
                </div>
                <img className='max-h-[160px] md:max-h-[200px] w-full object-cover rounded-xl' src="
https://images.pexels.com/photos/1854652/pexels-photo-1854652.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="/" />
            </div>

        </div>
    )
}

export default HeadLineCards