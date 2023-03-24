import '../App';
import React from "react";
// import { useNavigate } from 'react-router-dom';
// import axios from 'axios';

function Dashboard() {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = (event) => {
//     event.preventDefault();

//     axios.post('http://localhost:5000/login', {
//       username: username,
//       password: password
//     })
//     .then(response => {
//       // redirect to home page on successful login
//       navigate('/');
//     })
//     .catch(error => {
//       // handle login error
//     });
//   }

  return (
<>
<div className='flex'>
    <div className='w-1/2 h-screen bg-green-500 p-2'>
   Welcome Promote Your Party Here!!!
    </div>
    
    <div className='w-1/2 h-screen bg-red-500 p-2'>
    PARTY HERE PARTY THERE 
    </div>

</div>
</>
  );
}

export default Dashboard;
