import React from 'react';
import HornedBeasts from './HornedBeasts';


class Main extends React.Component {
  render() {
    return (
    <>
    <h3>Horned Beasts</h3>    
    <HornedBeasts title="Uniwal" description="A unicorn and a narwhal nuzzling their horns" image_url="http://3.bp.blogspot.com/_DBYF1AdFaHw/TE-f0cDQ24I/AAAAAAAACZg/l-FdTZ6M7z8/s1600/Unicorn_and_Narwhal_by_dinglehopper.jpg" />
    <HornedBeasts title="Rhino Family" description="Parent rhino with two babies" image_url="https://images.unsplash.com/photo-1512636618879-bbe79107e9e3?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=bd9460ee6d1ddbb6b1ca7be86dfc4590&auto=format&fit=crop&w=1825&q=80"/>
    </>
    )
  }
}


export default Main;