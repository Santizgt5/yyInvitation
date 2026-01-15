'use client'

import './globals.css'
import Countdown from './components/Coutdown';
import { Carrousel } from './components';
import { Image } from './components/interface';
import { useState } from 'react';


import Map from './components';

const carrousel_images: Image[] = [
  {
    image: '/assets/img/foto1.png'
  },
  {
    image: '/assets/img/foto2.png'
  },
  {
    image: '/assets/img/foto3.png'
  },
  {
    image: '/assets/img/foto4.png'
  },
  {
    image: '/assets/img/foto5.png'
  },
  {
    image: '/assets/img/foto6.png'
  }
]

export default function Home() {

  const [title, setTitle] = useState('Boda de Yair y Yessenia');
  const [description, setDescription] = useState('Invitación a la boda');

  return (
    <>
      <title>{title}</title>
      <meta name="description" content={description} />
      <main className="flex flex-col justify-between items-center">
        <section>
          <img className='iniciales-class' src="/assets/principal.jpg" alt="head-photo" />
        </section>
        <section>
          <img src="/assets/parte2.png" alt="hour" />
        </section>
        <section className='mt-2'>
          <img src="/assets/parte3.png" alt="dress-code" />
        </section>
      </main>
      <section className='image-container'>
        <div className='dv-container'>
          <Countdown targetDate="2026-02-22T15:00:00" ></Countdown>
        </div>
        <img src="/assets/parte4.png" alt="couple-photo" />
        <div className='map-container'>
          <Map />
        </div>
      </section>
      <section className='flex flex-col justify-between items-center'>
        <img src="/assets/parte5-1.png" alt="" />
      </section>
      <section className='carrousel-main'>
        <Carrousel images={carrousel_images}></Carrousel>
        <section className='flex flex-col items-center'>
          <button type='button' className='color-button text-white font-bold py-3 px-5 rounded-full mb-10'><a href="https://forms.gle/iNAEfeGjdrjyGRnv7" target='_blank'>Confirma aqui</a></button>
        </section>
      </section>
    </>
  );
}
