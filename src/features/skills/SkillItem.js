import React from 'react'
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { useGetSkillsQuery } from "../api/api"
import { useParams } from 'react-router-dom'


const SkillItem = () => {
  const { data, error, isLoading } = useGetSkillsQuery()
  
  const {id} = useParams()

  const selectedSkill = data.filter((item) => item.id == id)
 

  return (
    <div>
        <ListItem>
            <ListItemText primary={selectedSkill[0].name} />
        </ListItem>
      
    </div>
  )
}

export default SkillItem
