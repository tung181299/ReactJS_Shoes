import React, { Component } from 'react';
import { connect } from 'react-redux';
import { actAddToShoppingList } from 'containers/client/Home/module/shoesReducer/shoesShopActions';
class ProductItem extends Component {
  render() {
    const { shoe, addToShoppingList } = this.props;

    return (
      <div className="col-lg-4 col-md-6 col-sm-12" style={{ paddingBottom: '30px' }}>
        <div className="card" >
          <img className="card-img-top" src={shoe.image} />
          <div className="card-body">
            <h4 className="card-title" style={{ fontSize: "1.2rem" }}>{shoe.name}</h4>
            <p className="card-text">{shoe.price}$</p>
            <button
              className="btn btn-dark"
              onClick={() => addToShoppingList(shoe)}
            >
              Add to cart
            </button>
          </div>
        </div>
      </div>
    );
  }
}

// Tạo ra các function để dispatch action, các func này sẽ được chuyển thành props component
const mapDispatchToProps = dispatch => ({
  addToShoppingList: shoe => {
    // Dispatch action lên reducer
    dispatch(actAddToShoppingList(shoe));
  },
});

export default connect(null, mapDispatchToProps)(ProductItem);
