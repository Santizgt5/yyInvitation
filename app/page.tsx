'use client'

import './globals.css'
import { Carrousel } from './components';
import { Image } from './components/interface';

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

// export const metadata = {
//   title: 'Boda de Yair y Yessenia',
//   description: 'Invitación a la boda'
// }

export default function Home() {

 return (
    <>
      <main className="flex flex-col justify-between items-center">
        <section>
          <img className='iniciales-class' src="/assets/principal.jpg" alt="head-photo" />
        </section>
        <section>
          <img src="/assets/parte2.png" alt="hour" />
        </section>
        <section className='mt-2'>
          <img src="/assets/parte3.png" alt="dress-code"/>
        </section>
      </main>
       <section className='image-container'>
          <img src="/assets/parte4.png" alt="couple-photo"/>
          <div className='map-container'>
              <Map />
          </div>
        </section>
      <section className='flex flex-col justify-between items-center'>
        <img src="/assets/parte5-1.png" alt="" />
      </section>
      <section className='carrousel-main flex-col items-center'>
            <Carrousel images={carrousel_images}></Carrousel>
      </section>
    </>
  );
}
