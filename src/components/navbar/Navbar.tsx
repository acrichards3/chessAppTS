import React, { useState, useEffect } from 'react';
import Topbar from './topbar/Topbar';
import MobileNav from './mobile/MobileNav';

export default function Navbar() {
  const screenWidth: number = window.innerWidth;
  const [width, setWidth] = useState(screenWidth);
  const breakpoint: number = 600;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? <MobileNav /> : <Topbar />;
}
