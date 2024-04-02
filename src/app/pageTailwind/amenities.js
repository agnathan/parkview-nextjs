import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  LockClosedIcon
} from '@heroicons/react/20/solid'

const amenities1 = [
  { id: 1, text: 'Large Living Spaces' },
  { id: 2, text: 'Dishwasher' },
  { id: 3, text: 'Breakfast Bar' },
  { id: 4, text: 'Ceiling Fans' },
  { id: 5, text: 'Oversized Closets' },
  { id: 6, text: 'High-Speed Internet Access' },
  { id: 7, text: 'Open Concept' }
]

const amenities2 = [
  { id: 1, text: 'On-Site Laundry on Every Floor' },
  { id: 2, text: 'Garages Available' },
  { id: 3, text: 'Controlled Access' },
  { id: 4, text: 'Package Service' },
  { id: 5, text: 'Manager On-Site' },
  { id: 6, text: '24-Hour Emergency Maintenance' },
  { id: 7, text: 'Close to Parks' }
]

const amenities3 = [
  { id: 1, text: 'Dogs & Cats Allowed' },
  { id: 2, text: '$500 Pet Fee' },
  { id: 3, text: '$25 Monthly Pet Rent' },
  { id: 4, text: '2 Pet Limit' },
  { id: 5, text: '25 lb Weight Limit' }
]

const Amenities = () => {
  return (
    <div id='amenities' className='bg-gray-800 text-white py-24 sm:py-32'>
      <div className='mx-auto max-w-7xl px-6 lg:px-8'>
        <div className='mx-auto max-w-2xl text-center'>
          <p className='mt-2 text-3xl font-bold tracking-tight text-white sm:text-4xl'>
            Amenities
          </p>
          <p className='mt-6 text-lg leading-8 text-gray-300'>
            Discover the comfort of living with our apartments featuring modern
            amenities like dishwashers, ceiling fans, and high-speed internet
            access. Enjoy the convenience of on-site laundry, pet-friendly
            policies, and 24-hour maintenance, all within a stone's throw of
            serene parks and vibrant community life.
          </p>
        </div>
        <div className='mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none'>
          <div className='grid grid-cols-1 gap-3 md:grid-cols-3 md:gap-4'>
            <div className=''>
              <h3 className='text-2xl font-bold mb-4'>Everything You Need</h3>
              <ul>
                {amenities1.map(amenity => (
                  <li key={amenity.id} className='flex py-2'>
                    <CheckIcon
                      className='h-5 w-5 text-indigo-400 mr-2'
                      aria-hidden='true'
                    />
                    <span>{amenity.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col one-third'>
              <h3 className='text-2xl font-bold mb-4'>
                You’ll Love Living Here!
              </h3>
              <ul>
                {amenities2.map(amenity => (
                  <li key={amenity.id} className='flex py-2'>
                    <CheckIcon
                      className='h-5 w-5 text-indigo-400 mr-2'
                      aria-hidden='true'
                    />
                    <span>{amenity.text}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className='col one-third'>
              <h3 className='text-2xl font-bold mb-4'>We Are Pet-Friendly</h3>
              <ul>
                {amenities3.map(amenity => (
                  <li key={amenity.id} className='flex py-2'>
                    <CheckIcon
                      className='h-5 w-5 text-indigo-400 mr-2'
                      aria-hidden='true'
                    />
                    <span>{amenity.text}</span>
                  </li>
                ))}
              </ul>
              <p>
                <em>* Please call for more information.</em>
              </p>
            </div>{' '}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Amenities
