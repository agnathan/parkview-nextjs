'use client'
import { useEffect } from 'react'
import { analytics } from './config/firebase'
import Page from './pageTailwind'

export default function Home () {
  useEffect(() => {
    console.log('7')
    if (analytics) {
      console.log('8')
      analytics
    }
  }, [])
  return <Page />
}
