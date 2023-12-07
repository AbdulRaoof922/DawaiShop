import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container'>
      <ol className='flex flex-col sm:flex-row sm:justify-evenly sm:items-center p-3 border-b-2'>
        <li className='mb-2 sm:mb-0'><Link to="/medicines" className='text-md hover:text-blue-500'>Medicines</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/personal-care" className='text-md hover:text-blue-500'>Personal Care</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/baby-care" className='text-md hover:text-blue-500'>Baby Care</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/lifestyle-fitness" className='text-md hover:text-blue-500'>Lifestyle & Fitness</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/organic" className='text-md hover:text-blue-500'>Organic</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/healthcare-devices" className='text-md hover:text-blue-500'>Healthcare Devices</Link></li>
        <li><Link to="/dawaai-plus" className='text-md hover:text-blue-500'>Dawaai Plus</Link></li>
      </ol>
    </div>
  );
}

export default Navbar;
