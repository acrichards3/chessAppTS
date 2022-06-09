import React, { useState, useEffect } from 'react';
import Topbar from './topbar/Topbar';
import MobileNav from './mobile/MobileNav';

export default function Navbar() {
  const [width, setWidth] = useState(window.innerWidth);
  const breakpoint: number = 768;

  useEffect(() => {
    window.addEventListener('resize', () => setWidth(window.innerWidth));
  }, []);

  return width < breakpoint ? <MobileNav /> : <Topbar />;
}