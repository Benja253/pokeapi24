import React from 'react'

const CardProduct = ({ product }) => {

  return (
    <article className='product'>
      <header className='product__header'>
        <img className='product__img' src={product.images[0].url} alt="" />
      </header>
      <section className='product__section'>
        <h4 className='product__subtitle'>{product.brand}</h4>
        <h3 className='product__title'>{product.title}</h3>
      </section>
      <div className='product__price'>
        <span className='procuct__price-label'>Price</span>
        <span className='product__price-value'>{product.price}</span>
      </div>
      <button className='product__btn'>
        <i className='bx bxs-cart product__btn-icon' ></i>
      </button>
    </article>
  )
}

export default CardProduct