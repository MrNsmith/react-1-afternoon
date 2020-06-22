import React, {Component} from 'react';

class Sum extends Component {
    constructor(props){
        super(props);
        this.state = {
            number1: 0,
            number2: 0,
            sum: null,
            
        }
        
    }

    handleChange1= (event) =>{
             this.setState({number1: event.target.value})
    }
    handleChange2= (event) =>{
        this.setState({number2: event.target.value})
}
    upDateSum = () => {
       let sum = 0;
       sum = this.state.number1 + this.state.number2  
       this.setState({
           sum: sum
       })
    }
    render(){
        return(
            <div className='puzzleBox sumPB'>
                <h4>Sum</h4>
                <input
                onChange={(e)=>this.handleChange1(e)}
                className="resultsBox"/>
                <input onChange={(e)=>this.handleChange2(e)}
                className="resultsBox"/>
                <button onClick={this.upDateSum}
                className="confirmationButton"></button>
        <span className="resultsBox">{this.state.sum}</span>
                
            </div>
        )
    }
}
export default Sum;