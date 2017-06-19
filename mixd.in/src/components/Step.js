import React, { Component } from 'react'

var incre = 0
export default class Step extends Component {
    constructor(props) {
        super(props)
       
        this.state = {
            stepCount: 1,
            steps: props.steps,
            curStep: props.steps[0].name,
            curStepLength: props.steps[0].length_of_time+6
        }
        this.mapStepTimer = this.mapStepTimer.bind(this)
        this.startTimer()
    }
    
    startTimer() {
        setTimeout(function(){console.log('5')}, 1000);
        setTimeout(function(){console.log('4')}, 2000);
        setTimeout(function(){console.log('3')}, 3000);
        setTimeout(function(){console.log('2')}, 4000);
        setTimeout(function(){console.log('1')}, 5000);
        setTimeout(this.mapStepTimer, 6000);
    }

    mapStepTimer() {
        
        // this.props.drink.steps.map((step,index) =>{
        // this.start += step.length_of_time*1000
        //     setTimeout(this.removeStep, this.start);
        // })
        setTimeout(() => {
            let newStep = this.state.steps[this.state.stepCount]
            console.log(this.state.steps)
            console.log(newStep)
            this.setState({
                curStep: newStep.name,
                curStepLength: newStep.length_of_time
            })
        },this.state.curStepLength)
        
    }

    removeStep() {
        console.log(this.state.steps[this.stepInt])
        debugger
        this.stepInt += 1
    }

    render() {
        return (
            <div className="vis">
                <div>{this.state.curStep}</div>
            </div>
        )
    }
  
}

