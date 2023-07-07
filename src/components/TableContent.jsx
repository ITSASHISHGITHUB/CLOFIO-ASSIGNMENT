import React from 'react'



export default function TableContent({ data }) {
  return (
    <div className='pl-24 w-4/5 border-2 border-black rounded-xl px-32 first-of-type:mt-12 py-5 mb-6'>
      <table className='w-full'>
        <caption className='text-start text-3xl font-semibold mb-4'>{data.title}</caption>
        <tr className='border-t border-b border-black '>
          {data.heads.map((head, index) => (
            <th className='text-start text-xl font-semibold py-2' key={index}>
              {head}
            </th>
          ))}
        </tr>
        <tr className='text-xl'>
          {data.data.map((value, index) => (
            <td className='pt-2 py-2' key={index}>
              {value}
            </td>
          ))}
          {data.hasButton && (
            <td className='pt-2 py-2'>
              {data.hasButton.map((button) => (
                <button className='px-4 py-1 mr-2  text-black border border-black rounded-xl hover:text-white hover:bg-black/50' key={button.id}>
                  {button.text}
                </button>
              ))}
            </td>
          )}
        </tr>
      </table>
    </div>
  );
}


