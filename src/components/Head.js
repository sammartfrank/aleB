import React, { Component } from 'react';
import arrow from './img/arw.png';
import { Spring } from 'react-spring';

import video from './img/vids/HOME.mp4';

class Head extends Component {

	componentDidMount() {
		var typer = {
    arrWords: ["30 yo. Thinking", "Building", "Creating", "Colouring", "Modeling", "Thinking some more", "Shaping", "Developing", "Advertisingness within", "Skill-set for modern times", "Based in Buenos Aires.", "Inspired Creative", "Aware", "Gamer", "Human"],
    el: document.getElementById("type-word"),
    selectWord: "",
    word: "",
    count: 0,
    i: 0,
    await: 5000,
    timeAnimation: 100,
    timer: false,
    animation: "",
    forward: function forward() {
        if (this.count === this.arrWords.length) {
            this.count = 0;
        }
        this.selectWord = this.arrWords[this.count];
        if (!this.timer) {
            this.word = this.selectWord.slice(0, ++this.i);
            this.el.innerHTML = this.word;
            this.animation = setTimeout(this.forward.bind(typer), this.timeAnimation);
        } else {
            this.word = this.selectWord.slice(0, --this.i);
            this.el.innerHTML = this.word;
            this.animation = setTimeout(this.forward.bind(typer), this.timeAnimation);
        }
        if (this.word == this.selectWord) {
            this.timer = true;

        } else if (this.word === "") {
            this.timer = false;
            this.count++;
            this.i = 0;
        }
    }
 };
 typer.forward();
	}

	render() {
		return (
			<div className="container-fluid" id="start" style={{display:'static'}}>
			 <div className="header">
					<div style={{width: '100vw', height: '100%',position: 'fixed', top: '0px', left:'0px', overflow: 'hidden', zIndex: '-1'}}>
  				<video src={video} autoPlay loop style={{width:'100vw', height:'100%', objectFit: 'cover'}}/>
				</div>
					<Spring
						from={{ opacity:0, transform: 'translateX(-150px)', }}
						to={{ opacity:1, transform: 'translateX(0)',}}
						delay={1000}>
							{props => <div style={props}>
												<h1>Ale<br/>bArredo</h1>
											</div>
							}
					</Spring>
					<Spring 
							delay={1000}
							from={{ opacity:0, transform: 'translateX(150px)', }}
							to={{ opacity:1, transform: 'translateX(0)', }}>
								{props => <div style={props}>
								<p><span id="type-word"></span><span className="blink">|</span></p>
								</div>}
					</Spring>
				</div>
				<div className="arr" id="arr">
				<Spring
							delay={1500}
							from={{opacity:0, transform: 'translateY(-150px)',}}
							to={{opacity:1, transform: 'translateY(0)',}}
						>{props => <div style={props} id="arrow">
									<p>CHECK OUT <br/><strong>MY WORK</strong></p>
									<img src={arrow} id="ok" />
								</div>}
				</Spring>
			</div>
			</div>
		);
	}
}

export default Head;