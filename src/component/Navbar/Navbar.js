import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className='container'>
      <ol className='flex flex-col sm:flex-row sm:justify-evenly sm:items-center p-3 border-b-2'>
        <li className='mb-2 sm:mb-0'><Link to="/MedicineCategory" className='text-md hover:text-blue-500'>Medicines</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/PersonalCategory" className='text-md hover:text-blue-500'>Personal Care</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/BabyCareCategory" className='text-md hover:text-blue-500'>Baby Care</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/LifeStyleCategory" className='text-md hover:text-blue-500'>Lifestyle & Fitness</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/OrganiceCategory" className='text-md hover:text-blue-500'>Organic</Link></li>
        <li className='mb-2 sm:mb-0'><Link to="/HealthCareCategory" className='text-md hover:text-blue-500'>Healthcare Devices</Link></li>
        <li><Link to="/dawaai-plus" className='text-md hover:text-blue-500'>Dawaai Plus</Link></li>
      </ol>
    </div>
  );
}

export default Navbar;
