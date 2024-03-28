import Link from 'next/link'

const Cta = () => {
  return (
    <div
      className='relative bg-fixed bg-cover bg-no-repeat bg-center h-screen'
      style={{ backgroundImage: "url('/images/photos/slide.jpg')" }}
    >
      <div className='absolute inset-0 bg-black opacity-30'></div>

      <div className='absolute inset-0 flex items-center justify-start'>
        <div className='ml-6 lg:ml-12 text-white'>
          <h1 className='text-6xl font-bold mb-4'>Parkview Apartments</h1>
          <p className='text-lg mb-8'>
            A Community near Convenient Locations and Wide Open Spaces
          </p>
          <Link
            href='/listings'
            className='inline-block bg-blue-500 py-3 px-6 rounded-md text-lg font-medium hover:bg-blue-700 transition duration-300'
          >
            See Available Units
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Cta
