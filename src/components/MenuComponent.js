import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap' ;
import DishDetail from './DishDetailComponent'

class Menu extends Component {
  constructor(props) {
    super(props);
    console.log('Constructor is invoked.')
  }

  componentDidMount() {
    console.log('Component Did Mount is invoked.')
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div className='col-12 col-md-5 m-1'>
          <Card key={dish.id} onClick={() => this.props.onClick(dish.id)} >
            <CardImg width="40%" height="5%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
            </CardImgOverlay>
          </Card>
        </div>
      );
    });
    console.log('Render is invoked.')

    return(
      <div className='container'>
        <div className='row'>
          {menu}
        </div>
      </div>
    );
  }
}

//exporting component so that it can be further imported
export default Menu;
