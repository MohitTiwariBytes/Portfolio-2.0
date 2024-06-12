import React, { useEffect } from 'react';
import './Navbar.css';
import $ from 'jquery';
import { gsap } from 'gsap';

const Navbar = () => {
  useEffect(() => {
    const t1 = gsap.timeline({ paused: true });

    t1.to('.nav-container', {
      duration: 0.6,
      left: 0,
      ease: 'expo.inOut',
    });

    t1.from('.menu__item', {
      duration: 0.8,
      y: 100,
      x: 20, // Slide slightly right
      opacity: 1,
      ease: 'expo.out',
      stagger: 0.1,
    }, '-=0.4');

    t1.from('.socials', {
      duration: 0.8,
      y: 100,
      opacity: 1,
      ease: 'expo.out',
      stagger: 0.4,
    }, '-=0.6');

    t1.reverse();

    $(document).on('click', '.menu-open', () => {
      t1.reversed(!t1.reversed());
    });

    $(document).on('click', '.menu-close', () => {
      t1.reversed(!t1.reversed());
    });

    // Cleanup on unmount
    return () => {
      $(document).off('click', '.menu-open');
      $(document).off('click', '.menu-close');
    };
  }, []);

  return (
    <div>
      <div className="menu-open">menu</div>
      <div className="nav-container">
        <div className="menu-close">close</div>
        <div className="socials">
          <span>facebook</span>
          <span>instagram</span>
        </div>
        <nav className="menu">
          <div className="menu__item">
            <a className="menu__item-link">Home</a>
            
          </div>
          <div className="menu__item">
            <a className="menu__item-link">Showcase</a>
            
          </div>
          <div className="menu__item">
            <a className="menu__item-link">About</a>
            
          </div>
          <div className="menu__item">
            <a className="menu__item-link">Contact</a>
            
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
