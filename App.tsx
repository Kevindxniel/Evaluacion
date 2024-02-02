import React from 'react'
import { SafeAreaView, View } from 'react-native'
import Vectores from './src/screens/Vectores'
import {Flex1 } from './src/screens/Flex1'
import {Flex2} from './src/screens/Flex2'
import { Flex3 } from './src/screens/Flex3'
import { Flex6 } from './src/screens/Flex6'
import { Flex4 } from './src/screens/Flex4'
import { Flex5 } from './src/screens/Flex5'
import { Flex7 } from './src/screens/Flex7'
import { Flex8 } from './src/screens/Flex8'
import { Flex9 } from './src/screens/Flex9'

const App = () => {
  return (
    <SafeAreaView style={{flex: 1}}>
    {/* <Vectores numeros={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}/>  */}
    {/* <Flex1/>  */}
     {/* <Flex2/>   */}
    {/* <Flex3/> */}
     {/* <Flex4/> */} 
     {/* <Flex5/> */}
     {/* <Flex6/>    */}
     {/* <Flex7/> */}
     {/* <Flex8/> */}
     <Flex9/>


    </SafeAreaView>
  )
}

export default App
