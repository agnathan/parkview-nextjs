import React from 'react'

const photos = [
  // Add your photo URLs here
  {
    id: 1,
    name: 'Exterior',
    url: '/images/photos/exterior.webp'
  },

  { id: 2, name: 'Bathroom', url: '/images/photos/bathroom.webp' },
  { id: 3, name: 'Bedroom', url: '/images/photos/bedroom2.webp' },
  { id: 4, name: 'Dinning Room', url: '/images/photos/dining.webp' },

  { id: 5, name: 'Kitchen', url: '/images/photos/kitchen.webp' },
  { id: 6, name: 'Kitchen', url: '/images/photos/kitchen2.webp' },
  {
    id: 7,
    name: 'Living Room',
    url: '/images/photos/living-room.webp'
  },
  {
    id: 8,
    name: 'Living Room',
    url: '/images/photos/living-room2.webp'
  }

  // ... more photos
]

const PhotoGrid = () => {
  return (
    <div
      id='photos'
      className='container mx-auto flex max-w-7xl bg-white p-4 my-16'
    >
      <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4'>
        {photos.map(photo => (
          <div key={photo.id} className='overflow-hidden rounded-lg shadow-lg'>
            <img
              src={photo.url}
              alt={`Photo ${photo.id}`}
              className='w-full h-auto transform hover:scale-105 transition duration-300 ease-in-out'
            />
            <div className='my-3 ml-1'>
              <h3 className='mt-1 font-semibold text-gray-900'>{photo.name}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PhotoGrid
