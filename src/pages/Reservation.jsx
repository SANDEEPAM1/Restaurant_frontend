import React from 'react'
import Border from '../components/Border/Border'
import ReservasionMiddle from '../components/ReservasionMiddle/ReservasionMiddle'
import ReservasionHead from '../components/ReservasionMiddle/ReservasionHead'
import ReservasionForm from '../components/ReservasionMiddle/ReservasionForm/ReservasionForm'

function Reservation() {



  return (
    <>
      <ReservasionHead/>
      <Border/>
      <ReservasionMiddle/>
      <Border/>
      <ReservasionForm/>
    </>
  )
}

export default Reservation