import React, { Component } from 'react';
import foods from './foods.json';
import FoodBox from './FoodBox';
import AddFood from './addFood';

/* FoodList definiert die Daten für die FoodBox */




class FoodList extends Component {
    constructor(){
        super();
        this.state = {
            foods: foods, 
            displayForm: false, 
            searchInput: ""
        }
    }
    addFoodHandler = (theFood) => {
        const foodsCopy = [...this.state.foods];
        foodsCopy.push(theFood);
        this.setState({
          foods: foodsCopy
        })
      }

      toggleForm = () => {
        this.setState({ displayForm: !this.state.displayForm })
      }

    handleChange = (event) => {
        this.setState({
            searchInput: event.target.value
        })
    }
    
    render(){
        const filteredList = this.state.foods.filter(food => { return food.name.toLowerCase().includes(this.state.searchInput.toLowerCase())});
        const filteredFoodJSX = filteredList.map((oneFood, index) => {return <FoodBox key = {index} {...oneFood}/>});
        
        return (
               <div>
                    <input type="search" onChange={this.handleChange} value={this.state.searchInput} />
                
               <div className = "addFoodContainer">

                    <button onClick= {this.toggleForm}>
                    Add Food
                    </button>

                    {this.state.displayForm ? <AddFood addTheFood={this.addFoodHandler} toggleForm = {this.toggleForm}/> :null}
               </div>

               <div>
                    {filteredFoodJSX}
               </div>
             </div>
            )
    }

}

export default FoodList;