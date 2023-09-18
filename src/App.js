import SkillsList from './features/skills/SkillsList'
import { useGetSkillsQuery } from "./features/api/api"
import { Routes, Route, Navigate, useParams } from 'react-router-dom'
import SkillItem from './features/skills/SkillItem';
import Layout from './components/Layout';
import Navigation from './components/Navigation'
import { useGetSelectedSkillQuery } from './features/api/api';

export default function App() {

  const { data, error, isLoading } = useGetSkillsQuery()
  // const {selectedSkill} = useGetSelectedSkillQuery()
  // console.log(selectedSkill)

   return (
    <>
      <Navigation />
      <Routes>
        <Route path="/" element={<Layout />}>
        <Route index element={ <p>Main page</p> } />


        <Route path="/skills" element={isLoading ? <p>Loading...</p> : <SkillsList skills={data}/>} />
            <Route path="/skills/:id" element={<SkillItem />} />
        </Route>
      </Routes>
  </>
  );
}
