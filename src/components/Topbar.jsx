import React from 'react'
import { Link } from 'react-router-dom'

export default function Topbar() {
    return (
        <>
            <div className="container my-4">
                <div className="flex justify-between">
                    <div className="pl-4">
                        <Link to="/">
                            <button className='text-xs sm:text-sm md:text-lg lg:text-2xl xl:text-3xl font-bold'>Notes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    )
}
