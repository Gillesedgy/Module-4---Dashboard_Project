// TODO: SOUND
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";

//* REACT-Icon
import { ImCheckmark, ImCross } from "react-icons/im";
//
const API = process.env.REACT_APP_API_URL;

export default function EditNote() {
  const { id } = useParams();
  let navigate = useNavigate();
  const [note, setEdit] = useState({
    title: "",
    content: "",
    date: "",
    time: "",
    is_bookmark: false,
  });

  //Update a NOTE
  const updateNote = (updatedNote) => {
    axios
      .put(`${API}/notes/${id}`, updatedNote)
      .then(
        (response) => {
          navigate(`/notes/${id}`);
        },
        (error) => console.log(error)
      )
      .catch((error) => console.warn(error));
  };

  //TextChange
  const handleTextChange = (e) => {
    setEdit({ ...note, [e.target.id]: e.target.value });
  };
  // CheckBox
  const handleCheckChange = () => {
    setEdit({ ...note, is_bookmark: !note.is_bookmark });
  };

  useEffect(() => {
    axios.get(`${API}/notes/${id}`).then(
      (response) => setEdit(response.data),
      (error) => navigate("/not-found")
    );
  }, [id, navigate]);

  // Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    updateNote(note, id);
  };
  return (
    <div className=" ">
      <form
        className="bg-emerald-400 h-[25rem] m-4 p-6 "
        onSubmit={handleSubmit}
      >
        <button
          className="  bg-emerald-800 hover:bg-emerald-700 p-2 rounded-md mb-2 ml-[90%]"
          onClick={() => navigate(`/notes/${id}`)}
        >
          <ImCross />
        </button>
        <br />
        <input
          className=" font-bold bg-emerald-400 leading-tight focus:outline-none"
          type="text"
          value={note.title}
          id="title"
          placeholder="Click to add title"
          onChange={handleTextChange}
        />
        <textarea
          className=" bg-emerald-400 w-full focus:outline-none resize-none"
          id="content"
          value={note.content}
          placeholder="Click to add text"
          onChange={handleTextChange}
        ></textarea>
        <input
          className=" bg-emerald-400  focus:outline-none hover:cursor-pointer "
          type="date"
          id="date"
          value={note.date}
          placeholder="Click to add date"
          onChange={handleTextChange}
          required
        />{" "}
        <input
          className=" bg-emerald-400 focus:outline-none hover:cursor-pointer "
          type="time"
          id="time"
          value={note.time}
          placeholder="Click to add time"
          onChange={handleTextChange}
          required
        />
        <label className="hover:cursor-pointer" htmlFor="is_bookmark">
          Save
        </label>
        <input
          className="bg-emerald-400 hover:cursor-pointer "
          type="checkbox"
          id="is_bookmark"
          checked={note.is_bookmark}
          onChange={handleCheckChange}
        />
        <button
          className=" bg-emerald-800 hover:bg-emerald-700 p-1  rounded-md"
          type="submit"
        >
          Done
        </button>
      </form>
    </div>
  );
}
