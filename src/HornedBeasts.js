import React from 'react';



class HornedBeasts extends React.Component{
  render(){
    return(
      <>
      <p>{this.props.title}</p>
      <p>{this.props.description}</p>
      <img src={this.props.image_url}alt={this.props.description}></img>
      </>
    )
  }
}

export default HornedBeasts;