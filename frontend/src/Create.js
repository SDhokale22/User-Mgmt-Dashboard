import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from './UserReducer';
import { useNavigate } from 'react-router-dom';

const Create = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [department, setDepartment] = useState('');
    const navigate = useNavigate();

    const users = useSelector((state) => state.users);

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(addUser(
            {
            id: users[users.length - 1].id + 1,
            firstName,
            lastName,
            email, 
            department
        }))
        navigate('/');
    }

  return (
    <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
      <h3>Add New User</h3>
        <form onSubmit={handleSubmit}>
            <div className='mt-2'>
                <label htmlFor='name'>FirstName</label>
                <input 
                    type='text' 
                    name='name' 
                    className='form-control' 
                    placeholder='Enter Firstname'
                    onChange={e => setFirstName(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label htmlFor='name'>LastName</label>
                <input 
                    type='text' 
                    name='name' 
                    className='form-control' 
                    placeholder='Enter Lastname' 
                    onChange={e => setLastName(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label htmlFor='email'>Email</label>
                <input 
                    type='email' 
                    name='email' 
                    className='form-control'
                    placeholder='Enter Email'
                    onChange={e => setEmail(e.target.value)}
                />
            </div>
            <div className='mt-2'>
                <label htmlFor='name'>Department</label>
                <input 
                    type='text' 
                    name='name' 
                    className='form-control' 
                    placeholder='Enter Department'
                    onChange={e => setDepartment(e.target.value)}
                />
            </div>
            <br />
            <button className='btn btn-info'>Submit</button>
        </form>
      </div>
    </div>
  )
}

export default Create
