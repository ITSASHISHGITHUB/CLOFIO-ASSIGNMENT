import React from 'react'

export default function Sidebar() {
  return (
    <div className='w-20 min-h-screen bg-black/10 absolute left-0 flex flex-col justify-between items-center py-10'>
        <div className='w-full flex flex-col justify-between items-center py-10 gap-y-3'>
            <div className='w-6 h-6 border border-black'></div>
            <div className='w-6 h-6 border border-black'></div>
            <div className='w-6 h-6 border border-black'></div>
            <div className='w-6 h-6 border border-black'></div>
            <div className='w-6 h-6 border border-black'></div>
        </div>
        <div className='w-12 h-12 bg-purple-200 text-purple-900 flex items-center justify-center rounded-full text-xl font-bold'><p>VK</p></div>
    </div>
  )
}

