import React, { Component } from 'react';

class MoviePopularity extends Component{
	render(){
     console.log(this.props.popularityData);
     return ( 
       <ol>
       {
         Object.keys(this.props.popularityData).map((key) => (
           <li key={key}>
       			<h2>{key}</h2>
           		<span>Liked By:</span>
       			<ul>
       				{
       				 this.props.popularityData[key].map((user) => (
       					<li key={user}>{user}</li>
       				 ))
    				}              		
       			</ul>
       		</li>
         ))
       }
  	   </ol>

     )
    }
}

export default MoviePopularity;