import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import *as userAction from '../Store/Action/Action'
import { useDispatch } from 'react-redux'

function Home() {
    const dispatch = useDispatch();

    const [formData, setFormData] = useState({
        username: '',
        password: '',
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(userAction.addUser(formData))
        setFormData({
            username: '',
            password: '',
        })
    };
  
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="username">Username:</label>
                    <input
                        type="text"
                        id="username"
                        name="username"
                        value={formData.username}
                        onChange={handleChange}
                    />
                </div>
                <div>
                    <label htmlFor="password">Password:</label>
                    <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                    />
                </div>
                <button type="submit">Submit</button>
            </form>
            <div>
                <Link to="user">User</Link>
            </div>
        </div>
    )
}

export default Home