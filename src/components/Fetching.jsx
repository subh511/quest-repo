// import { useEffect, useState } from "react";
// import axios from "axios";
// export default function Fetching() {

//   const [users, setUsers] = useState([]);
//   //const [isClicked,setIsClicked] = useState(false);

//   useEffect(() => {
//     const getUsers = async () => {
//       let response = await axios.get(`https://reqres.in/api/users`);
//       setUsers(response.data.data);
//     };
//     getUsers();
//   }, []);

// //   function smash(userId){
// //     setIsClicked(userId)
// //   }

//   return (
//     <div className="grid grid-cols-3">
//       {users.map((user) => {
//         return (
//           <div key={user.id}>
//             <ul>
//               <li>
//                 Name: {user.first_name} {user.last_name}
//               </li>
//               <li>Email: {user.email}</li>
//             </ul>
//             <div>
//               <img src={user.avatar} alt={user.first_name} />
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// }

// import { useState } from "react";
// import axios from "axios";
// import Button from "./Button";

// function Fetching() {
//   const [userData, setUserData] = useState(null);

//   const fetchUserData = async (userId) => {
//     try {
//       const response = await axios.get(`https://reqres.in/api/users/${userId}`);
//       setUserData(response.data.data); // Assuming data is wrapped inside 'data' property
//     } catch (error) {
//       console.error("Error fetching user data:", error);
//     }
//   };

//   return (
//     <div>
//       <Button fetchUserData={fetchUserData} />
//       {userData && (
//         <div>
//           <img src={userData.avatar} alt={userData.first_name} />
//           <p>
//             Name: {userData.first_name} {userData.last_name}
//           </p>
//           <p>Email: {userData.email}</p>
//         </div>
//       )}
//     </div>
//   );
// }

// export default Fetching;

import { useState } from "react";
import axios from "axios";
import Button from "./Button";
import UserDataComponent from "./UserDataComponent";

function Fetching() {
  const [users, setUsers] = useState([]);

  async function fetchData(userId) {
    let response = await axios.get(`https://reqres.in/api/users/${userId}`);
    setUsers(response.data.data);
  }

  return (
    <div>
    <Button fetchData={fetchData}/>
      {users && <UserDataComponent users={users}/>}

      <img
        src="https://pdtxar.com/wp-content/uploads/2019/04/person-placeholder.jpg"
        alt="none"
      />
    </div>
  );
}

export default Fetching;
