import React from 'react';


const SummaryCard = ({data}) => {
    return (
       <div className='border-2 border-black rounded-lg px-10 py-5 flex flex-col items-center justify-center' style={{backgroundColor:`#${data.bg}`}}>
        <p className='text-2xl font-semibold mb-4'>${data.amount}</p>
        <p className='text-lg'>{data.description}</p>
       </div>
    );
  };


  export default SummaryCard