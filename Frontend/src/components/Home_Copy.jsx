import React, { useEffect, useState } from "react";
import { API_Base_URL } from "../config/config";

const Home_Copy = () => {
  const [groups, setGroups] = useState([]);
  const [focusedGroupId, setFocusedGroupId] = useState(null);
  const [newItemName, setNewItemName] = useState("");
  const [groupIdOfAddingItem, setGroupIdOfAddingItem] = useState("")

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

  function addGroup(){
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
    const group = groups.find(g => g.id === groupId);
    if (!group || !group.newItem.trim()) {
        return;
    }
    fetch(`${API_Base_URL}/grocery/add`, {
      method:"POST",
      headers:{
        'Content-Type': 'application/json',
        'authorization':"Bearer "+ localStorage.getItem("access_token"),
      },
      body:
        JSON.stringify({
          item:group.newItem,
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
        prev.map(g =>
            g.id === groupId
            ? {
                ...g,
                items: [...g.items, data.data],
                newItem: "", // ✅ clears only this input
                }
            : g
        )
    );
    setNewItemName("");
    })
  }
  
  function togglePicked(itemId, groupId) {
    fetch(`${API_Base_URL}/grocery/togglePicked`, {
      method:"PUT",
      headers:{
        'Content-Type': 'application/json',
        'authorization':"Bearer "+ localStorage.getItem("access_token"),
      },
      body:
        // JSON.stringify({
        //     id:itemId
        // })
        JSON.stringify({
            "id":itemId
        })
      }
    )
    .then((res)=>res.json())
    .then((data) => {
      console.log(data.data)
      const updatedItem = data.data;

    setGroups(prev =>
        prev.map(g =>
            g._id === groupId
            ? {
                ...g,
                // items: [...g.items, data.data],
                items: g.items.map((i)=>
                  i._id === itemId ? 
                    {...i, picked:updatedItem.picked}
                  : i
                ),
                // newItem: "",
                }
            : g
        )
    );
    // setNewItemName("");
    })
    .catch((err)=>{
        console.log(err.message)
    })
  }

  

  const updateGroupName = (id, value) => {
    setGroups(groups.map(g =>
      g.id === id ? { ...g, name: value } : g
    ));
  };

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
                <div className="flex-1 overflow-y-auto px-5 py-4 space-y-2"
                >
                {group.items.map((item) => (
                    <div
                    onClick={()=>togglePicked(item._id, group._id)}
                    key={item._id}
                    // className={`px-3 py-2 rounded-lg bg-slate-100 text-slate-700 text-sm line-through`}
                    className={`px-3 py-2 rounded-lg ${item.picked ? "bg-slate-500 line-through text-white" : "bg-slate-100 text-slate-700"}  text-sm`}
                  >
                    <div className="font-medium">{item.item}</div>
                    <div className={`text-xs ${ item.picked ? "text-white" : "text-slate-500"}`}>
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
                        value={group.newItem}
                        onChange={(e) =>
                            setGroups(prev =>
                            prev.map(g =>
                                g.id === group.id
                                ? { ...g, newItem: e.target.value }
                                : g
                            )
                            )
                        }
                        onKeyDown={(e) => {
                            if (e.key === "Enter") {
                            e.preventDefault();
                            addItem(group.id);
                            }
                        }}
                        className="flex-1 rounded-lg border border-slate-300 px-3 py-2 text-sm"
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
          onClick={addGroup}
          className="fixed bottom-6 right-6 w-14 h-14 rounded-full bg-teal-500 text-white text-3xl shadow-lg hover:bg-teal-600"
        >
          +
        </button>
      )}
    </div>
  );
};

export default Home_Copy;
