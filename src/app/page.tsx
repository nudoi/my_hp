"use client";

import LetterGlitch from '../components/LetterGlitch';
import Image from 'next/image';
import { siteConfig } from '../config/site';

export default function Home() {
  console.log('Page rendering with settings:', {
    centerVignette: false,
    outerVignette: true,
    glitchSpeed: 50,
    smooth: true
  });

  return (
    <>
      <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: -1
      }}>
        <LetterGlitch
          key={`glitch-${Date.now()}`}
          glitchColors={['#2b4539', '#61dca3', '#61b3dc']}
          className=""
          glitchSpeed={50}
          centerVignette={false}
          outerVignette={true}
          smooth={true}
        />
      </div>
      
      {/* Centered Image with Hover Effects */}
      <div style={{
        position: 'fixed',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: 10,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px',
        borderRadius: '15px',
        cursor: 'pointer'
      }}>
        <div style={{
          position: 'relative',
          display: 'inline-block'
        }}>
          <a 
            href={siteConfig.link.url}
            target={siteConfig.link.target}
            rel={siteConfig.link.rel}
            style={{
              textDecoration: 'none',
              display: 'block'
            }}
          >
            <Image
              src={siteConfig.image.src}
              alt={siteConfig.image.alt}
              width={siteConfig.image.width}
              height={siteConfig.image.height}
              style={{
                maxWidth: '80vw',
                maxHeight: '80vh',
                objectFit: 'contain',
                transition: 'all 0.3s ease-in-out',
                filter: 'drop-shadow(0 0 5px rgba(97, 220, 163, 0.3))',
                mixBlendMode: 'normal',
                isolation: 'isolate'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.filter = `
                  drop-shadow(0 0 8px rgba(97, 220, 163, 0.6))
                  drop-shadow(0 0 16px rgba(97, 220, 163, 0.4))
                  drop-shadow(0 0 24px rgba(97, 220, 163, 0.2))
                  brightness(1.1)
                  contrast(1.05)
                `;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.filter = 'drop-shadow(0 0 5px rgba(97, 220, 163, 0.3))';
              }}
            />
          </a>
        </div>
      </div>
    </>
  );
}