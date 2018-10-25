import React, { Component } from 'react';
import { Card, CardImg, CardImgOverlay, CardTitle } from 'reactstrap' ;

  // functional component
  function RenderMenuItem({dish, onClick}){
    return(
      <Card key={dish.id} onClick={() => onClick(dish.id)} >
        <CardImg width="40%" height="5%" src={dish.image} alt={dish.name} />
        <CardImgOverlay>
          <CardTitle>{dish.name}</CardTitle>
        </CardImgOverlay>
      </Card>
    );
  }

  // Another way to define functional component
  const Menu = (props) => {
    const menu = props.dishes.map((dish) => {
      return (
        <div className='col-12 col-md-5 m-1'>
          <RenderMenuItem dish={dish} onClick={props.onClick} />
        </div>
      );
    });

    return(
      <div className='container'>
        <div className='row'>
          {menu}
        </div>
      </div>
    );
  }

//exporting component so that it can be further imported
export default Menu;
