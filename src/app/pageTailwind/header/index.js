'use client'
import Link from 'next/link'
import { useState } from 'react'
import { Dialog } from '@headlessui/react'
import {
  Bars3Icon,
  XMarkIcon,
  PhoneIcon,
  CreditCardIcon
} from '@heroicons/react/24/outline'

const navigation = [
  { name: 'Floor Plans', href: '#floorplans' },
  { name: 'Photos', href: '#photos' },
  { name: 'Amenitites', href: '#amenities' },
  { name: 'Neighborhood', href: '#neighborhood' },
  { name: 'View Listings', href: '/listings' }
]

export default function Example () {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className='bg-white'>
      <nav
        className='mx-auto flex max-w-7xl items-center justify-between p-2'
        aria-label='Global'
      >
        <a href='#' className='-m-1.5 p-1.5'>
          <span className='sr-only'>Parkview Apartments</span>
          <img
            className='h-14 w-auto'
            src='/images/logos/Parkview-Apartments-logo-300x168.png'
            alt=''
          />
        </a>
        <div className='flex lg:hidden'>
          <button
            type='button'
            className='-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700'
            onClick={() => setMobileMenuOpen(true)}
          >
            <span className='sr-only'>Open main menu</span>
            <Bars3Icon className='h-6 w-6' aria-hidden='true' />
          </button>
        </div>
        <div className='hidden items-center lg:flex lg:gap-x-12'>
          {navigation.map(item => (
            <Link
              key={item.name}
              href={item.href}
              className='text-sm align-middle font-semibold leading-6 text-gray-900'
            >
              {item.name}
            </Link>
          ))}
          <a
            href='tel:4026171740'
            className='text-sm inline-flex items-center justify-center font-semibold leading-6 text-gray-900'
          >
            <PhoneIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />{' '}
            402-617-1740
          </a>

          <a
            href='https://npdodge.appfolio.com/connect/users/sign_in?a=cw'
            className='inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
          >
            <CreditCardIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />
            Pay Rent
          </a>
        </div>
      </nav>
      <Dialog
        as='div'
        className='lg:hidden'
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className='fixed inset-0 z-10' />
        <Dialog.Panel className='fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10'>
          <div className='flex items-center justify-between'>
            <a href='#' className='-m-1.5 p-1.5'>
              <span className='sr-only'>Parkview Apartments</span>
              <img
                className='h-8 w-auto'
                src='/images/logos/Parkview-Apartments-logo-300x168.png'
                alt=''
              />
            </a>
            <button
              type='button'
              className='-m-2.5 rounded-md p-2.5 text-gray-700'
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className='sr-only'>Close menu</span>
              <XMarkIcon className='h-6 w-6' aria-hidden='true' />
            </button>
          </div>
          <div className='mt-6 flow-root'>
            <div className='-my-6 divide-y divide-gray-500/10'>
              <div className='space-y-2 py-6'>
                {navigation.map(item => (
                  <a
                    key={item.name}
                    href={item.href}
                    className='-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50'
                  >
                    {item.name}
                  </a>
                ))}
              </div>
              <div className='py-6'>
                <a
                  href='tel:4026171740'
                  className='text-sm inline-flex items-center justify-center font-semibold leading-6 text-gray-900'
                >
                  <PhoneIcon className='-ml-0.5 h-5 w-5' aria-hidden='true' />{' '}
                  402-617-1740
                </a>
              </div>
              <div className='py-6'>
                <a
                  href='https://npdodge.appfolio.com/connect/users/sign_in?a=cw'
                  className='inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600'
                >
                  <CreditCardIcon
                    className='-ml-0.5 h-5 w-5'
                    aria-hidden='true'
                  />
                  Pay Rent
                </a>
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </header>
  )
}
