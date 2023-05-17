import React from 'react';
export default class Calculator extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            firstNumber: "0",
            operator: "TBD",
            secondNumber: "0",
            result: "0"
        };

        this.PressButton = (symbol) => {
            if (symbol != " " && symbol != "+" && symbol != "-" && symbol != "*" && symbol != "=")
            {
                if (this.state.operator == "TBD" || this.state.operator == "RESULT") {

                    if (this.state.firstNumber == "0")
                    {
                        this.setState({
                            firstNumber: symbol,
                            operator: "TBD"
                        });
                    }
                    else
                    {
                        this.setState({
                            firstNumber: this.state.firstNumber + symbol,
                            operator: "TBD"
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
                    operator: symbol,
                    secondNumber: "0"
                });
            }
            else if (symbol == "=")
            {
                let operatorName = "TBD";
                if (this.state.operator == "+")
                {
                    operatorName = "add";
                }
                else if (this.state.operator == "-")
                {
                    operatorName = "subtract";
                }
                else if (this.state.operator == "*")
                {
                    operatorName = "multiply";
                }

                if (operatorName != "TBD") {
                    fetch(`http://localhost:8080/${operatorName}/${this.state.firstNumber}/${this.state.secondNumber}`)
                    .then(res => res.json())
                    .then(resultValue => {
                        this.setState({
                            operator: "RESULT",
                            firstNumber: "0",
                            secondNumber: "0",
                            result: resultValue
                        })
                    })
                    .catch(err => console.error(err))
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
        <p className="output">{this.state.operator == "TBD" ? this.state.firstNumber : 
            (this.state.operator == "RESULT" ? this.state.result : this.state.secondNumber)}</p>
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

    
}