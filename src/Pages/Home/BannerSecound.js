import React from 'react'


const BannerSecound = () => {
    return (
        <div className='mt-12 pb-10 bg-secondary'>
            <div className="grid lg:grid-cols-2 sm:grid-cols-1 w-5/6 mx-auto" >

                <div>
                    <img className='w-5/6 mx-auto' src="https://i.ibb.co/2WgMdrm/pana.png" alt="" />
                </div>

                <div className='mt-12'>
                    <h2 className='text-4xl mt-10 font-bold'>Welcome to <span className='text-primary'>Dwidasa Samsara Indonesia (DSI)</span></h2>

                    <p className='mt-10 text-xl'>Dwidasa Samsara Indonesia (DSI) was firstly established in 2010 by the founders, who each of them has a common end objective to innovate new creations by making the most of the ever-growing information technology through <span className='text-primary'>DSI’s </span> distinct front-end based application concept. <br /><br />

                        Managed by a team of professional experts with extensive experience and impressive track records, <span className='text-primary'>DSI’s </span> believes that continuous improvements and innovations assure your business to run effectively and efficiently.</p>
                </div>

            </div>
        </div>
    )
}

export default BannerSecound