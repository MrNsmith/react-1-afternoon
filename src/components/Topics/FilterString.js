import React, {Component} from 'react';

class FilterString extends Component {
    constructor(){
        super()
        this.state = {
            adjectives:['happy','very','awesomeness','greatness', 'wonderful'],
            userInput: '',
            filteredAdjectives: [] 
        }
     
        

    }
    updateArray = (event) =>{
        this.setState({
            userInput: event.target.value,
        })
    }
    filterAdjectives = (userInput) =>{
        let arr = this.state.adjectives;
        let filterAdjectives = [];
        for(let i = 0; i < arr.length; i++){
            if(arr[i].includes(userInput)){
                filterAdjectives.push(arr[i])
            }
        }
        this.setState({
            filterAdjectives: filterAdjectives,
        })
    }
    render(){
        return(
           <div className="puzzleBox filterStringPB">
               <h4>Filter String</h4>
        <span className="puzzleText">Adjectives{ JSON.stringify(this.state.adjectives, null , 10)}</span>
               <input className="inputLine" onChange={(e)=>this.updateArray(e)}/>
               <button className="confirmationButton" onClick={()=> this.filterAdjectives(this.state.userInput)}>Filter</button>
               <span className="resultBox filterStringRB">{JSON.stringify(this.state.filterAdjectives, null, 10)}Filtered Adjectives</span>
           </div>
        )
    }
}

export default FilterString;