import React from 'react';
export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            currentNumber: "0",
            operator: "+",
            otherNumber: "0"
        };
        this.PressButton = (symbol) => {
            console.log(symbol, this.state.currentNumber);
            if (symbol != " " && symbol != "+" && symbol != "-" && symbol != "*" && symbol != "=")
            {
                if (this.state.currentNumber == "0")
                {
                    this.setState({
                        currentNumber: symbol
                    });
                }
                else
                {
                    this.setState({
                        currentNumber: this.state.currentNumber + symbol
                    });
                }
            }
        }
        this.MakeButton = (symbol) => {
            return (
                <button className="button" onClick={() => {this.PressButton(symbol);}}>{symbol}</button>
            );
        }
    }
    render() {
        return <div className="container">
        <p className="output">{this.state.currentNumber}</p>
        {this.MakeButton("7")}
        {this.MakeButton("8")}
        {this.MakeButton("9")}
        {this.MakeButton("+")}
        {this.MakeButton("4")}
        {this.MakeButton("5")}
        {this.MakeButton("6")}
        {this.MakeButton("-")}
        {this.MakeButton("1")}
        {this.MakeButton("2")}
        {this.MakeButton("3")}
        {this.MakeButton("*")}
        {this.MakeButton(" ")}
        {this.MakeButton("0")}
        {this.MakeButton(" ")}
        {this.MakeButton("=")}
      </div>;
    }

    MakeButton(symbol) {
        
    }
      
    PressButton(symbol) {
        console.log(symbol);
        
    }
}