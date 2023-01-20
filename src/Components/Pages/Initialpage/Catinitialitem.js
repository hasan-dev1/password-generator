import React from 'react';
import { FaHandPointLeft } from 'react-icons/fa';

const Catinitialitem = () => {
    return (
        <div className='flex flex-col justify-start items-center mt-12 min-h-[70vh]'>
            <h3 className='text-4xl'>Select A Category</h3>
            <FaHandPointLeft className='text-4xl'></FaHandPointLeft>
        </div>
    );
};

export default Catinitialitem;