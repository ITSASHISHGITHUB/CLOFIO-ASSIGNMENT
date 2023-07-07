import React from 'react';
import Card from "./components/SummaryCard"
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import TableContent from './components/TableContent';
import {TableData,SummaryData} from './Data';

const CardList = () => {
  return (
    <div className="flex flex-col w-full min-h-screen relative">
      <Sidebar/>
      <Header/>
      <div className='flex w-full h-auto items-center justify-center gap-x-10'>
      {SummaryData.map((item)=>(
        <Card key={item.id} data={item}/>
      ))}
      </div>
      <div className='w-full flex flex-col items-center justify-center'>
      {TableData.map((item) => (
        <TableContent key={item.id} data={item} />
      ))}
      </div>
    </div>
  );
};
export default CardList;
