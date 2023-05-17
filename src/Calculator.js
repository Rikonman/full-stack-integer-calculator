import React from 'react';
export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: "0",
            operator: "TBD",
            secondNumber: "0"
        };

        this.PressButton = (symbol) => {
            console.log(symbol, this.state.firstNumber, this.state.secondNumber);
            if (symbol != " " && symbol != "+" && symbol != "-" && symbol != "*" && symbol != "=")
            {
                if (this.state.operator == "TBD") {
                    if (this.state.firstNumber == "0")
                    {
                        this.setState({
                            firstNumber: symbol
                        });
                    }
                    else
                    {
                        this.setState({
                            firstNumber: this.state.firstNumber + symbol
                        });
                    }
                }
                else {
                    if (this.state.secondNumber == "0")
                    {
                        this.setState({
                            secondNumber: symbol
                        });
                    }
                    else
                    {
                        this.setState({
                            secondNumber: this.state.secondNumber + symbol
                        });
                    }
                }
            }
            else if (symbol != " " && symbol != "=")
            {
                this.setState({
                    operator: symbol
                });
            }
            else if (symbol == "=")
            {
                
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
        <p className="output">{this.state.operator == "TBD" ? this.state.firstNumber : this.state.secondNumber}</p>
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