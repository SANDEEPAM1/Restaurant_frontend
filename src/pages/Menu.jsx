import React from 'react'
import MenuFilterCard from '../components/menuComponents/MenuFilterCard'
import MenuFilterContainer from '../components/menuComponents/MenuFilterContainer'
import Border from '../components/Border/Border'
import CardMount from '../components/CardMount/CardMount'
import testData from '../components/TestData/TestData'


function Menu() {
  return (
    <>
    <MenuFilterContainer/>
    <Border/>
    <CardMount
      data={testData}
    />
    </>
  )
}

export default Menu