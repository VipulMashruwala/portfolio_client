import React, {Fragment, useEffect, useState}  from "react";
import PortfolioContent from '../../components/PortfolioContent/PortfolioContent';
import classes from './Experience.module.css';
import axios from "axios";

const Experience = (props) => {

    const [experience, setExperience] = useState([])
    const URL = props.base_url + 'portfolio/experience'

    useEffect(() => {
    
        axios({
            url : URL,
            method: 'GET',
         })
         .then(response => {
            console.log(response.data.experience)
            setExperience(response.data.experience)
         }) 
         .catch(err => {
            console.log(err);
         });
    },[URL])

    var experienceData = experience.map((result => {
        return(
            <div key={result.company_name} className={classes.ExperienceContent}>
                <div className={classes.Years}>
                    <p>{result.timeline}</p>
                </div>
                <div className={classes.Details}>
                    <p className={classes.CompanyName}>{result.company_name}</p>
                    <p className={classes.Profile}>{result.profile}, {result.job_type}</p>
                    <p className={classes.Duration}>{result.duration}</p>
                </div>
            </div>
        )
    }))
    
    return(
        <Fragment>
            
        <div className={classes.ExperienceHeading}>
            <div className={classes.Experience}>
                <p className={classes.Heading}>Experience</p>

                <div className={classes.PortfolioContent}>
                    <PortfolioContent />
                </div>
            </div>
            <div>
                { experienceData }
            </div>

        </div>
    </Fragment>
    )
}

export default Experience;