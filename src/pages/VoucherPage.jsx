import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import Container from '../components/Container'
import VoucherList from '../components/VoucherList';


const VoucherPage = () => {
  return (
    <section>
      <Container>
      <Breadcrumb currentPageTitle={'Voucher'}/>
       <VoucherList/>
      </Container>
    </section>
  )
}

export default VoucherPage