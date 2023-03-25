import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Files from "../Components/Files";
import axios from "axios";
import { SearchBar } from "./SearchBar";
import CreateNote from "./CreateNote";


const API = process.env.REACT_APP_API_URL;

export default function Notes({
  handleSubmit,
  handleTextChange,
  handleCheckChange,
p
}) {
  const [myNotes, setMyNotes] = useState([]);
  const [search, setSearch] = useState("");
  const [filtered, setFiltered] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}/notes`)
      .then((res) => {
        setFiltered(res.data);
        setMyNotes(res.data);
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
        <ul className="  [&>*:nth-child(odd)]:text-zinc-500 [&>*:nth-child(even)]:text-sky-400 flex flex-wrap justify-evenly gap-2">
          <CreateNote
            handleSubmit={handleSubmit}
            handleCheckChange={handleCheckChange}
            handleTextChnage={handleTextChange}
          />
          {filtered.map(
            ({ id, date, time, content, is_bookmark, title }, index) => {
              return (
                <li key={id} className="bg-sky-100 w-80 min-h-[10rem] pl-2 rounded-xl bg-gradient-to-br from-sky-100 via-sky-50 to-sky-200 p-6">
                  <Link to={`/notes/${id}`}>
                    <div className="Header">
                      <h3>{title}</h3> <b>{date}</b> <b>{time}</b>
                    </div>
                    <p>{content}</p>
                  </Link>
                    <div className="Footer">
                      <p>{is_bookmark ? "⭐️" : null}</p>
                    </div>
                    <Files />
                  </li>
              );
            }
          )}
        </ul>
      </div>
    </div>
  );
}
