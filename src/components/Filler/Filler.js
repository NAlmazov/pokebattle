import React from 'react';
import './Filler.css';

const Filler = (props) => {
    const colormatch = (props) =>{
      let color = ``;
      let num = Number(props.percentage);
      if (num > 90){
        color = `green`
        return color;
      } else {
        if (num > 80){
          color = `yellow`
          return color;
        } else {
          color = `red`
          return color;
        }
      }
    }

    let colorFiller = colormatch(props);

    return <div className={"filler" + " " + (colorFiller)} style={{ width: `${props.percentage}%` }} ><span>{props.percentage}%</span></div>
  }

  export default Filler;