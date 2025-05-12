'use client';
import React, { useState, useEffect, ReactNode } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Props { children: ReactNode; }

export default function ProjectLayout({ children }: Props) {
  const [showIntro, setShowIntro] = useState(true);
  const [showBar, setShowBar] = useState(true);

  useEffect(() => {
    // Oculta la barra al completar 1.5s
    const barTimeout = setTimeout(() => setShowBar(false), 1500);
    // Oculta el overlay a los 2s
    const introTimeout = setTimeout(() => setShowIntro(false), 2000);
    return () => {
      clearTimeout(barTimeout);
      clearTimeout(introTimeout);
    };
  }, []);

  return (
    <div className="relative">
      <AnimatePresence>
        {showIntro && (
          <motion.div
            key="intro"
            className="fixed inset-0 z-50 flex flex-col justify-between overflow-hidden bg-black"
            initial={{ backgroundColor: 'rgba(0,0,0,1)' }}
            animate={{ backgroundColor: 'rgba(0,0,0,0)' }}
            exit={{ backgroundColor: 'rgba(0,0,0,0)' }}
            transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
          >
            {/* Barra de progreso */}
            {showBar && (
              <motion.div
                className="absolute top-0 left-0 h-1 bg-white"
                initial={{ width: '0%' }}
                animate={{ width: ['0%', '60%', '60%', '100%'] }}
                transition={{
                  duration: 1.5,
                  ease: 'linear',
                  times: [0, 0.6, 0.7, 1],
                }}
              />
            )}

            {/* Intro content */}
            <div className="mt-auto flex items-baseline px-8 pb-12 space-x-4">
              {/* Slot-machine container para EV */}
              <div className="relative overflow-hidden" style={{ height: '10rem' }}>
                <motion.div
                  initial={{ y: 0 }}
                  animate={{ y: '-10rem' }}               // mueve 1 altura de texto (8rem)
                  transition={{ duration: 1, ease: 'easeInOut' }}
                  className="flex flex-col"
                >
                  {/* EV original */}
                  <span
                    className="text-white"
                    style={{ fontSize: '10rem', fontWeight: 1000, lineHeight: 1 }}
                  >
                    EV
                  </span>

                </motion.div>
              </div>

              {/* Leyenda fija a la derecha */}
              <motion.span
                initial={{ opacity: 1 }}
                animate={{ opacity: 0 }}
                transition={{ delay: 0.5, duration: 1.5, ease: 'easeInOut' }}
                className="text-white text-lg font-normal"
              >
                (Arquitectura + interiorismo)
              </motion.span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Contenido real debajo */}
      <div className="relative z-0">
        {children}
      </div>
    </div>
  );
}
