import React, { useState, useEffect, useMemo } from "react";
import { Link } from 'react-router-dom';
import Item from "../Item";
// import party from '../party.jpg';
 
const Promo = () => {
  // const [users, setUser] = useState([]);
 
  // useEffect(() => {
  //   getUsers();
  // }, []);
 
  // const getUsers = async () => {
  //   const response = await axios.get("http://localhost:5000/users");
  //   setUser(response.data);
  // };
 
  // const deleteUser = async (id) => {
  //   try {
  //     await axios.delete(`http://localhost:5000/users/${id}`);
  //     getUsers();
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

   // React States
  

   const [displayData, setDisplayData] = useState(['']);

   useEffect(() => {
     fetch('http://localhost:5000/show')
       .then(response => response.json())
       .then(data => {
         // console.log('Server response:', data);
         setDisplayData(data);
       })
       .catch(error => console.error(error));
   }, []);
 
   const [partyList, setpartyList] = useState([]);
 
   const [selectedParish, setSelectedParish] = useState();
 
   // Add default value on page load
   useEffect(() => {
     setpartyList(displayData);
   }, [displayData]);
 
   
   // Function to get filtered list
   function getFilteredList() {
     // Avoid filter when selectedParish is null
     if (!selectedParish) {
       return partyList;
     }
     return partyList.filter((item) => item.status === selectedParish);
   }
   
   // Avoid duplicate function calls with useMemo
   var filteredList = useMemo(getFilteredList, [selectedParish, partyList]);
 
   function handleParishChange(event) {
     setSelectedParish(event.target.value);
   }

   
  
   const [errorMessages, setErrorMessages] = useState({});
   const [isSubmitted, setIsSubmitted] = useState(false);
 
   // User Login info
   const database = [
     {
       username: "admin",
       password: "admin"
     }
   ];
 
   const errors = {
     uname: "Incorrect Credientails",
     pass: "Incorrect Credientails"
   };
 
   const handleSubmit = (event) => {
     //Prevent page reload
     event.preventDefault();
 
     var { uname, pass } = document.forms[0];
 
     // Find user login info
     const userData = database.find((user) => user.username === uname.value);
 
     // Compare user info
     if (userData) {
       if (userData.password !== pass.value) {
         // Invalid password
         setErrorMessages({ name: "pass", message: errors.pass });
       } else {
         setIsSubmitted(true);
       }
     } else {
       // Username not found
       setErrorMessages({ name: "uname", message: errors.uname });
     }
   };
 
   // Generate JSX code for error message
   const renderErrorMessage = (name) =>
     name === errorMessages.name && (
       <div className="error">{errorMessages.message}</div>
     );
 
   // JSX code for login form
   const renderForm = (
     <div className="form">
       <form onSubmit={handleSubmit}>
         <div className="input-container">
           <label>Username </label>
           <input type="text" name="uname" required />
         </div>
         <div className="input-container">
           <label>Password </label>
           <input type="password" name="pass" required />
           {renderErrorMessage("uname")}
           {renderErrorMessage("pass")}
         </div>
         <div className="button-container">
           <input type="submit" />
         </div>
       </form>
     </div>
   );

  //  if (filteredList.length === 0) {
   return (
    <div className="app bg-[#872a87] h-screen">
      <div className="login-form">
        {/* <div className="title">Admin Dashboard</div> */}
        {isSubmitted ? 
        
        <div className="bg-[#872a87]">
      <nav className="flex justify-around sticky top-0 bg-[#872a87] p-2 drop-shadow shadow-[#872a87]">
      <div>
      <h1 className="text-[#E4E4F2] text-4xl font-black text-center">PH</h1>
          <p className="text-[#E4E4F2] text-xl font-bold text-center">Party Here</p>
      </div>
      <Link className='flex justify-center items-center' to="/"><div className='shadow font-bold text-[#7276A5] bg-[#E4E4F2] hover:bg-[#7276A5] hover:text-[#E4E4F2] hover:shadow-black p-2 rounded-xl'>Back</div></Link>
      </nav>
      {/* <section className="">
      <img className="h-[450px] w-full" src={party} alt="Party" />
      </section> */}
  
  <div className='w-40 m-4 animate-pulse shadow font-bold text-[#7276A5] bg-[#E4E4F2] hover:bg-[#7276A5] hover:text-[#E4E4F2] hover:shadow-black p-2 rounded-xl'>
<p>Total # of Orders: {filteredList.length}</p>
    </div>

      <div className="pb-10 m-5">
      <div className="filter-container pb-2 lg:flex justify-center">
      <div>
          <div className='text-[#E4E4F2] font-bold'>Filter by Parish:</div>
          <div>
            <select className='rounded-xl bg-[#7276A5] text-[#E4E4F2] font-extrabold p-1'
              name="category-list"
              id="category-list"
              onChange={handleParishChange}
            >
              <option className='font-bold' value="">All</option>
              <option className='font-bold' value="Ordered">Ordered</option>
              <option className='font-bold' value="Delivered">Delivered</option>
            </select>
          </div>
        </div>
        </div>
        
        {/* <div className="item-container bg-[#7276A5] text-[#E4E4F2] text-center font-black rounded-xl shadow-md shadow-[#E4E4F2] hover:shadow-black hover:text-[#7276A5] hover:bg-[#E4E4F2]">No data found.</div> */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
          {filteredList.map((element, index) => (
            <Item {...element} key={index} />
          ))}
          
        </div>
        </div>
  
      <footer className="fixed left-0 bottom-0 p-2 w-full flex justify-center items-center bg-[#7276A5] text-[#E4E4F2] hover:text-[#7276A5] hover:bg-[#E4E4F2]">
          <h1 className=" text-md font-serif font-semibold text-center">C0D3L1F3</h1>
      </footer>
  </div>

        : renderForm}
      </div>
    </div>
  );
// } else {
//   return (
//     <div className="bg-[#872a87]">
//     <nav className="flex justify-around sticky top-0 bg-[#872a87] p-2 drop-shadow shadow-[#872a87]">
//     <div>
//     <h1 className="text-[#E4E4F2] text-4xl font-black text-center">PH</h1>
//         <p className="text-[#E4E4F2] text-xl font-bold text-center">Party Here</p>
//     </div>
//     <Link className='flex justify-center items-center' to="/promo"><div className='shadow font-bold text-[#7276A5] bg-[#E4E4F2] hover:bg-[#7276A5] hover:text-[#E4E4F2] hover:shadow-black p-2 rounded-xl'>Promote Your Party</div></Link>
//     </nav>
//     <section className="">
//     <img className="h-[450px] w-full" src={party} alt="Party" />
//     </section>
    

//     <div className="pb-10 m-5">
//     <div className="filter-container pb-2 lg:flex justify-center">
//     <div>
//         <div className='text-[#E4E4F2] font-bold'>Filter by Parish:</div>
//         <div>
//           <select className='rounded-xl bg-[#7276A5] text-[#E4E4F2] font-extrabold p-1'
//             name="category-list"
//             id="category-list"
//             onChange={handleParishChange}
//           >
//             <option className='font-bold' value="">All</option>
//             <option className='font-bold' value="Ordered">Ordered</option>
//             <option className='font-bold' value="Delivered">Delivered</option>
//           </select>
//         </div>
//       </div>
//       </div>
      
//       <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-3">
//         {filteredList.map((element, index) => (
//           <Item {...element} key={index} />
//         ))}
        
//       </div>
//       </div>

//     <footer className="fixed left-0 bottom-0 p-2 w-full flex justify-center items-center bg-[#7276A5] text-[#E4E4F2] hover:text-[#7276A5] hover:bg-[#E4E4F2]">
//         <h1 className=" text-md font-serif font-semibold text-center">C0D3L1F3</h1>
//     </footer>
// </div>
//   );
// }
  
 
};
 
export default Promo;