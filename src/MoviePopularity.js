import React, { Component } from 'react';

class MoviePopularity extends Component{
	render(){
     console.log(this.props.popularityData);
      console.log(this.props.unpopularityData);
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

       {
         this.props.unpopularityData.map((movie, key) => (
           <li key={key}>
       			<h2>{movie[key].name}</h2>
           		<span>Liked By:</span>
				<span>&nbsp;<br />No one has favorited this movie yet!! </span>
       		</li>
         ))
       }
 
  	   </ol>

     )
    }
}

export default MoviePopularity;