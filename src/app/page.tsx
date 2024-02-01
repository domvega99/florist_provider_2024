import { Button, Input } from '@nextui-org/react'
import Navbar from './components/Navbar'
import Search from './components/ui/search'
import data from '../../flowers'
import Product from './components/Product'

export default function Home() {
  return (
    <div className=''>
      <div className='m-1 p-1'>
        <Search/>
      </div>
      <div className='m-1'>
        <Product/>
      </div>
    </div>
  )
}
