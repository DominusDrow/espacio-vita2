"use client";
import { Drawer, Box } from '@mui/material';
import useDrawerStore from '../store/contactStore';
import { Mail, Facebook, Instagram, Phone } from 'lucide-react';
import { useState } from 'react';

const DrawerContainer = () => {
  const { isOpen, setIsOpen } = useDrawerStore();

  const [form, setForm] = useState({
    nombre: '',
    correo: '',
    pais: 'México',
    telefono: '+52',
    mensaje: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Formulario enviado:', form);
    // Aquí podrías hacer una petición POST si lo necesitas
  };

  return (
    <Drawer anchor="right" open={isOpen} onClose={() => setIsOpen(false)}>
      <div className='w-[90vw] lg:w-[70vw]'>

        <div className="relative flex flex-col md:flex-row min-h-screen">
          <div>
            <div className="absolute top-0 left-0 p-4">
              <button onClick={() => setIsOpen(false)} className="text-gray-500 cursor-pointer hover:text-gray-700">
                <svg xmlns="XXXXXXXXXXXXXXXXXXXXXXXXXX" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
          </div>
          {/* Izquierda: LET'S TALK */}
          <div className="md:w-1/2 w-full flex justify-center items-center bg-white">
            <LetsTalkSection />
          </div>

          {/* Derecha: Formulario */}
          <div className="md:w-1/2 w-full flex justify-center items-center bg-gray-50">
            <form onSubmit={handleSubmit} className="max-w-md mx-auto p-4">
              <h2 className="text-xl font-light mb-6">Información de contacto</h2>

              <label className="block text-sm font-semibold mb-1">NOMBRE</label>
              <input
                type="text"
                name="nombre"
                placeholder="TU NOMBRE"
                value={form.nombre}
                onChange={handleChange}
                className="w-full bg-gray-200 p-3 mb-4 placeholder-gray-500"
              />

              <label className="block text-sm font-semibold mb-1">
                CORREO<span className="text-red-500">*</span>
              </label>
              <input
                type="email"
                name="correo"
                placeholder="TU CORREO"
                value={form.correo}
                onChange={handleChange}
                required
                className="w-full bg-gray-200 p-3 mb-4 placeholder-gray-500"
              />

              <label className="block text-sm font-semibold mb-1">PAÍS</label>
              <input
                type="text"
                name="pais"
                value={form.pais}
                readOnly
                className="w-full bg-gray-200 p-3 mb-4 text-gray-500"
              />

              <label className="block text-sm font-semibold mb-1">NÚMERO DE TELÉFONO</label>
              <input
                type="tel"
                name="telefono"
                placeholder="+52"
                value={form.telefono}
                onChange={handleChange}
                className="w-full bg-gray-200 p-3 mb-4 placeholder-gray-500"
              />

              <label className="block text-sm font-semibold mb-1">
                MENSAJE<span className="text-red-500">*</span>
              </label>
              <textarea
                name="mensaje"
                placeholder="DESCRIPCIÓN"
                value={form.mensaje}
                onChange={handleChange}
                required
                rows={4}
                className="w-full bg-gray-200 p-3 mb-4 placeholder-gray-500"
              ></textarea>

              <button
                type="submit"
                className="relative w-full text-black font-medium px-4 py-2 border border-transparent hover:border-black transition-all duration-300"
              >
                Enviar
              </button>
            </form>
          </div>

          <div className="hidden lg:block absolute -left-5 top-1/2 -rotate-90 text-xs tracking-widest font-light  ">
            GRUPO ESPACIO VITA
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default DrawerContainer;

const LetsTalkSection = () => {
  return(
    <section className="text-center py-12 px-4 ">
      <p className="uppercase text-sm tracking-widest font-light">
        [ AN INTERIOR IS THE NATURAL <br /> PROJECTION OF THE SOUL ]
      </p>

      <h1 className="text-5xl font-bold mt-6 mb-12">LET'S TALK</h1>

      <p className="text-lg mb-6">Conectemos en.</p>

      <div className="flex justify-center gap-4">
        {[
          { icon: <Mail className="w-5 h-5" />, link: 'mailto:correo@ejemplo.com' },
          { icon: <Phone className="w-5 h-5" />, link: 'https://wa.me/521234567890' },
          { icon: <Instagram className="w-5 h-5" />, link: 'https://instagram.com' },
          { icon: <Facebook className="w-5 h-5" />, link: 'https://facebook.com' },
        ].map(({ icon, link }, i) => (
          <a
            key={i}
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 flex items-center justify-center border border-black rounded-full hover:bg-gray-100 transition"
          >
            {icon}
          </a>
        ))}
      </div>
    </section>
  )
}