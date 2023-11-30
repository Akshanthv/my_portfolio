import React from "react";
import Intro from "../../components/intro.component";
import Skills from "../../components/skills.component";
import Projects from "../../components/projects.component";
import Contact from "../../components/contact.component";


const Home = () => {
    return (
        <div> 
        <Intro />
        <Skills />
        <Projects />
        <Contact />
        </div>

    )
}

export default Home;