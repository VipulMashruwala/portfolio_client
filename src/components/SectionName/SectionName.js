import React, { Fragment } from "react";
import classes from './SectionName.module.css'
import Typed from 'react-typed'


const SectionName = () =>{
    return(
        <Fragment>
            <div className={classes.Header}>
                        <p className={classes.Greeting}>
                            <Typed 
                                className={classes.TypedGreeting}
                                strings={["Hello","नमस्ते","નમસ્તે","नमस्कार"]}
                                typeSpeed={40}
                                backSpeed={60}
                                loop
                             />     
                        </p>
                        <p className={classes.Name}>I'm <span className={classes.MyName}>Vipul Mashruwala</span></p>
                        <p className={classes.College}>Senior Developer @ ICICI Lombard</p>
                </div>
        </Fragment>
    );
}

export default SectionName;