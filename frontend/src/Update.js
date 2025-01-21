import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { updateUser } from './UserReducer';

const Update = () => {
    const {id} = useParams();
    const users = useSelector((state) => state.users);
    const existingUser = users.filter(f => f.id == id);
    const {firstName, lastName, email, department} = existingUser[0];

    const [ufName, setFirstName] = useState(firstName);
    const [ulName, setLastName] = useState(lastName);
    const [uemail, setEmail] = useState(email);
    const [udepartment, setDepartment] = useState(department);

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleUpdate = (e) => {
      e.preventDefault();
      dispatch(updateUser({
        id: id,
        firstName: ufName,
        lastName: ulName,
        email: uemail,
        department: udepartment,
      }))
      navigate('/');
    }

  return (
    <div>
      <div className='d-flex w-100 vh-100 justify-content-center align-items-center'>
      <div className='w-50 border bg-secondary text-white p-5'>
      <h3>Update User</h3>
        <form onSubmit={handleUpdate}>
            <div className='mt-2'>
                <label htmlFor='name'>FirstName</label>
                <input 
                    type='text' 
                    name='name' 
                    className='form-control' 
                    placeholder='Enter Firstname'
                    value={ufName}
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
                    value={ulName}
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
                    value={uemail}
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
                    value={udepartment}
                    onChange={e => setDepartment(e.target.value)}
                />
            </div>
            <br />
            <button className='btn btn-info'>Update</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Update
