import React from 'react'
import VoucherCard from '../components/VoucherCard'
import Container from '../components/Container'
import Breadcrumb from '../components/Breadcrumb'

const VoucherDetailPage = () => {
  return (
    <section>
    <Container>
      <Breadcrumb currentPageTitle={'VoucherDetail'}
      Links={[{url:"/voucher", title : "Voucher"}]}
      />
      <VoucherCard/>
    </Container>
   </section>
  )
}

export default VoucherDetailPage