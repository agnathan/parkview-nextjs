import {
  ArrowPathIcon,
  CheckIcon,
  CloudArrowUpIcon,
  LockClosedIcon
} from '@heroicons/react/20/solid'

const amenities1 = [
  {
    text: 'Large Living Spaces'
  },
  {
    text: 'Dishwasher'
  },
  {
    text: 'Breakfast Bar'
  },
  {
    text: 'Ceiling Fans'
  },
  {
    text: 'Oversized Closets'
  },
  {
    text: 'High-Speed Internet Access'
  },
  {
    text: 'Open Concept'
  }
]

const amenities2 = [
  {
    text: 'On-Site Laundry on Every Floor'
  },
  {
    text: 'Garages Available'
  },
  {
    text: 'Controlled Access'
  },
  {
    text: 'Package Service'
  },
  {
    text: 'Manager On-Site'
  },
  {
    text: '24-Hour Emergency Maintenance'
  },
  {
    text: 'Close to Parks'
  }
]

const amenities3 = [
  {
    text: 'Dogs & Cats Allowed'
  },
  {
    text: '$500 Pet Fee'
  },
  {
    text: '$25 Monthly Pet Rent'
  },
  {
    text: '2 Pet Limit'
  },
  {
    text: '25 lb Weight Limit'
  }
]

const Amenities = () => {
  return (
    <div className='bg-gray-800 py-24 sm:py-32'>
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
                  <li className='flex'>
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
                  <li className='flex'>
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
                  <li className='flex'>
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

{
  /* <div className='grid grid-cols-3 gap-4 amenities'>
        <div className='col one-third'>
          <h3>Everything You Need</h3>
          <ul style={{ 'list-style-type': 'check' }}>
            <li>Large Living Spaces</li>
            <li>Dishwasher</li>
            <li>Breakfast Bar</li>
            <li>Ceiling Fans</li>
            <li>Oversized Closets</li>
            <li>High-Speed Internet Access</li>
            <li>Open Concept</li>
          </ul>
        </div>
        <div className='col one-third'>
          <h3>You’ll Love Living Here!</h3>
          <ul style={{ 'list-style-type': 'heart' }}>
            <li>On-Site Laundry on Every Floor</li>
            <li>Garages Available</li>
            <li>Controlled Access</li>
            <li>Package Service</li>
            <li>Manager On-Site</li>
            <li>24-Hour Emergency Maintenance</li>
            <li>Close to Parks</li>
          </ul>
        </div>
        <div className='col one-third'>
          <h3>We Are Pet-Friendly</h3>
          <ul style={{ 'list-style-type': 'thumbs-up' }}>
            <li>Dogs &amp; Cats Allowed</li>
            <li>$500 Pet Fee</li>
            <li>$25 Monthly Pet Rent</li>
            <li>2 Pet Limit</li>
            <li>25 lb Weight Limit</li>
          </ul>
          <p>
            <em>* Please call for more information.</em>
          </p>
        </div>{' '}
      </div> */
}
