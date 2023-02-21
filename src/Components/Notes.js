import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Files from "../Components/Files";
import axios from "axios";
// import Note from "./Note";
import { SearchBar } from "./SearchBar";
//! Draggables DnD
// Import drag context ftom beaiful dnd
// Dropable -- sets an area that allows for individual items to move around
// Draggable -- raps every <li> items so that they can be dragged
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import CreateNote from "./CreateNote";

const API = process.env.REACT_APP_API_URL;

export default function Notes({
  handleSubmit,
  handleTextChange,
  handleCheckChange,
}) {
  const [myNotes, setMyNotes] = useState([]);
  //! Search State - Save user Input
  const [search, setSearch] = useState(""); // represents user input in the searchBar
  // SearchBar state - matched saved quiery and saves it. 
  const [filtered, setFiltered] = useState([]);
  //* Draggging State
  const [dragNote, setDragNote] = useState(filtered);
  // useEffect is used to fetch all the notes from server ... Then stores it to 
  useEffect(() => {
    axios
      .get(`${API}/notes`)
      .then((res) => {
        setFiltered(res.data); // stores the fetched notes to be used to filter
        setMyNotes(res.data); // stores the fecthed noted to be mapped and displayed
      })
      .catch((error) => console.warn(error));
  }, []);

  return (
    <div className="Notes-Page">
      <SearchBar
        setFiltered={setFiltered}
        setSearch={setSearch}
        setMyNotes={setMyNotes}
        myNotes={myNotes}
      />
      <div className=" flex ">
        {/* <DragDropContext> */}
          {/* <Droppable droppableId="note">
            {(provided) => { */}
              {/* return ( */}
                <ul
                  className="  [&>*:nth-child(odd)]:text-zinc-500 [&>*:nth-child(even)]:text-sky-400 flex flex-wrap justify-evenly gap-2"
                  // {...provided.droppableProps}
                  // ref={provided.ref}
                >                
                  <CreateNote
                    handleSubmit={handleSubmit}
                    handleCheckChange={handleCheckChange}
                    handleTextChnage={handleTextChange}
                  />
                  {filtered.map(
                    (
                      { id, date, time, content, is_bookmark, title },
                      index
                    ) => {
                  
                      // return (
                        // <Draggable
                        //   key={id}
                        //   draggableId="notes_list"
                        //   index={index}
                        // >
                          // {(provided) => {
                            return (
                              <li
                                className="bg-sky-100 w-80 h-[10rem] pl-2 rounded-xl"
                                // {...provided.draggableProps}
                                // {...provided.dragHandleProps}
                                // ref={provided.innerRef}
                              >
                                <Link to={`/notes/${id}`}>
                                  <div className="Header">
                                    {" "}
                                    <h3>{title}</h3> <b>{date}</b> <b>{time}</b>
                                  </div>
                                  <p>{content}</p>
                                  <div className="Footer">
                                    <p>{is_bookmark ? "⭐️" : null}</p>
                                  </div>
                                </Link>
                                <Files />
                              </li>
                            );
                          // }}
                        // </Draggable>
                      // );
                    }
                  )}
                </ul>
              {/* ); */}
            {/* // }} */}
          {/* </Droppable> */}
        {/* </DragDropContext> */}
      </div>
    </div>
  );
}
