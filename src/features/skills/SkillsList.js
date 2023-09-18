import React from 'react'
import List from '@mui/material/List';
import SkillItem from './SkillItem';
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { Link } from "react-router-dom"


const SkillsList = ({skills}) => {

    return(
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid item xs={12} md={6}>
                <List disablePadding={false}>

                    { skills.map((skill) => {
                        return (
                            <Link to={`/skills/${skill.id}`} key={skill.id}>{skill.name}</Link>
                        )
                    })
                    }
                    
                </List>
            </Grid>
        </Box>
    );
}

export default SkillsList
