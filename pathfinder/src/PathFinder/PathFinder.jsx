import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import './PathFinder.css'

export default class PathFinder extends React.Component {
    constructor(props) {
        super(props)
    }

        componentWillMount() {
            this.setState({
                canvasSize: {
                    canvasWidth: 800, canvasHeight: 600
                }
            })
        }

        componentDidMount(){
            const { canvasWidth, canvasHeight } = this.state.canvasSize
            this.canvasHex.width = canvasWidth
            this.canvasHex.height = canvasHeight
            this.drawHex(this.canvasHex, { x: 50, y: 50})
        }

    render() {
        return (
            <div className='pathfinder'>
                <canvas ref={ canvasHex => thos.canvasHex = canvasHex }></canvas>
            </div>
        )
    }



}
