/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const features = [
  {
    name: 'Nature',
    description:
      'Our apartment community is situated between mature trees, and directly next to a pet-friendly, open air park'
  },
  {
    name: 'Transportation',
    description:
      'Parkview is directly across from a bus and provides easy access to public transportation'
  },
  {
    name: 'Pet Friendly',
    description:
      'Our apartment complex warmly embraces pet owners so your furry friends feel as much at home as you do '
  },
  {
    name: 'Minutes from Campus and Shopping',
    description:
      'We also have a great location minutes from campus and surrounded by shopping. Stop by or call us today to see why you’ll love Parkview Apartments!'
  }
]

export default function ImageDetails () {
  return (
    <div className='bg-white'>
      <section aria-labelledby='features-heading' className='relative'>
        <div className='aspect-h-2 aspect-w-3 overflow-hidden sm:aspect-w-5 lg:aspect-none lg:absolute lg:h-full lg:w-1/2 lg:pr-4 xl:pr-16'>
          <img
            src='/images/photos/slide.webp'
            alt='Black leather journal with silver steel disc binding resting on wooden shelf with machined steel pen.'
            className='h-full w-full object-cover object-center lg:h-full lg:w-full'
          />
        </div>

        <div className='mx-auto max-w-2xl px-4 pb-24 pt-16 sm:px-6 sm:pb-32 lg:grid lg:max-w-7xl lg:grid-cols-2 lg:gap-x-8 lg:px-8 lg:pt-32'>
          <div className='lg:col-start-2'>
            <h2 id='features-heading' className='font-medium text-gray-500'>
              Parkview Apartments
            </h2>
            <p className='mt-4 text-4xl font-bold tracking-tight text-gray-900'>
              WELCOME HOME
            </p>
            <p className='mt-4 text-gray-500'>
              At Parkview Apartments offers a mixture of comfort and
              convenience. Our 1 and 2 bedroom homes provide all the amenities
              you could want. From the fully-equipped kitchen with a dishwasher
              to the pre-wired DirectTV, we offer everything needed to make your
              life easier.
            </p>

            <dl className='mt-10 grid grid-cols-1 gap-x-8 gap-y-10 text-sm sm:grid-cols-2'>
              {features.map(feature => (
                <div key={feature.name}>
                  <dt className='font-medium text-gray-900'>{feature.name}</dt>
                  <dd className='mt-2 text-gray-500'>{feature.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>
    </div>
  )
}
