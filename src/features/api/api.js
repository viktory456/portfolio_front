import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import {useParams } from 'react-router-dom'



export const api = createApi({
    reducerPath: 'api',
    baseQuery: fetchBaseQuery({baseUrl: 'http://localhost:3000/api'}),
    tagTypes: ['Skills'],
    endpoints: builder => ({
        getSkills: builder.query({
            query: () => '/skills',
            transformResponse: responseData => {
                return responseData;
            },
            providesTags: ['Skills']
        }),
        getSelectedSkill: builder.query({
            query: (id) => `/skills/${id}`,
            transformResponse: responseData => {
                return responseData;
            },
            providesTags: ['Skills']
        })
        // addNewSkill: builder.mutation({
        //     query: newSkill => ({
        //         url: '/skills',
        //         method: 'POST',
        //         body: {
        //             ...newSkill
        //         }
        //     }),
        //     invalidatesTags: ['Skills']
        // }),
    })
})

export const {
    useGetSkillsQuery,
    useGetSelectedSkillQuery
} = api