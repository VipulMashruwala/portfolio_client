import React, { Fragment, useState, useEffect } from "react";
import PortfolioContent from '../../components/PortfolioContent/PortfolioContent';
import classes from './Skills.module.css';
import axios from "axios";

const Skills = (props) => {

    const [skills, setSkills] = useState([])
    const URL = props.base_url + 'portfolio/skills'

    useEffect(() => {
        axios({
            url: URL,
            method: 'GET',
         })
         .then(response => {
            console.log(response.data.skills)
            setSkills(response.data.skills)
         }) 
         .catch(err => {
            console.log(err);
         });
    },[URL])

    var mySkills = skills.map(result =>{
        return(
            <div key={result.name} className={classes.Details}>
                <p className={classes.CompanyName}>{result.name}</p>
            </div>
        )
    })

    return (
        <Fragment>
            <div className={classes.SkillsHeading}>
                <div className={classes.Skills}>
                    <p className={classes.Heading}>Skills</p>

                    <div className={classes.PortfolioContent}>
                        <PortfolioContent />
                    </div>
                </div>
                <div>
                    <div className={classes.SkillsContent}>
                        {mySkills}
                    </div>
                </div>
            </div>
        </Fragment>
    )
}

export default Skills;