import React from 'react';
import { useSelector } from 'react-redux'

function User() {
    
    const users = useSelector((state) => {
       
        return state.users
    })
    
    return (
        <div>
            {
                users.map((item, i) => {
                    return (
                        <div key={i}>
                            <h1>{item.username}</h1>
                            <h1>{item.password}</h1>
                        </div>
                    )
                })
            }
        </div>
    )
}

export default User