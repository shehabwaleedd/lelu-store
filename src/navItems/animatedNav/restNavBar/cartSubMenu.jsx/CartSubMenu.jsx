import React from 'react'
import './CartSubMenu.scss'
import picture1 from "../../../../assets/summer1.jpg"
import picture2 from "../../../../assets/summer2.jpg"


const CartSubMenu = () => {

    const Data = [
        {
            id: 1,
            title: "Green Tropical T-Shirt",
            price: "599.99",
            oldPrice: "699.99",
            img: picture1,
            img2: picture2,
            alt: "summer collection",
            desc: "Flannel Muslin.",
            isNew: true,
        },
        {
            id: 2,
            title: "Green Tropical T-Shirt",
            price: "599.99",
            oldPrice: "699.99",
            img2: picture2,
            img: picture1,
            alt: "summer collection",
            desc: "Flannel Muslin.",
            isNew: true,
        },
    ]

    return (
        <div className='cart'>
            <h1>Products In Your Cart</h1>
            {Data?.map(item => (
                <div className="item" key={item.id}>
                    <img src={item.img} alt="" />
                    <div className="details">
                        <div className="titleunddelete">
                            <h1>{item.title}</h1>
                            <i className='bx bx-trash-alt delete'></i>
                        </div>
                        <p>{item.desc?.substring(0, 100)}</p>
                        <div className="price">
                            <span className='newPrice'>1 x ${item.price}</span>
                        </div>
                    </div>
                    <div className="cart_dash"></div>
                </div>
            ))}
            <div className="total">
                <h1>Total</h1>
                <span>$599.99</span>
            </div>
            <button>PROCEED TO CHECKOUT</button>
            <span className='reset'>Reset Cart</span>
        </div>
    )
}

export default CartSubMenu