import React from 'react'
import { useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { useFriendRequest } from '../hooks/useFriendRequest'

export const ProfilePeople = () => {

    const {loadInfoUser,resultsPeople} = useFriendRequest()
    const {id_people} = useParams()

    useEffect(() => {
        loadInfoUser({id_user:id_people})
    }, []);

    console.log(resultsPeople)

  return (
    <div className='w-full h-full'>
        {
            resultsPeople && <div>
                <p>{resultsPeople.name}</p>
            </div>

        }
    </div>
  )
}
