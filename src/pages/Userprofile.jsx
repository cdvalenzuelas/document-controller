// Dependencies
import React from 'react'

// Layouts
import LayoutOne from '../Layouts/LayoutOne'

// Componests
import Hero from '../Components/Hero'
import Project from '../Components/Project'
import Projects from '../Components/Projects'

const UserProfile = ({ data }) => (
    <LayoutOne>
        <Hero />  
        <Projects>
            {data.map(item => <Project key={item.id} src={item.download_url} author={item.author} />)}
        </Projects>          
    </LayoutOne> 
)

export default UserProfile
