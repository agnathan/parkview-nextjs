import React from 'react'

const photos = [
  // Add your photo URLs here
  {
    id: 1,
    name: 'Exterior',
    url: '/images/photos/exterior2-1024x683.jpg'
  },

  { id: 2, name: 'Bathroom', url: '/images/photos/bathroom-1024x683.jpg' },
  { id: 3, name: 'Bedroom', url: '/images/photos/bedroom2-1024x683.jpg' },
  { id: 4, name: 'Dinning Room', url: '/images/photos/dining-1024x683.jpg' },

  { id: 5, name: 'Kitchen', url: '/images/photos/kitchen-1024x683.jpg' },
  { id: 6, name: 'Kitchen', url: '/images/photos/kitchen2-1024x683.jpg' },
  {
    id: 7,
    name: 'Living Room',
    url: '/images/photos/living-room-1024x683.jpg'
  },
  {
    id: 8,
    name: 'Living Room',
    url: '/images/photos/living-room2-1024x683.jpg'
  }

  // ... more photos
]

const PhotoGrid = () => {
  return (
    <div id='photos' className='container mx-auto flex max-w-7xl bg-white p-4'>
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
