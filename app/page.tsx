import { Image } from "@nextui-org/react";
import { ProfessionalFormation, HobbiesArea, Skills, ContactArea, TimelineComponent } from '@/app/card/'

export default function Home() {
  return (<>
    <section className='text-gray-600 body-font'>
      <div className='container flex flex-col px-5 py-0 mx-auto'>
        <div className='mx-auto lg:w-4/6'>
          <div className='hidden overflow-hidden rounded-lg md:block'>
            <Image
              alt='Mar'
              className='object-cover object-center w-full h-full z-1'
              src='/imgTest/card/mar.jpeg'
            />
          </div>
          {/*Version Escritorio*/}
          <div className='hidden pb-5 md:block'>
            <div className='flex flex-col pl-4 mt-10 sm:flex-row md:p-0'>
              <div className='pb-3 text-center bg-gray-900 sm:w-1/3 md:pt-1 sm:pr-0 sm:py-8 rounded-l-3xl'>
                <div className='inline-flex items-center justify-center rounded-full w-28 h-28'>
                  <Image
                    alt='Joao Barres'
                    className='object-cover object-center w-full h-full border-white border-3'
                    src='/imgTest/card/joaoBarres.jpeg'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='mt-4 text-lg font-medium text-white title-font'>Joao Barres Diaz</h2>
                  <div className='w-12 h-1 mt-2 mb-4 bg-indigo-500 rounded' />
                  <ProfessionalFormation />
                  <div className='h-1 mt-2 mb-4 bg-indigo-500 rounded w-28' />
                  <HobbiesArea />
                  <div className='h-1 mt-2 mb-4 bg-indigo-500 rounded w-28' />
                  <Skills />
                  <div className='h-1 mt-2 mb-4 bg-indigo-500 rounded w-28' />
                  <ContactArea />
                </div>
              </div>
                <div className='pt-4 mt-4 bg-gray-900 sm:w-2/3 sm:pl-4 sm:py-8 sm:mt-0 sm:text-left rounded-r-3xl'>
                  <div className='pr-10 text-justify'>
                    <p className='mb-4 leading-relaxed text-white text-medium'>Soy un chico <strong>Esmeraldeño</strong>, que le gusta aprender cosas nuevas sobre el mundo de la Programación.</p>
                    <p className='mb-4 leading-relaxed text-white text-medium'>He trabajado en varios campos tantos técnicos, como operar practicas de descargar de vehiculos, asistente legal, archivador, etc</p>
                  </div>
                  <h2 className='mb-4 text-2xl leading-relaxed text-center text-white'>Mi Experencia Laboral</h2>
                    <div>
                      <TimelineComponent/>
                    </div>
                  </div>
              </div>
            </div>
          {/*Version Movil*/}
          <div className='block md:hidden'>
            <div className='flex flex-col pb-5 mt-10 sm:flex-row md:p-0'>
              <div className='sm:w-1/3 text-center md:pb-2 pb-2.5 md:pt-1 sm:pr-0 sm:py-8 rounded-3xl md:rounded-l-3xl bg-gray-900'>
                <div className='inline-flex items-center justify-center rounded-full w-28 h-28'>
                  <Image
                    alt='content'
                    className='object-cover object-center w-full h-full border-white border-3'
                    src='/imgTest/card/joaoBarres.jpeg'
                  />
                </div>
                <div className='flex flex-col items-center justify-center'>
                  <h2 className='mt-4 text-lg font-medium text-white title-font'>Joao Barres Diaz</h2>
                  <div className='w-12 h-1 mt-2 mb-4 bg-indigo-500 rounded' />
                  <ProfessionalFormation />
                  <div className='h-1 mt-2 mb-4 bg-indigo-500 rounded w-28' />
                  <HobbiesArea />
                  <div className='h-1 mt-2 mb-4 bg-indigo-500 rounded w-28' />
                  <Skills />
                  <div className='h-1 mt-2 mb-4 bg-indigo-500 rounded w-28' />
                  <ContactArea />
                </div>
              </div>
              <div className='mt-4 text-center bg-gray-900 sm:w-2/3 sm:pl-4 sm:py-8 sm:mt-0 sm:text-left rounded-3xl md:rounded-r-3xl'>
                <div className='px-5 pt-6 text-justify'>
                  <p className='mb-4 leading-relaxed text-white text-medium'>Soy un chico <strong>Esmeraldeño</strong>, que le gusta aprender cosas nuevas sobre el mundo de la Programación.</p>
                  <p className='mb-4 leading-relaxed text-white text-medium'>He trabajado en varios campos tantos técnicos, como operar practicas de descargar de vehiculos, asistente legal, archivador, etc</p>
                </div>
                <h2 className='mb-4 text-xl leading-relaxed text-center text-white'>Mi Experencia Laboral</h2>
                <div className='px-10'>
                  <TimelineComponent/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section> 
  </>)
}
