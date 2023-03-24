import React, { useState } from 'react';

function AddUser() {
  const [name, setName] = useState('');
  const [bottle, setBottle] = useState('');
  const [phone, setPhone] = useState("");
  const [status, setStatus] = useState("Ordered");

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userData = { name, bottle, phone, status };

    try {
      const response = await fetch('http://localhost:5000/order', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*' },
      body: JSON.stringify(userData)
    });

    if (!response.ok) {
        throw new Error('Failed to add user');
      }

      const data = await response.json();
      console.log('User added:', data);
    } catch (error) {
      console.error('Error adding user:', error);
    }

    // Clear form fields
    setName('');
    setBottle('');
    setPhone('');
    setStatus('');
  };

  return (
    <div className='bg-[#872a87] h-screen p-4'>
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" value={name} onChange={event => setName(event.target.value)} />
      </label>
      <label>
        Bottle:
        {/* <input type="text" value={bottle} onChange={event => setBottle(event.target.value)} /> */}
        <select value={bottle} onChange={(e) => setBottle(e.target.value)}>
                  <option value="Select size">Select size</option>
                  <option value="3oz">3oz</option>
                  <option value="4oz">4oz</option>
                </select>
      </label>
      <label>
        Phone:
        <input type="text" value={phone} onChange={event => setPhone(event.target.value)} />
      </label>
      <label>
        Status:
        {/* <input type="text" value={status} onChange={event => setStatus(event.target.value)} /> */}
        <select disabled value={status} onChange={(e) => setStatus(e.target.value)}>
                  <option value="Ordered">Ordered</option>
                  <option value="Delivered">Delivered</option>
                </select>
      </label>
      <button type="submit">Create Order</button>
    </form>
    </div>
  );
}





// import React, { useState } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
 
// const AddUser = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [status, setStatus] = useState("Ordered");
//   const navigate = useNavigate();
 
//   const saveUser = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post("http://localhost:5000/users", {
//         name,
//         phone,
//         status,
//       });
//       navigate("/");
//     } catch (error) {
//       console.log(error);
//     }
//   };
 
//   return (
//     <div className="columns mt-5">
//       <div className="column is-half">
//         <form onSubmit={saveUser}>
//           <div className="field">
//             <label className="label">Name</label>
//             <div className="control">
//               <input
//                 type="text"
//                 className="input"
//                 value={name}
//                 onChange={(e) => setName(e.target.value)}
//                 placeholder="Name"
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Phone</label>
//             <div className="control">
//               <input
//                 type=""
//                 className="input"
//                 value={phone}
//                 onChange={(e) => setPhone(e.target.value)}
//                 placeholder="phone"
//               />
//             </div>
//           </div>
//           <div className="field">
//             <label className="label">Status</label>
//             <div className="control">
//               <div className="select is-fullwidth">
//                 <select disabled
//                   value={status}
//                   onChange={(e) => setStatus(e.target.value)}
//                 >
//                   <option value="Ordered">Ordered</option>
//                   <option value="Delivered">Delivered</option>
//                 </select>
//               </div>
//             </div>
//           </div>
//           <div className="field">
//             <div className="control">
//               <button type="submit" className="button is-success">
//                 Save
//               </button>
//             </div>
//           </div>
//         </form>
//       </div>
//     </div>
//   );
// };
 
export default AddUser;