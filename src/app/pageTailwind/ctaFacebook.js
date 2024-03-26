export default function CtaFacebook () {
  return (
    <div className='bg-gray-800 px-3 py-2 sm:py-4 lg:px-2 '>
      <a
        href='https://www.facebook.com/profile.php?id=61557014466724'
        className='flex flex-col items-center'
      >
        <h2 className='text-center text-2xl font-bold mb-4'>
          Visit Us on Facebook
        </h2>
        <img
          src='/images/icons/facebook.png'
          alt='facebook button'
          className='h-16 object-cover'
        />
      </a>
    </div>
  )
}
