import React, {Component} from 'react';
export default class QuizComponent extends Component{
    render(){
        return(
            <div className="container">
            <div className="quiz">
                <h1>Question</h1>
                <div className="quest">
                <p className="num">4 of 15</p>
                <p className="que">Which is the only mammal that can't jump?</p>
                </div>
                <br/>
                <div className="opts">
                    <button className="opt">Dog</button>
                    <button className="opt">Goat</button>
                    <button className="opt">Elephant</button>
                    <button className="opt">Lion</button>
                </div>
                <br/>
                <div className="change">
                    <button className="prev">Previous</button>
                    <button className="nex">Next</button>
                    <button className="end">Quit</button>
                </div>
            </div>
            </div>
        )
    }
}