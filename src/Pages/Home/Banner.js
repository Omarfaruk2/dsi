import React from 'react'

const Banner = () => {

    return (
        <div className='mt-12'>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-5/6 mx-auto" >

                <div className='mt-12 order-last'>
                    <h2 className='text-4xl font-bold'>Making the most of the ever-growing </h2>
                    <h2 className='text-4xl my-3 font-bold text-primary'>Information Technology</h2>
                    <p className='text-xl my-6'>Managed by a team of professional experts with extensive experience and impressive track records</p>
                    {/* <div className="btn btn-primary">Read More</div> */}
                    <button className="btn btn-active btn-primary">Read More</button>
                </div>
                <div>
                    <img className='w-full sm:order-first' src="https://i.ibb.co/XX7TQH6/pana.png" alt="" />
                </div>
            </div>
        </div>
    )
}

export default Banner