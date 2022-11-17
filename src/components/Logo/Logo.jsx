import React from 'react';
import logoComp1 from '../../assets/images/logo/logo-comp-1x.png';
import logoComp2 from '../../assets/images/logo/logo-comp-2x.png';
import logoTab1 from '../../assets/images/logo/logo-tab-1x.png';
import logoTab2 from '../../assets/images/logo/logo-tab-2x.png';
import logoMob1 from '../../assets/images/logo/logo-mob-1x.png';
import logoMob2 from '../../assets/images/logo/logo-mob-2x.png';
import { Link } from 'react-router-dom';

export default function Logo() {
  return (
    <Link to="/dairy">
      <picture>
        <source
          srcSet={`${logoComp1} 1x, ${logoComp2} 2x`}
          media="(min-width: 1280px)"
        />
        <source
          srcSet={`${logoTab1} 1x, ${logoTab2} 2x`}
          media="(min-width: 768px)"
        />
        <source
          srcSet={`${logoMob1} 1x, ${logoMob2} 2x`}
          media="(max-width: 767px)"
        />
        <img src={logoComp1} alt="logo" />
      </picture>
    </Link>
  );
}
