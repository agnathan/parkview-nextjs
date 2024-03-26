const stats = [
  { id: 1, name: 'Walk Score', value: '55' },
  { id: 2, name: 'Transit Score', value: '24' },
  { id: 3, name: 'Bike Score', value: '70' },
  { id: 4, name: 'Minutes to Drive Downtown', value: '5' },
  { id: 5, name: 'Minutes to Drive to Memorial Stadium', value: '5' },
  { id: 6, name: 'Minutes to Drive to Pawnee Lake', value: '20' }
]

export default function ImageWithStats () {
  return (
    <div id='neighborhood' className='relative bg-white'>
      <img
        className='h-56 w-full bg-gray-50 object-cover lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-1/2'
        src='/images/neighborhood/UNL-Memorial-Stadium-East-Expansion-1-scaled-2566330847.jpg'
        alt=''
      />
      <div className='mx-auto grid max-w-7xl lg:grid-cols-2'>
        <div className='px-6 pb-24 pt-16 sm:pb-32 sm:pt-20 lg:col-start-2 lg:px-8 lg:pt-32'>
          <div className='mx-auto max-w-2xl lg:mr-0 lg:max-w-lg'>
            <h2 className='text-base font-semibold leading-8 text-indigo-600'>
              Parkview Apartments
            </h2>
            <p className='mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl'>
              In the Heart of Lincoln, NE
            </p>
            <p className='mt-6 text-lg leading-8 text-gray-600'>
              Parkview Apartments is just a 5-minute drive from Downtown Lincoln
              and University of Nebraska—Lincoln. Living at Parkview gets you
              walking distance from a variety of restaurants, gas stations, and
              grocery stores.
            </p>
            <img
              className=''
              src='/images/neighborhood/Parkview-Apartments-site-map2-414x320.jpg'
              alt=''
            />
            <dl className='mt-16 grid max-w-xl grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 xl:mt-16'>
              {stats.map(stat => (
                <div
                  key={stat.id}
                  className='flex flex-col gap-y-3 border-l border-gray-900/10 pl-6'
                >
                  <dt className='text-sm leading-6 text-gray-600'>
                    {stat.name}
                  </dt>
                  <dd className='order-first text-3xl font-semibold tracking-tight text-gray-900'>
                    {stat.value}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </div>
  )
}
