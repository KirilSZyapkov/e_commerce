import React from 'react'

function CartItem() {
  return (
    <div className="hover-box">

        <a href="/"><img src="../../images/hover1.png" alt="" className="left-hover" /></a>
            <div className="hover-details">
                <p>Grey California Dress</p>
                <span>$ 3 199.00</span>
                    <div className="quantity">Quantity: 1</div>
            </div>

        <a href="/" className="right-hover"><img src="../../images/delete.png" alt="" />X</a>

        <div className="clear"></div>

    </div>
  )
}

export default CartItem