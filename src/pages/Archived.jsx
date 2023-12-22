import React, { useEffect, useState } from 'react'
import Topbar from '../components/Topbar'
import Sidebar from '../components/Sidebar'
import { GrArchive, GrTrash } from 'react-icons/gr'

export default function Archived() {
    const [content, setContent] = useState([])

    const deleteContent = (id) => {
        const newContent = JSON.parse(sessionStorage?.getItem('catatanku'))?.filter((data) => {
            if (data?.id !== id) {
                return data
            }
        })
        setContent(newContent?.filter((data) => {
            if (data.archived) {
                return data
            }
        }))
        sessionStorage.setItem('catatanku', JSON.stringify(newContent))
        alert('Note succesfully deleted!')
    }
    const unarchiveContent = (id) => {
        const updatedContent = JSON.parse(sessionStorage?.getItem('catatanku'))?.map((data) => {
            if (data.id === id) {
                return { ...data, archived: false };
            }
            return data;
        });
        setContent(updatedContent?.filter((data) => {
            if (data.archived) {
                return data
            }
        }));
        sessionStorage.setItem('catatanku', JSON.stringify(updatedContent));

        alert('Note has been reactivated!');
    }

    useEffect(() => {
        setContent(JSON.parse(sessionStorage.getItem('catatanku'))?.filter((data) => {
            if (data.archived) {
                return data
            }
        }))
    }, [])

    return (
        <>
            <Topbar />
            <div className="container mx-auto">
                <main className="flex gap-5">
                    <Sidebar active_tab={2} />
                    <div className='w-full mb-5'>
                        <div className="flex justify-between items-center mb-4">
                            <h1 className='font-semibold text-2xl'>Archived Notes</h1>

                        </div>
                        {/* Content Start */}
                        {
                            content ? (
                                content?.map((data, i) => (
                                    <div className="bg-white px-7 py-8 rounded-sm border hover:bg-yellow-50 mt-3" key={i}>
                                        <h1 className='font-medium text-lg'>{data?.title}</h1>
                                        <p className='font-light text-md mt-3'>
                                            {data?.body}
                                        </p>
                                        <div className="w-full flex justify-between mt-4">
                                            <small className='font-extralight text-gray-500'>
                                                {data?.createdAt}
                                            </small>
                                            <div className="icons flex gap-3">
                                                <GrTrash
                                                    className='hover:text-red-500 hover:cursor-pointer'
                                                    onClick={() => deleteContent(data?.id)}
                                                />
                                            </div>
                                        </div>
                                    </div>
                                ))
                            ) : (
                                <h1 className='text-center'>The are no archives yet...</h1>
                            )
                        }
                    </div>
                </main>
            </div>
        </>
    )
}
