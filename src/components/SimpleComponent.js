import React from 'react'

class SimpleComponent extends React.Component {

    constructor(){
        super()

        this.state = {
            mood: 'happy'
        }
    }

    handleMood = () => {
        const newMood = this.state.mood === 'happy' ? 'sad' : 'happy'
        this.setState({
            mood: newMood
        })
    }

    render(){

        return(
            <div onClick={this.handleMood}>
                <p>{this.state.mood}</p>
            </div>
        )
    }
}

export default SimpleComponent