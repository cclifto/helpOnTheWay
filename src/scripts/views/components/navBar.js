import React from 'react'
import Backbone from 'backbone'

//entire navbar
var	NavBarComponent = React.createClass({
	
	//builds a list of buttons based on a .buttons property
	_makeNavButtons: function(){

		var buttonsArray = []
		
		for(var btnProp in this.props.navButtons){
			buttonsArray.push(<NavButtonComponent buttonsProps = {this.props.navButtons[btnProp]}/>)
			
		}

		return buttonsArray

	},
	
	//returns the whole navbar component
	render: function() {

		return(
			<ul className = "navBarComponent navbar-nav mr-auto">{this._makeNavButtons()}</ul>
		)
	}
})

//actual single button component
var NavButtonComponent = React.createClass({
	
	render: function(){
		return(
			<li className = "nav-item">
				<a href = {this.props.buttonsProps.link} className="navButton nav-link" id={this.props.buttonsProps.name}>{this.props.buttonsProps.name}</a>
			</li>
		)
	}

})

export default NavBarComponent 