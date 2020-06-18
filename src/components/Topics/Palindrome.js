import React, {Component} from 'react';

class Palindrome extends Component {
    constructor(){
        super();
        this.state={
            userInput: '',
            palindrome:'',

        }
    }
    updateInput = (event) => {
        this.setState({
            userInput: event,
        })
    }
    checkInput = (userInput)=>{
      
        let str = userInput;
        let reversedStr = userInput.split('').reverse().join('');
        if(str === reversedStr){
            this.setState({palindrome: 'true'});
        }else {
            this.setState({palindrome: 'false'});
        }
            
            

    
    }

    render(){
        return(
            <div className="puzzleBox filterStringPB"> 
            <h4>Palindrome</h4>
            <span className="resultBox"></span>
            <input className="inputLine" onChange={(e)=>this.updateInput(e.target.value)}/>
            <button className="confirmationBox" onClick={()=>this.checkInput(this.state.userInput)}>Check</button>
            <span className=""> Palindrome:{this.state.palindrome}</span>

            </div>
        )
    }
}
export default Palindrome;