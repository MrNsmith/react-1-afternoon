import React, { Component } from "react";

class FilterObject extends Component {
  constructor() {
    super();
    this.state = {
      players: [
        {
          name: "Paul Jones",
          team: "Hawks",
          age: 23,
          position: 'QB'
        },
        {
          name: "Jim Jones",
          team: "Bills",
          age: 43,
          superBowls: 3
        }, 
        {
          name: "Tom Willis",
          team: "Panthers",
          
        }
      ],
      userInput: "",
      filteredPlayers: [],
    };
  }
  updateUserInput = (event) => {
    this.setState({
      userInput: event.target.value,
    });
  };
  filterPlayers = (prop) =>{
      let players = this.state.players;
      let filteredPlayers = [];
      for(let i = 0; i < players.length;i++){
          if(players[i].hasOwnProperty(prop)){
              filteredPlayers.push(players[i])
          }
      }
      
      this.setState({
        filteredPlayers: filteredPlayers,
      })
  }
  render() {
    return (
      <div className="puzzleBox filterObjectPB">
        <h4>FilterObject</h4>
        <span className="puzzleText"> Original: { JSON.stringify(this.state.players)} </span>
        <input
          className="inputLine"
          onChange={(e) => this.updateUserInput(e)}
        />
        <button className="confirmationButton"onClick={()=> this.filterPlayers(this.state.userInput)}> Filter </button>
        <span className="resultsBox filterObjectRB"> Filtered:{ JSON.stringify(this.state.filteredPlayers, null, 10)} </span>
      </div>
    );
  }
}

export default FilterObject;
