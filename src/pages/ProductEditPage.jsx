import React from 'react'
import Breadcrumb from '../components/Breadcrumb'
import ProductEditCard from '../components/ProductEditCard'
import Container from '../components/Container'

const ProductEditPage = () => {
  return (
    <section>
    <Container>
      <Breadcrumb currentPageTitle={'ProductEdit'} Links={[{url:"/product", title:"Product"}]}/>
      <ProductEditCard/> 
    </Container>
   </section>
  )
}

export default ProductEditPage