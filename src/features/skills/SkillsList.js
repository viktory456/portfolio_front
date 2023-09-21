import React, {useEffect, useState} from 'react'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
// import ListItemText from '@mui/material/ListItemText';
import SkillItem from './SkillItem'
import Box from '@mui/material/Box'
import Grid from '@mui/material/Grid'
import { useGetSkillsQuery, useAddNewSkillMutation } from '../api/api'



const SkillsList = () => {

    const [newSkill, setNewSkill] = useState('')
    const [category, setCategory] = useState('Soft skills') // to pull out categories from api?
    const [level, setLevel] = useState('Proficient') // to pull out levels from api?
    const { data: skills, isLoading, isSuccess, isError, error } = useGetSkillsQuery()
    const [addNewSkill] = useAddNewSkillMutation()

    useEffect(()=>{
        console.log('skills')
    }, [skills])

    const handleSubmit = (e) => {
        e.preventDefault();
        let newId = skills.length
        addNewSkill({ name: newSkill, category: category, level: level, id: ++newId, createdAt: new Date(), updatedAt: new Date() })
        setNewSkill('')
    }

    const newItemSection =
        <form onSubmit={handleSubmit}>
            <label htmlFor="new-skill">Add a new skill</label>
            <div className="new-skill">
                <input
                    type="text"
                    id="new-skill"
                    value={newSkill}
                    onChange={(e) => setNewSkill(e.target.value)}
                    placeholder="Enter new skill"
                />
                <select id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="soft_skills">Soft skills</option>
                    <option value="hard_skills">Hard skills</option>
                </select> 
                <select id="level" value={level} onChange={(e) => setLevel(e.target.value)}>
                    <option value="beginner">Beginner</option>
                    <option value="competent">Competent</option>
                    <option value="advanced">Advanced</option>
                    <option value="proficient">Proficient</option>
                </select> 
            </div>
            <button className="submit"> Add </button>
        </form>

let content;
if (isLoading) {
    content = <p>"Loading..."</p>;
} else if (isSuccess) {
    content = skills.map((skill) => {
        return (
            <ListItem key={skill.id}>
                <SkillItem id={skill.id} />
            </ListItem>
        )
    })
} else if (isError) {
    content = <p>{error}</p>;
}

        // const skillsRendered = skills.map((skill) => {
        //     // console.log(skill)
        //     return (
        //         <ListItem key={skill.id}>
        //             <SkillItem id={skill.id} />
        //         </ListItem>
        //     )
        // })
        
    return(
        <Box sx={{ flexGrow: 1, maxWidth: 752 }}>
            <Grid item xs={12} md={6}>
                <List disablePadding={false}>
                    {content}
                    {newItemSection}
                 </List>
            </Grid>
        </Box>
    );
}

export default SkillsList







