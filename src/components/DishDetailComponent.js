import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle } from 'reactstrap' ;

class DishDetail extends Component {
  renderDish(dish) {
    // { new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:  '2-digit'}).format(new Date(Date.parse(comment.date)))}

    if(dish != null)
      return(
        <Card>
          <CardImg top src={dish.image} alt={dish.name} />
          <CardBody>
            <CardTitle>{dish.name}</CardTitle>
            <CardText>{dish.description}</CardText>
          </CardBody>
        </Card>
      );
    else
      return(
        <div></div>
      );
  }

  render() {
    return(
      <div className="col-12 col-md-5 m-1">
        {this.renderDish(this.props.dish)}
      </div>
    );
  }
}

export default DishDetail
