import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { createSelector } from "@reduxjs/toolkit"


export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    tagTypes: ['Skills'],
    endpoints: builder => ({
        getSkills: builder.query({
            query: () => '/skills',
            // transformResponse: responseData => {
            //     const loadedSkills = responseData.map(skill => {
            //         if (!skill?.createdAt) skill.createdAt = new Date()
            //         return skill;
            //     });
            //     return loadedSkills
            // },
            providesTags: ['Skills'],
            // providesTags: (result, error, arg) => [
            //     ...result.map(({ id }) => ({ type: 'Skills', id }))
            // ]
        }),
        addNewSkill: builder.mutation({
            query: (newSkill) => ({
                url: '/skills',
                method: 'POST',
                body: newSkill
            }),
            // invalidatesTags: [
            //     { type: 'Skills'}
            // ]
            invalidatesTags: ['Skills'],
        }),
        deleteSkill: builder.mutation({
           query: ({id}) => ({
                url: '/skills',
                method: 'DELETE',
                body: {id}
            }),
            // invalidatesTags: (result, error, arg) => [
            //     { type: 'Skills', id: arg.id }
            // ]
            invalidatesTags: ['Skills'],
        })
    })
})
export const {
    useGetSkillsQuery,
    useAddNewSkillMutation,
    useDeleteSkillMutation
} = api


