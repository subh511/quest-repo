//import React from 'react'

export default function UserDataComponent({users}) {
  return (
    <div>
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
    </div>
  );
}
