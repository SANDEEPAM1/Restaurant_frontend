import React from 'react'
import Border from '../components/Border/Border'
import ReservasionMiddle from '../components/ReservasionMiddle/ReservasionMiddle'
import ReservasionHead from '../components/ReservasionMiddle/ReservasionHead'

function Reservation() {



  return (
    <>
      <ReservasionHead/>
      <Border/>
      <ReservasionMiddle/>
      <Border/>
    </>
  )
}

export default Reservation