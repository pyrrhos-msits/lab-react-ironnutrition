import React, { Component } from 'react';

/*Add food implementiert das Formular zum Eingeben neuer Daten
wird durch Click auf den Button aufgerufen */

class AddFood extends Component{
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            calories: '',
            image: ''
        }
    }

    handleFormSubmit = (event) => {
        event.preventDefault();
        this.props.addTheFood(this.state);   
        this.setState({
          name: '',
          calories: '',
          image: '' 
        });
        this.props.toggleForm(this.state)  
    }

    handleChange = (event) => {
        let {name, value} = event.target;
        this.setState({[name]: value});
     }

 
    render(){
        return(
            <div>
            <form onSubmit={this.handleFormSubmit}>
                <label>Name:</label>
                <input type="text" name="name" value={this.state.name} onChange={this.handleChange} />
      
                <label>Calories:</label>
                <input type="text" name="calories" value={this.state.calories} onChange={this.handleChange} />
      
                <label>Image :</label>
                <input type="img" name="image" src={this.state.image} onChange={this.handleChange} />
                
                <input type="submit" value="Submit"/>
            </form>
          </div>
        )
    }
}

export default AddFood;
