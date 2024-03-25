import Head from 'next/head'
import Header from './header'
import Statement from './statement'
import Cta from './cta'
import ImageDetails from './imageDetails'
import ImageTile from './imageTitle'
import PhotoGrid from './photogrid'
import Units from './units'
import Amenities from './amenities'

export default function Home () {
  return (
    <>
      <Header />
      <Amenities />
      <Cta />
      <Units />
      <Statement />
      <PhotoGrid />
      <ImageTile />
      <ImageDetails />
    </>
  )
}
