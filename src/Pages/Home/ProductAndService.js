import { Icon } from '@iconify/react'
import React from 'react'

const ProductAndService = () => {

    return (
        <div className='mt-16'>
            <h2 className='text-center font-bold text-3xl'>Product and Service</h2>

            <div className='grid lg:grid-cols-3 sm:grid-cols-1 mt-10 gap-y-5 mx-auto w-5/6'>

                {/* first service */}
                <div>
                    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 text-primary">
                            <Icon className='text-6xl' icon="eos-icons:product-subscriptions" />
                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Our Product</h2>

                            <p>Our product is made on the base of our team’s careful who is very much research and analyses, ranging from internet based application.</p>
                            <div className="card-actions my-5">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>


                {/* secound service */}
                <div>
                    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 text-primary">
                            <Icon className='text-6xl' icon="ic:round-local-laundry-service" />

                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Our Service</h2>

                            <p>
                                DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.


                            </p>
                            <div className="card-actions my-5">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>

                </div>

                {/* Third service */}
                <div>
                    <div className="card w-11/12 mx-auto bg-base-100 shadow-xl">
                        <figure className="px-10 pt-10 text-primary">
                            <Icon className='text-6xl ' icon="icon-park-solid:setting-computer" />

                        </figure>

                        <div className="card-body items-center text-center">
                            <h2 className="card-title text-primary">Our Service</h2>

                            <p>
                                DSI’s shared service solutions focus on the front-end based software development, designed specifically for the banking and financial sectors.


                            </p>
                            <div className="card-actions my-5">
                                <button className="btn btn-primary">Read More</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductAndService