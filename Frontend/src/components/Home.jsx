// import React, { useState } from "react";

// const Home = () => {
//   const [groups, setGroups] = useState([]);

//   const addGroup = () => {
//     setGroups([
//       ...groups,
//       {
//         id: Date.now(),
//         name: "Group",
//         items: [],
//         newItem: ""
//       }
//     ]);
//   };

//   const updateGroupName = (id, value) => {
//     setGroups(groups.map(g =>
//       g.id === id ? { ...g, name: value } : g
//     ));
//   };

//   const updateNewItem = (id, value) => {
//     setGroups(groups.map(g =>
//       g.id === id ? { ...g, newItem: value } : g
//     ));
//   };

//   const addItem = (id) => {
//     setGroups(groups.map(g =>
//       g.id === id && g.newItem.trim() !== ""
//         ? { ...g, items: [...g.items, g.newItem], newItem: "" }
//         : g
//     ));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 pb-24">
//       <h1 className="text-2xl font-bold mb-4">🛒 Grocery Manager</h1>

//       <div className="space-y-4">
//         {groups.map(group => (
//           <div
//             key={group.id}
//             className="bg-white rounded-xl shadow p-4"
//           >
//             <input
//               className="text-lg font-semibold w-full border-b mb-3 focus:outline-none"
//               value={group.name}
//               onChange={(e) =>
//                 updateGroupName(group.id, e.target.value)
//               }
//             />

//             <ul className="space-y-1 mb-3">
//               {group.items.map((item, index) => (
//                 <li
//                   key={index}
//                   className="px-2 py-1 bg-gray-50 rounded"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Add item"
//                 value={group.newItem}
//                 onChange={(e) =>
//                   updateNewItem(group.id, e.target.value)
//                 }
//                 className="flex-1 border rounded px-3 py-2 focus:outline-none"
//               />
//               <button
//                 onClick={() => addItem(group.id)}
//                 className="bg-green-500 text-white px-4 rounded hover:bg-green-600"
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Floating Add Group Button */}
//       <button
//         onClick={addGroup}
//         className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-white text-3xl flex items-center justify-center shadow-lg hover:bg-green-600"
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default Home;



// import React, { useState } from "react";

// const Home = () => {
//   const [groups, setGroups] = useState([]);

//   const addGroup = () => {
//     setGroups([
//       ...groups,
//       {
//         id: Date.now(),
//         name: "Group",
//         items: [],
//         newItem: ""
//       }
//     ]);
//   };

//   const updateGroupName = (id, value) => {
//     setGroups(groups.map(g =>
//       g.id === id ? { ...g, name: value } : g
//     ));
//   };

//   const updateNewItem = (id, value) => {
//     setGroups(groups.map(g =>
//       g.id === id ? { ...g, newItem: value } : g
//     ));
//   };

//   const addItem = (id) => {
//     setGroups(groups.map(g =>
//       g.id === id && g.newItem.trim() !== ""
//         ? { ...g, items: [...g.items, g.newItem], newItem: "" }
//         : g
//     ));
//   };

//   return (
//     <div className="min-h-screen bg-gray-100 p-4 pb-24">
//       <h1 className="text-2xl font-bold mb-4">🛒 Grocery Manager</h1>

//       {/* <div className="space-y-4"> */}
//       <div className="flex gap-5 flex-wrap">
//         {groups.map(group => (
//           <div
//             key={group.id}
//             className="bg-white rounded-xl shadow p-4"
//           >
//             <input
//               className="text-lg font-semibold w-full border-b mb-3 focus:outline-none"
//               value={group.name}
//               onChange={(e) =>
//                 updateGroupName(group.id, e.target.value)
//               }
//             />

//             <ul className="space-y-1 mb-3">
//               {group.items.map((item, index) => (
//                 <li
//                   key={index}
//                   className="px-2 py-1 bg-gray-50 rounded"
//                 >
//                   {item}
//                 </li>
//               ))}
//             </ul>

//             <div className="flex gap-2">
//               <input
//                 type="text"
//                 placeholder="Add item"
//                 value={group.newItem}
//                 onChange={(e) =>
//                   updateNewItem(group.id, e.target.value)
//                 }
//                 className="flex-1 border rounded px-3 py-2 focus:outline-none"
//               />
//               <button
//                 onClick={() => addItem(group.id)}
//                 className="bg-green-500 text-white px-4 rounded hover:bg-green-600"
//               >
//                 Add
//               </button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Floating Add Group Button */}
//       <button
//         onClick={addGroup}
//         className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-green-500 text-white text-3xl flex items-center justify-center shadow-lg hover:bg-green-600"
//       >
//         +
//       </button>
//     </div>
//   );
// };

// export default Home;


// import React, { useState } from "react";

// const Home = () => {
//   const [groups, setGroups] = useState([]);
//   const [focusedGroupId, setFocusedGroupId] = useState(null);

//   const addGroup = () => {
//     setGroups([
//       ...groups,
//       {
//         id: Date.now(),
//         name: "Group",
//         items: [],
//         newItem: ""
//       }
//     ]);
//   };

//   const updateGroupName = (id, value) => {
//     setGroups(groups.map(g =>
//       g.id === id ? { ...g, name: value } : g
//     ));
//   };

//   const updateNewItem = (id, value) => {
//     setGroups(groups.map(g =>
//       g.id === id ? { ...g, newItem: value } : g
//     ));
//   };

//   const addItem = (id) => {
//     setGroups(groups.map(g =>
//       g.id === id && g.newItem.trim()
//         ? { ...g, items: [...g.items, g.newItem], newItem: "" }
//         : g
//     ));
//   };

//   const toggleFocus = (id) => {
//     setFocusedGroupId(prev => (prev === id ? null : id));
//   };

//   return (
//     <div className="min-h-screen bg-gradient-to-br from-emerald-50 to-slate-100 p-6">
//       <h1 className="text-2xl font-semibold mb-6 text-slate-800">
//         Grocery Manager
//       </h1>

//       {/* Background blur overlay */}
//       {focusedGroupId && (
//         <div className="fixed inset-0 bg-black/20 backdrop-blur-sm z-10" />
//       )}

//       <div className="relative flex gap-6 flex-wrap">
//         {groups.map(group => {
//           const isFocused = focusedGroupId === group.id;

//           return (
//             <div
//               key={group.id}
//               className={`
//                 transition-all duration-300 ease-in-out
//                 ${isFocused
//                   ? "fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] max-w-2xl scale-105"
//                   : focusedGroupId
//                   ? "blur-sm opacity-60 pointer-events-none"
//                   : "w-72"
//                 }
//               `}
//             >
//               <div className="bg-white/90 backdrop-blur rounded-2xl shadow-lg p-5 border border-emerald-100">
                
//                 {/* Header */}
//                 <div className="flex items-center justify-between mb-4">
//                   <input
//                     className="text-lg font-semibold text-slate-700 bg-transparent border-b border-slate-300 focus:outline-none focus:border-emerald-400"
//                     value={group.name}
//                     onChange={(e) =>
//                       updateGroupName(group.id, e.target.value)
//                     }
//                   />

//                   <button
//                     onClick={() => toggleFocus(group.id)}
//                     className="text-emerald-600 hover:text-emerald-800 text-xl"
//                     title="Focus"
//                   >
//                     {isFocused ? "✕" : "⤢"}
//                   </button>
//                 </div>

//                 {/* Items */}
//                 <ul className="space-y-2 mb-4">
//                   {group.items.map((item, index) => (
//                     <li
//                       key={index}
//                       className="px-3 py-2 rounded-lg bg-emerald-50 text-slate-700"
//                     >
//                       {item}
//                     </li>
//                   ))}
//                 </ul>

//                 {/* Add item */}
//                 <div className="flex gap-2">
//                   <input
//                     type="text"
//                     placeholder="Add item"
//                     value={group.newItem}
//                     onChange={(e) =>
//                       updateNewItem(group.id, e.target.value)
//                     }
//                     className="flex-1 rounded-lg border border-slate-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-emerald-400"
//                   />
//                   <button
//                     onClick={() => addItem(group.id)}
//                     className="bg-emerald-500 text-white px-4 rounded-lg hover:bg-emerald-600 transition"
//                   >
//                     Add
//                   </button>
//                 </div>
//               </div>
//             </div>
//           );
//         })}
//       </div>

//       {/* Add Group Button */}
//       {!focusedGroupId && (
//         <button
//           onClick={addGroup}
//           className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-emerald-500 text-white text-3xl shadow-lg hover:bg-emerald-600"
//         >
//           +
//         </button>
//       )}
//     </div>
//   );
// };

// export default Home;



import React, { useEffect, useState } from "react";
import { API_Base_URL } from "../config/config";

const Home = () => {
  const [groups, setGroups] = useState([]);
  // const [groupId, setGroupId] = useState([])
  const [focusedGroupId, setFocusedGroupId] = useState(null);
  const [newItemName, setNewItemName] = useState("");

  const addGroup = () => {
    setGroups([
      ...groups,
      {
        id: Date.now(),
        name: "Group",
        items: [],
        newItem: ""
      }
    ]);
  };

  useEffect(() => {
    
    fetch(`${API_Base_URL}/group/getAllGroup`, {
      method:"GET",
      headers:{
        'Content-Type': 'application/json',
        'authorization':"Bearer "+ localStorage.getItem("access_token"),
      }
    })
    .then((res)=>res.json())
    .then((data)=>{
      console.log(data)
      const grouped = {};
      const formattedGroups = data.data.map((group) => ({
        id: group._id,
        name: group.name,
        items: group.groceries || [],
        newItem: "",
      }));

      setGroups(formattedGroups);
    })
  }, [setGroups])

  function addGroup2(){
    fetch(`${API_Base_URL}/group/add`, {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'authorization':"Bearer "+ localStorage.getItem("access_token"),
      },
      body:
        JSON.stringify({
          name:"Group 2"
        })
      }
    )
    .then((res)=>res.json())
    .then((data) => {
      const newGroup = {
        id: data.data._id,
        name: data.data.name,
        items: data.data.groceries || [],
        newItem: "",
      };
      setGroups((prev) => [...prev, newGroup]);
    })
  }
  
  function addItem(groupId) {
    fetch(`${API_Base_URL}/grocery/add`, {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'authorization':"Bearer "+ localStorage.getItem("access_token"),
      },
      body:
        JSON.stringify({
          item:newItemName,
          quantity:2,
          units:"kg",
          description:"description",
          group:groupId,
        })
      }
    )
    .then((res)=>res.json())
    .then((data) => {
      const newItem = data.data;

      setGroups(prev =>
        prev.map(group =>
          group.id === groupId
            ? {
                ...group,
                items: [...group.items, newItem],
                newItem: "", // clear input
              }
            : group
        )
      );
      setNewItemName("");
    })

  }
  

  const updateGroupName = (id, value) => {
    setGroups(groups.map(g =>
      g.id === id ? { ...g, name: value } : g
    ));
  };

  // const updateNewItem = (id, value) => {
  //   setGroups(groups.map(g =>
  //     g.id === id ? { ...g, newItem: value } : g
  //   ));
  // };

  // const addItem = (id) => {
  //   setGroups(groups.map(g =>
  //     g.id === id && g.newItem.trim()
  //       ? { ...g, items: [...g.items, g.newItem], newItem: "" }
  //       : g
  //   ));
  // };

  const toggleFocus = (id) => {
    setFocusedGroupId(prev => (prev === id ? null : id));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-stone-100 to-slate-200 p-6">
      <h1 className="text-2xl font-semibold mb-6 text-slate-800">
        Grocery Manager
      </h1>

      {/* Blur Overlay */}
      {focusedGroupId && (
        <div className="fixed inset-0 bg-black/30 backdrop-blur-sm z-10" />
      )}

      <div className="relative flex flex-wrap gap-6">
        {groups.map(group => {
          const isFocused = focusedGroupId === group.id;

          return (
            <div
              key={group.id}
              className={`
                transition-all duration-300 ease-in-out
                ${isFocused
                  ? "fixed z-20 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                  : focusedGroupId
                  ? "blur-sm opacity-60 pointer-events-none"
                  : ""
                }
              `}
            >
              {/* Card */}
              <div
                className={`
                  bg-white/90 backdrop-blur
                  rounded-2xl shadow-xl border border-slate-200
                  w-80 h-[420px]
                  flex flex-col
                  ${isFocused ? "scale-105" : ""}
                `}
              >
                {/* Header */}
                <div className="flex items-center justify-between px-5 py-4 border-b border-slate-200">
                  <input
                    className="text-lg font-medium text-slate-700 bg-transparent border-b border-transparent focus:border-teal-500 focus:outline-none"
                    value={group.name}
                    onChange={(e) =>
                      updateGroupName(group.id, e.target.value)
                    }
                  />

                  <button
                    onClick={() => toggleFocus(group.id)}
                    className="text-slate-500 hover:text-slate-700 text-lg"
                    title="Focus"
                  >
                    {isFocused ? "✕" : "⤢"}
                  </button>
                </div>

                {/* Items (Scrollable) */}
                {/* <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
                  {group.items.map((item, index) => (
                    <div
                    key={index}
                    className="px-3 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm"
                    >
                    {item}
                    </div>
                    ))}
                    </div> */}

                {/* Items (Scrollable) */}
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2">
                {group.items.map((item) => (
                  <div
                    key={item._id}
                    className="px-3 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm"
                  >
                    <div className="font-medium">{item.item}</div>
                    <div className="text-xs text-slate-500">
                      {item.quantity} {item.units}
                    </div>
                  </div>
                ))}
                </div> 

                {/* Add Item (Fixed Bottom) */}
                <div className="px-5 py-4 border-t border-slate-200 flex gap-2">
                  <input
                    type="text"
                    placeholder="Add item"
                    // value={group.newItemName}
                    value={newItemName}
                    // onChange={(e) =>
                    //   updateNewItem(group.id, e.target.value)
                    // }
                    onChange={(e) =>
                      setNewItemName(e.target.value)
                    }
                    onKeyDown={(e) => {
                      if (e.key === "Enter") {
                        e.preventDefault();
                        setNewItemName("")
                        addItem(group.id);
                      }
                    }}
                    className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-teal-400"
                  />
                  <button
                    onClick={() => addItem(group.id)}
                    className="bg-teal-500 text-white px-4 rounded-lg hover:bg-teal-600 transition"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Add Group Button */}
      {!focusedGroupId && (
        <button
          onClick={addGroup2}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-teal-500 text-white text-3xl shadow-lg hover:bg-teal-600"
        >
          +
        </button>
      )}
    </div>
  );
};

export default Home;
