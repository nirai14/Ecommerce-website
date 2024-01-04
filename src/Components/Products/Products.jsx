import React from 'react'
import css from './Products.module.css'
import plane from '../../assets/plane.png'
import { ProductsData} from '../../data/products'
import {useAutoAnimate} from '@formkit/auto-animate/react'


const Products = () => {

  const[parent]=useAutoAnimate()
  const[menuProducts,setMenuProducts]=React.useState(ProductsData)
  const filter=(type)=>{
    setMenuProducts(ProductsData.filter((product)=>product.type===type))
  }

  return (
<div className={css.container}>
    <img src={plane} alt="" />
    <span >Our Featured Products</span>
    <div className={css.products}>
<ul className={css.menu}>
  <li onClick={()=>setMenuProducts(ProductsData)}>All</li>
  <li onClick={()=>filter("skin care")}>Skin</li>
  <li onClick={()=>filter("conditioner")}>Conditioner</li>
  <li onClick={()=>filter("foundation")}>Foundation</li>
</ul>
<div className={css.list} ref={parent}>
{menuProducts.map((slide,i)=>(
  <div className={css.product}>
<div className={css.left}>
      <div className='name'>
<span>{slide.name}</span>
<span>{slide.detail}</span>
        </div>
        <span>{slide.price}$</span>
        <div>Shop now</div>
      </div>
      <img src={slide.img} alt="product" className={css.imgp}/>
      </div>
))}
</div>
</div>

</div>
  )
}
export default Products