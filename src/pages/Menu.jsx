import React, { useContext } from 'react'
import MenuFilterCard from '../components/menuComponents/MenuFilterCard'
import MenuFilterContainer from '../components/menuComponents/MenuFilterContainer'
import Border from '../components/Border/Border'
import CardMount from '../components/CardMount/CardMount'
import testData from '../components/TestData/TestData'
import {CatagoryContext} from '../context/CatagoryContext'


function Menu() {

const {selectCatagory} = useContext(CatagoryContext)

  const filterData = selectCatagory === 'all'? testData : testData.filter(item=>item.category===selectCatagory);

  return (
    <>
    <MenuFilterContainer/>
    <Border/>
    <CardMount
      data={filterData}
    />
    <Border/>
    </>
  )
}

export default Menu