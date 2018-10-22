import React, { Component } from 'react';
import { Media, Card, CardImg, CardImgOverlay, CardText, CardBody, CardTitle } from 'reactstrap' ;

class Menu extends Component {
  constructor(props) {
    //Supply props to superclass.
    super(props);
    this.state = {
      selectedDish: null
    }
    console.log('Constructor is invoked.')
  }

  componentDidMount() {
    console.log('Component Did Mount is invoked.')
  }

  onDishSelect(dish) {
    this.setState({ selectedDish: dish })
  }

  renderDish(dish) {
    if(dish != null){
      <Card>
        <CardImg width="20%" heigth="30%" src={dish.image} alt={dish.name} />
        <CardBody>
          <CardTitle>{dish.name}</CardTitle>
          <CardText>{dish.description}</CardText>
        </CardBody>
      </Card>
    }else {
      return(
        <div></div>
        );
    }
  }

  render() {
    const menu = this.props.dishes.map((dish) => {
      return (
        <div key={dish.id} className='col-12 col-md-5 m-1'>
          <Card onClick = { () => this.onDishSelect(dish) }>
            <CardImg width="20%" heigth="30%" src={dish.image} alt={dish.name} />
            <CardImgOverlay>
              <CardTitle>{dish.name}</CardTitle>
              <p>{dish.description}</p>
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
        <div className='row'>
          { this.renderDish(this.state.selectedDish) }
        </div>
      </div>
    );
  }
}

//exporting component so that it can be further imported
export default Menu;
