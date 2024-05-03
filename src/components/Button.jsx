// import React from 'react'

export default function Button({fetchData}) {
  return (
    <div>
    <button className="px-4 rounded-md p-4 mx-4 mt-4 bg-slate-300 font-bold" onClick={() => fetchData(1)}>User 1</button>
    <button className="px-4 rounded-md p-4 mx-4 mt-4 bg-slate-300 font-bold" onClick={() => fetchData(2)}>User 2</button>
    <button className="px-4 rounded-md p-4 mx-4 mt-4 bg-slate-300 font-bold" onClick={() => fetchData(3)}>User 3</button>
    <button className="px-4 rounded-md p-4 mx-4 mt-4 bg-slate-300 font-bold" onClick={() => fetchData(4)}>User 4</button>
    <button className="px-4 rounded-md p-4 mx-4 mt-4 bg-slate-300 font-bold" onClick={() => alert("No Data Found!")}>User 5</button>
    </div>
  )
}
