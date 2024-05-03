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

function Fetching() {
  const [users, setUsers] = useState([]);

    async function fetchData(userId) {
      let response = await axios.get(`https://reqres.in/api/users/${userId}`);
      setUsers(response.data.data);
    }

  return (
    <div>
    <button className="px-4 rounded-md p-4 mx-4 mt-4 bg-slate-300 font-bold" onClick={()=>fetchData(1)}>1</button>
    <button className="px-4 rounded-md p-4 mx-4 mt-4 bg-slate-300 font-bold" onClick={()=>fetchData(2)}>2</button>
    <button className="px-4 rounded-md p-4 mx-4 mt-4 bg-slate-300 font-bold" onClick={()=>fetchData(3)}>3</button>
    <button className="px-4 rounded-md p-4 mx-4 mt-4 bg-slate-300 font-bold" onClick={()=>fetchData(4)}>4</button>
      {users && (
          <div key={users.id}>
            <ul>
              <li>Email: {users.email}</li>
              <li>
                Name: {users.first_name} {users.last_name}
              </li>
            </ul>
            <div>
              <img src={users.avatar} alt={users.first_name} />
            </div>
          </div>
        )
      }
    </div>
  );
}

export default Fetching;
