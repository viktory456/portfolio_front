import React from 'react'
// import ListItem from '@mui/material/ListItem';
// import ListItemIcon from '@mui/material/ListItemIcon';
// import ListItemText from '@mui/material/ListItemText';
import { useGetSkillsQuery, useDeleteSkillMutation } from "../api/api"
// import { useParams } from 'react-router-dom'


const SkillItem = ({id}) => {
  const { data, error, isLoading } = useGetSkillsQuery()
  const [deleteSkill] = useDeleteSkillMutation()
  const selectedSkill = data.filter((item) => item.id == id)
  const handleDelete = () => {
    deleteSkill({id: selectedSkill[0].id})
  }

 
  return (
    <div>
      <span>{selectedSkill[0].name}</span>
      <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default SkillItem


