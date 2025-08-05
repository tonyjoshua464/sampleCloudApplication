import React, { useLayoutEffect, useState } from "react";
import logo from '../logo.svg';
import { Outlet } from "react-router-dom";

const Layout = () => {
    // Primary brand colors
    const colors = {
      primary: '#6e8efb',
      secondary: '#a777e3',
      dark: '#2d3748',
      light: '#f8f9fa',
      accent: '#4c51bf'
    };

    useLayoutEffect(() => {
        const getData = async() => {
            try {
                const result = await fetch('/api/v1/test')
                const data = await result.json()
                console.log(data)
            } catch (error) {
                console.error("Error fetching data:", error);
            }
        }

        getData()
    }, []); // Empty dependency array to run only once

    return(
        <>
        {/* Modern Header with Gradient */}
        <header 
          className="site-header" 
          style={{ 
            background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
            color: 'white', 
            padding: '15px 0',
            boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
            position: 'sticky',
            top: 0,
            zIndex: 1000
          }}
        >
          <div 
            className="container" 
            style={{ 
              width: '90%', 
              maxWidth: '1200px', 
              margin: '0 auto', 
              display: 'flex', 
              alignItems: 'center', 
              justifyContent: 'space-between'
            }}
          >
            <div className="logo">
              <a href="#" style={{ textDecoration: 'none', display: 'flex', alignItems: 'center' }}>
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  style={{ 
                    width: '40px', 
                    height: '40px',
                    filter: 'brightness(0) invert(1)'  // Makes SVG white
                  }}
                />
                <span style={{ 
                  marginLeft: '10px', 
                  fontSize: '1.5rem', 
                  fontWeight: '700',
                  color: 'white',
                  letterSpacing: '0.5px'
                }}>
                  CloudPipeline
                </span>
              </a>
            </div>

            {/* Modern Navigation */}
            <nav className="main-nav">
              <ul 
                style={{ 
                  display: 'flex', 
                  listStyle: 'none', 
                  padding: 0, 
                  margin: 0,
                  gap: '30px'
                }}
              >
                {['Home', 'About', 'Services', 'Contact'].map((item, index) => (
                  <li key={index}>
                    <a 
                      href={index === 0 ? "/" : `/${item.toLowerCase()}`}
                      style={{ 
                        color: 'white', 
                        textDecoration: 'none', 
                        fontSize: '1rem',
                        fontWeight: '500',
                        padding: '5px 0',
                        borderBottom: '2px solid transparent',
                        transition: 'all 0.3s ease'
                      }}
                      onMouseOver={(e) => {
                        e.target.style.borderBottom = '2px solid white';
                      }}
                      onMouseOut={(e) => {
                        e.target.style.borderBottom = '2px solid transparent';
                      }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>

            {/* Search with improved styling */}
            <div style={{ display: 'flex', alignItems: 'center' }}>
              <div 
                className="search-bar" 
                style={{ 
                  display: 'flex', 
                  alignItems: 'center',
                  background: 'rgba(255,255,255,0.2)',
                  borderRadius: '30px',
                  padding: '5px 15px'
                }}
              >
                <input 
                  type="text" 
                  placeholder="Search..." 
                  style={{ 
                    padding: '8px', 
                    border: 'none',
                    background: 'transparent',
                    color: 'white',
                    outline: 'none',
                    width: '120px',
                    fontSize: '0.9rem'
                  }}
                />
                <button 
                  type="submit" 
                  style={{ 
                    background: 'transparent',
                    border: 'none',
                    color: 'white',
                    cursor: 'pointer',
                    padding: '5px'
                  }}
                >
                  🔍
                </button>
              </div>
              <div 
                className="cta-button" 
                style={{ marginLeft: '20px' }}
              >
                <a 
                  href="#signup" 
                  style={{ 
                    color: colors.primary, 
                    backgroundColor: 'white', 
                    padding: '10px 20px', 
                    textDecoration: 'none', 
                    borderRadius: '30px', 
                    fontWeight: '600',
                    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
                    transition: 'all 0.3s ease'
                  }}
                  onMouseOver={(e) => {
                    e.target.style.boxShadow = '0 5px 15px rgba(0,0,0,0.2)';
                    e.target.style.transform = 'translateY(-2px)';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.boxShadow = '0 2px 10px rgba(0,0,0,0.1)';
                    e.target.style.transform = 'translateY(0)';
                  }}
                >
                  Sign Up
                </a>
              </div>
            </div>
          </div>
        </header>

        {/* Main Content with padding */}
        <div id='main' style={{ minHeight: 'calc(100vh - 250px)' }}>
            <Outlet/>
        </div>

        {/* Modern Footer */}
        <footer 
          className="site-footer" 
          style={{ 
            backgroundColor: colors.dark, 
            color: colors.light, 
            padding: '50px 0 20px',
            borderTop: '1px solid rgba(255,255,255,0.1)'
          }}
        >
          <div 
            className="container" 
            style={{ 
              width: '90%', 
              maxWidth: '1200px', 
              margin: '0 auto', 
              display: 'flex', 
              justifyContent: 'space-between', 
              flexWrap: 'wrap'
            }}
          >
            {/* Company Info Section */}
            <div 
              className="footer-section" 
              style={{ flex: '1.5', margin: '10px', minWidth: '250px' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
                <img 
                  src={logo} 
                  alt="Company Logo" 
                  style={{ width: '30px', height: '30px', filter: 'brightness(0) invert(1)' }}
                />
                <span style={{ 
                  marginLeft: '10px', 
                  fontSize: '1.2rem', 
                  fontWeight: '700',
                  color: 'white'
                }}>
                  CloudPipeline
                </span>
              </div>
              <p style={{ color: 'rgba(255,255,255,0.7)', lineHeight: '1.6', marginBottom: '20px' }}>
                Empowering businesses with modern CI/CD solutions and Terraform infrastructure management.
              </p>
              <div style={{ display: 'flex', gap: '15px' }}>
                {['📱', '📘', '🐦', '📸'].map((icon, index) => (
                  <a 
                    key={index}
                    href="#" 
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      background: 'rgba(255,255,255,0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      transition: 'all 0.3s ease'
                    }}
                    onMouseOver={(e) => {
                      e.target.style.background = colors.primary;
                      e.target.style.transform = 'translateY(-3px)';
                    }}
                    onMouseOut={(e) => {
                      e.target.style.background = 'rgba(255,255,255,0.1)';
                      e.target.style.transform = 'translateY(0)';
                    }}
                  >
                    {icon}
                  </a>
                ))}
              </div>
            </div>
            
            {/* Quick Links Sections */}
            {[
              {
                title: 'Company',
                links: ['About Us', 'Our Team', 'Careers', 'Contact Us']
              },
              {
                title: 'Resources',
                links: ['Documentation', 'Blog', 'Tutorials', 'Support']
              },
              {
                title: 'Legal',
                links: ['Privacy Policy', 'Terms of Service', 'Cookies', 'FAQs']
              }
            ].map((section, index) => (
              <div 
                key={index}
                className="footer-section" 
                style={{ flex: '1', margin: '10px', minWidth: '160px' }}
              >
                <h4 style={{ 
                  marginBottom: '20px',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  color: 'white'
                }}>
                  {section.title}
                </h4>
                <ul style={{ 
                  listStyle: 'none',
                  padding: 0,
                  margin: 0
                }}>
                  {section.links.map((link, i) => (
                    <li key={i} style={{ marginBottom: '10px' }}>
                      <a 
                        href="#" 
                        style={{ 
                          color: 'rgba(255,255,255,0.7)', 
                          textDecoration: 'none',
                          transition: 'all 0.2s ease',
                          fontSize: '0.95rem'
                        }}
                        onMouseOver={(e) => {
                          e.target.style.color = colors.primary;
                          e.target.style.paddingLeft = '5px';
                        }}
                        onMouseOut={(e) => {
                          e.target.style.color = 'rgba(255,255,255,0.7)';
                          e.target.style.paddingLeft = '0';
                        }}
                      >
                        {link}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
            
            {/* Newsletter Section */}
            <div 
              className="footer-section" 
              style={{ flex: '1.5', margin: '10px', minWidth: '250px' }}
            >
              <h4 style={{ 
                marginBottom: '20px',
                fontSize: '1.1rem',
                fontWeight: '600',
                color: 'white'
              }}>
                Subscribe to our Newsletter
              </h4>
              <p style={{ color: 'rgba(255,255,255,0.7)', marginBottom: '15px' }}>
                Get the latest updates on cloud infrastructure and CI/CD innovations.
              </p>
              <div style={{ display: 'flex' }}>
                <input 
                  type="email" 
                  placeholder="Your email address" 
                  style={{ 
                    padding: '12px 15px',
                    flex: '1',
                    border: 'none',
                    borderRadius: '4px 0 0 4px',
                    fontSize: '0.9rem'
                  }}
                />
                <button 
                  type="submit" 
                  style={{ 
                    padding: '12px 20px',
                    background: `linear-gradient(to right, ${colors.primary}, ${colors.secondary})`,
                    color: 'white',
                    border: 'none',
                    borderRadius: '0 4px 4px 0',
                    cursor: 'pointer',
                    fontWeight: '600'
                  }}
                >
                  Subscribe
                </button>
              </div>
            </div>
          </div>
          
          {/* Copyright Section */}
          <div style={{ 
            textAlign: 'center',
            marginTop: '40px',
            paddingTop: '20px',
            borderTop: '1px solid rgba(255,255,255,0.1)',
            color: 'rgba(255,255,255,0.5)',
            fontSize: '0.9rem'
          }}>
            <p>© {new Date().getFullYear()} CloudPipeline. All rights reserved.</p>
          </div>
        </footer>
        </>
    )
};

export default Layout;