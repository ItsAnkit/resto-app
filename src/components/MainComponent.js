import React, { Component } from "react";
import Menu from "./MenuComponent";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import DishDetail from "./DishDetailComponent";
import Home from "./HomeComponent";
import Contact from './ContactComponent';
import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from 'react-redux';
import {}

// connect component to redux store and we can obtain state defined in store and are available as props

const mapStateToProps = state => {
  return {
    dishes: state.dishes,
    comments: state.comments,
    promotions: state.promotions,
    leaders: state.leaders
  }
}

const mapDispatchToProps = (dispatch) => {
  // action object returned from addComment is passed to dispatch method and then, it is dispatched
  addComment(dishId, rating, author, comment) => dispatch(addComment(dishId, rating, author, comment))
}

class Main extends Component {
  constructor(props) {
    super(props);

    // this.state = {

    // };
  }

  // onDishSelect(dishId) {
  //   this.setState({ selectedDish: dishId })
          //<Menu dishes = {this.state.dishes} onClick = {(dishId) => this.onDishSelect(dishId)}/>
        // <DishDetail dish={this.state.dishes.filter((dish) => dish.id === this.state.selectedDish)[0]} />
  // }

  render() {
    const HomePage = () => {
      return(
        <Home dish={ this.props.dishes.filter((dish) => dish.featured)[0] }
        promotion={ this.props.promotions.filter((promotion) => promotion.featured)[0] }
        leader={ this.props.leaders.filter((leader) => leader.featured)[0] }
        />
      );
    }

    const DishWithId = ({match}) => {
      return(
        <DishDetail dish={this.props.dishes.filter((dish) => dish.id === parseInt(match.params.dishId, 10) )[0] }
          comments={this.props.comments.filter((comment) => comment.dishId === parseInt(match.params.dishId, 10) ) } />
      );
    }

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route exact path= "/menu" component={ () => <Menu dishes={this.props.dishes} /> } />
          <Route path="/menu/:dishId" component = {DishWithId} />
          <Route exact path='/contactus' component={Contact} />
          <Redirect to="/home" />
        </Switch>
        <Footer />
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Main));
