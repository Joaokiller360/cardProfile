import Link from 'next/link';
import { socialMedia } from '@/data';

export const ContactArea = () => {
  return (<div className='pb-3'>
    <p className='text-base text-white text-center pb-2'>Area de Contacto</p>
    <ul className='text-base text-white items-start justify-start pb-1'>
      <li className='py-2'>Correo:</li>
      <a className='hover:underline hover:bg-gray-700 px-5 py-1 rounded-xl' href='mailto:joaobarres73@gmail.com'>joaobarres73@gmail.com</a>
    </ul>
    <ul className='text-base text-white items-start justify-start pb-2'>
      <li className='py-2'>Teléfonos:</li>
      <a className='hover:underline hover:bg-gray-700 px-5 py-1 rounded-xl cursor-default'>098-666-0737</a>
    </ul>
    <div className='pb-2'>
      <a className='text-white'>Redes:</a>
      <div className='flex justify-center md:justify-center space-x-5 pt-0 md:pt-5 m-2'>
        {socialMedia.map((item) => (
          <Link
            href={item.link}
            key={item.id}
            target="_blank"
            rel="noopener noreferrer"
            className="text-white justify-center flex w-10 scale-150 h-10 items-center"
          >
            <span className='flex justify-center'>{item.icon}</span>
          </Link>
        ))}
      </div>
    </div>
  </div>);
}