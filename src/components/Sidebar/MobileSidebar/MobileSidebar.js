import React, { useState } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import SimpleAccordion from '../Accordion/Accordion';

import './MobileSidbar.css';

const MobileSidebar = () => {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <div className='open-btn' onClick={showSidebar}>
        <span>
          <FilterAltIcon sx={{ color: '#333' }} />
        </span>
        <span>Filters</span>
      </div>
      <div className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <div className='close-btn'>
          <CloseIcon
            onClick={showSidebar}
            sx={{ color: '#fff', cursor: 'pointer' }}
          />
        </div>

        <SimpleAccordion />
      </div>
    </>
  );
};

export default MobileSidebar;
