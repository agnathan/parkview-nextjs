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

import { CheckCircleIcon } from '@heroicons/react/20/solid'

const features = [
  {
    name: '1 Bed',
    icon: CheckCircleIcon
  },
  {
    name: '1 Bath',
    icon: CheckCircleIcon
  },
  {
    name: '650 sf',
    icon: CheckCircleIcon
  },
  {
    name: 'Market Rent: $900',
    icon: CheckCircleIcon
  },
  {
    name: 'Rent: $820',
    icon: CheckCircleIcon
  },
  {
    name: 'Deposit: $300',
    icon: CheckCircleIcon
  }
]

const features2 = [
  {
    name: '2 Bed',
    icon: CheckCircleIcon
  },
  {
    name: '2 Bath',
    icon: CheckCircleIcon
  },
  {
    name: '750 sf',
    icon: CheckCircleIcon
  },
  {
    name: 'Market Rent: $980',
    icon: CheckCircleIcon
  },
  {
    name: 'Rent: $895',
    icon: CheckCircleIcon
  },
  {
    name: 'Deposit: $300',
    icon: CheckCircleIcon
  }
]
export default function Units () {
  return (
    <div id='floorplans' className='bg-gray-50'>
      <div className='mx-auto max-w-2xl px-4 py-24 sm:px-6 sm:py-32 lg:max-w-7xl lg:px-8'>
        {/* Details section */}
        <section aria-labelledby='details-heading'>
          <div className='flex flex-col items-center text-center'>
            <h2
              id='details-heading'
              className='text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'
            >
              VIEW OUR FLOOR PLANS
            </h2>
            <p className='mt-3 max-w-3xl text-lg text-gray-600'>
              Our apartment complex enhances your living experience with
              convenient on-floor laundry facilities, open-space unit layout are
              designed to help you relax and entertain with ease.
            </p>
          </div>

          <div className='mt-0 grid grid-cols-1 gap-y-16 lg:grid-cols-2 lg:gap-x-8'>
            <div>
              <dt>
                <dl className='mt-10 max-w-xl space-y-4 text-base leading-7 text-gray-600 lg:max-w-none'>
                  <div className='container mx-auto p-4 px-20'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      {features.map((feature, index) => (
                        <li
                          key={feature.name}
                          className='flex items-center space-x-2'
                        >
                          <feature.icon className='h-5 w-5 text-gray-800' />{' '}
                          {/* Replace 'text-lg' with your desired icon size */}
                          <span>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </dl>
              </dt>
              <div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
                <img
                  src='/images/floorplans/Parkview_1x1-1024x768.jpg'
                  alt='Drawstring top with elastic loop closure and textured interior padding.'
                  className='h-full w-full object-cover object-center'
                />
              </div>
              {/* <p className='mt-8 text-base text-gray-500'>
                The 20L model has enough space for 370 candy bars, 6 cylinders
                of chips, 1220 standard gumballs, or any combination of
                on-the-go treats that your heart desires. Yes, we did the math.
              </p> */}
            </div>
            <div>
              <dt>
                <dl className='mt-10 max-w-xl space-y-8 text-base leading-7 text-gray-600 lg:max-w-none'>
                  <div className='container mx-auto p-4 px-20'>
                    <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                      {features2.map((feature, index) => (
                        <li
                          key={feature.name}
                          className='flex items-center space-x-2'
                        >
                          <feature.icon className='h-5 w-5 text-gray-800' />{' '}
                          {/* Replace 'text-lg' with your desired icon size */}
                          <span>{feature.name}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </dl>
              </dt>
              <div className='aspect-h-2 aspect-w-3 w-full overflow-hidden rounded-lg'>
                <img
                  src='/images/floorplans/Parkview_2x2-1024x768.jpg'
                  alt='Front zipper pouch with included key ring.'
                  className='h-full w-full object-cover object-center'
                />
              </div>
              {/* <p className='mt-8 text-base text-gray-500'>
                Up your snack organization game with multiple compartment
                options. The quick-access stash pouch is ready for even the most
                unexpected snack attacks and sharing needs.
              </p> */}
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}
