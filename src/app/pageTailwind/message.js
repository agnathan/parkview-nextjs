export default function Message ({ message }) {
  return (
    <div className='bg-gray-800 px-3 py-2 sm:py-4 lg:px-2 '>
      <h2 className='text-center text-2xl font-bold mb-4'>{message}</h2>
    </div>
  )
}
