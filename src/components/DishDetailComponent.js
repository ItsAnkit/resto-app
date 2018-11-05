import React, { Component } from 'react';
import { Card, CardImg, CardText, CardBody, CardTitle, Breadcrumb, BreadcrumbItem } from 'reactstrap' ;

  function RenderDish(props) {
    // { new Intl.DateTimeFormat('en-US', {year: 'numeric', month:'short', day:  '2-digit'}).format(new Date(Date.parse(comment.date)))}
    const dish = props.dish;
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

  function RenderComments({comments}) {
    if(comments != null) {
      const comments_collection = comments.map((comment) => {
        return (
          <Card>
            <CardTitle>Comments</CardTitle>
            <CardText>{comment.author}</CardText>
            <CardText>{comment.comment}</CardText>
          </Card>
        );
      });
      return comments_collection;
    }
    else {
      return(
        <div></div>
      );
    }
  }

  const DishDetail = (props) => {

    return(
      <div className='container'>
        <div className='row'>
          <Breadcrumb>
            <BreadcrumbItem to="/menu">
              Menu
            </BreadcrumbItem>
            <BreadcrumbItem active>
              {props.dish.name}
            </BreadcrumbItem>
          </Breadcrumb>
        </div>
        <div className='row'>
          <div className="col-12 col-md-5 m-1">
            <RenderDish dish={props.dish} />
          </div>
        </div>
        <div className='row'>
          <div className='col-12 col-md-5 m-1'>
            <RenderComments comments={props.comments}/>
          </div>
        </div>
      </div>
    );
  }


export default DishDetail;
