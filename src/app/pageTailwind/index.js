import Head from 'next/head'
import Header from './header'
import Statement from './statement'
import Cta from './cta'
import ImageDetails from './imageDetails'
import ImageTile from './imageTitle'
import PhotoGrid from './photogrid'
import Units from './units'
import Amenities from './amenities'
import Footer from './footer'
import CtaFacebook from './ctaFacebook'
import ImageWithStats from './imageWithStats'
import Message from './message'
import GetInTouch from './getInTouch'

export default function Home () {
  return (
    <div className='bg-white'>
      <Header />
      <Cta />
      <Statement />
      <ImageDetails />
      <CtaFacebook />
      <Units />

      <Amenities />
      <PhotoGrid />
      <Message message='Welcome to Our Neighborhood' />
      <ImageWithStats />
      {/* <ImageTile /> */}
      {/* <MapComponent /> */}
      {/* <GetInTouch /> */}
      <Footer />
    </div>
  )
}
