import React, { Component } from 'react'


export default class Step extends Component {
    constructor(props) {
        super(props)

        this.state = {
            stepCount: 1,
            steps: props.steps,
            curStep: props.steps[0].name,
            curStepLength: props.steps[0].length_of_time,
        }
        this.mapStepTimer = this.mapStepTimer.bind(this)
        this.startTimer = this.startTimer.bind(this)
        this.firstTimer()
    }

    componentDidUpdate() {
        this.startTimer()
    }

    firstTimer() {
        setTimeout(function(){console.log('5')}, 1000);
        setTimeout(function(){console.log('4')}, 2000);
        setTimeout(function(){console.log('3')}, 3000);
        setTimeout(function(){console.log('2')}, 4000);
        setTimeout(function(){console.log('1')}, 5000);
        setTimeout(this.startTimer, 6000);
    }

    startTimer() {
        console.log(this.state.curStepLength)
        setTimeout(this.mapStepTimer, this.state.curStepLength*1000);
    }

    mapStepTimer() {
        if (!!this.state.steps[this.state.stepCount]) {
            setTimeout(() => {
                let newStep = this.state.steps[this.state.stepCount]
                this.setState({
                    curStep: newStep.name,
                    curStepLength: newStep.length_of_time,
                    stepCount: this.state.stepCount += 1,
                })
            },this.state.curStepLength)
        } else {
            this.setState({
                curStep: "Enjoy!"
            })
        }
    }

    removeStep() {
        console.log(this.state.steps[this.stepInt])
        debugger
        this.stepInt += 1
    }

    render() {

      if (this.state.curStep.includes('Stir')){
        return (
          <div className="vis">
              <div>{this.state.curStep}</div>
              <img class="image" src={'https://media.giphy.com/media/xUPGcs4d4wxnVuuyPe/giphy.gif'} />
          </div>
        )
      } else {
        return (
          <div className="vis">
            <div>{this.state.curStep}</div>
          </div>
        )
      }
    }

}
