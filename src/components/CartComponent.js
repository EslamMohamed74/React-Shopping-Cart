import React, { Component } from 'react';
import { connect } from 'react-redux';
import { removeItem, addQuantity, subtractQuantity } from '../redux/cartActions'

class CartComponent extends Component {

    //to remove the product completely from cart
    handleRemove = (id) => {
        this.props.removeItem(id);
    }
    //to add the quantity of product
    handleAddQuantity = (id) => {
        this.props.addQuantity(id);
    }
    //to substruct from the quantity of product
    handleSubtractQuantity = (id) => {
        this.props.subtractQuantity(id);
    }

    render() {
        const cartProducts = this.props.products.map((cartProduct) => {
            return (
                <li className="items" key={cartProduct.id} >
                    <div className="infoWrap">
                        <div className="cartSection">
                            <img src={cartProduct.img} alt="" className="itemImg" />
                            <h3>{cartProduct.title}</h3>
                            <p className="itemNumber">{cartProduct.code}</p>
                            <p className="itemQuantity">
                                <i className="fa fa-minus" aria-hidden="true" onClick={() => { this.handleSubtractQuantity(cartProduct.id) }}> &nbsp;</i>
                                <input type="text" className="qty" value={cartProduct.quantity} disabled />
                                <i className="fa fa-plus" aria-hidden="true" onClick={() => { this.handleAddQuantity(cartProduct.id) }}>&nbsp;</i>
                            </p>
                        </div>
                        <div className="prodTotal cartSection">
                            <p>${cartProduct.price}</p>
                        </div>
                        <div className="cartSection removeWrap">
                            <i className="fa fa-times" aria-hidden="true" onClick={() => { this.handleRemove(cartProduct.id) }}></i>
                        </div>
                    </div>

                </li>
            );
        });


        return (
            <div className="wrap cf">
                <div className="heading cf">
                    <h1>Shopping Cart</h1>
                </div>
                <div className="cart">
                    <ul className="cartWrap">
                        {cartProducts}
                    </ul>
                </div>
                <div className="subtotal cf">
                    <ul>
                        <li className="totalRow final">
                            <span className="label">Subtotal:</span>
                            <span className="value">${this.props.total}</span>
                        </li>
                    </ul>
                </div>
                <div className="backLink">
                    <p>
                        <i className="fa fa-arrow-left" aria-hidden="true">&nbsp;</i>
                        <span>Continue Shopping</span>
                    </p>
                </div>
            </div>
        )
    }

}

const mapStateToProps = (state) => {
    return {
        products: state.addedProducts,
        total: state.total
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        removeItem: (id) => { dispatch(removeItem(id)) },
        addQuantity: (id) => { dispatch(addQuantity(id)) },
        subtractQuantity: (id) => { dispatch(subtractQuantity(id)) }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(CartComponent);