import React from 'react'
import Container from '../components/Container'
import ModuleBtn from '../components/ModuleBtn'
import { HiCircleStack, HiOutlineDocumentDuplicate } from 'react-icons/hi2'
import { HiOutlineDesktopComputer } from 'react-icons/hi'

const Dashboard = () => {
  return (
    <section>
        <Container>
        <div className='grid grid-cols-1 md:grid-cols-3  gap-5 mt-3'>
                <div className='col-span-1'>
                <ModuleBtn name={"Product"} icon={<HiCircleStack className='size-16'/>} url={'/product'}/>
                </div>
                <div className='col-span-1'>
                <ModuleBtn name={"Sale"} icon={<HiOutlineDesktopComputer className='size-16'/>} url={'/sale'}/>
                </div>
                <div className='col-span-1'>
                <ModuleBtn name={"Voucher"} icon={<HiOutlineDocumentDuplicate className='size-16'/>} url={'/voucher'}/>
                </div>
           </div>
        </Container>
    </section>
  )
}

export default Dashboard