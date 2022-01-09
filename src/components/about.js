import React from 'react'
import {about} from './CSS/about.module.css'

const About = () => {
    return (
        <div className={about}>
            <p>
                Founded in the year 2019, VIT Linux Users Group is small started
                with the goal to promote the use of Linux and Open Source, to educate 
                the community on these software alternatives, and to support and provide
                a social network for local Linux Users.
            </p>
            <p>    
                VITLUG conducts events on the use of Open Source Software which are
                open to non-club members as well. We also publish blogs on medium 
                and actively undertake building projects related to Linux, notable 
                mentions of which include Arcadia Linux, an arch based Linux distro under 
                development and tasveer.  
            </p>
        </div>
    )
}

export default About
