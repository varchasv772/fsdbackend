//7/4/2025
import React from 'react'
import axios from 'axios'
const View = () => {
    const [users,setUsers]=useState([])
    const handleview=async ()=>{
        const res=await axios.get('http://localhost:9000/users')
        setUsers(res.data)
    }
    useEffect(()=>{
        handleview();
    },[])
  return (
    <div>
        <h1>view Registered Users</h1>
        <table>
            <thead>
                <tr>
                    <td>Id</td>
                    <td>Name</td>
                    <td>Age</td>
                </tr>
            </thead>
            <tbody>
                {
                    users.map(User =>{
                        <tr key={users.id}>
                            <td>{users.id}</td>
                            <td>{users.name}</td>
                            <td>{users.age}</td>
                        </tr>
                    })
                }
            </tbody>
        </table>
        </div>
  )
}

export default View