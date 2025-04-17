import React from 'react'
import axios from 'axios'   // with this we connect frontend and backend
const Register = () => {
    const handleregister=async (e)=>{   // we make function handleregister 
        e.preventDefault();
        const name=e.target.name.value;
        const age=e.target.age.value;
        const user={name,age}
        await axios.post('https://fsdbackend-1-l2ul.onrender.com/users')   // ba
        alert('user register')
    }
  return (
    <div>
        <form onSubmit={handleregister}>   
            <label>
                Name:
                <input type="text" name="name" required/>
            </label>
            <label>
                Age:
                <input type="text" name="age" required/>
            </label>
            <button type='submit'>Register</button>
        </form>

    </div>
  )
}

export default Register