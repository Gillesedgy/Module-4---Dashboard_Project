import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { Howl } from "howler";
import { ImPencil2 } from "react-icons/im";
import { BsTrash } from "react-icons/bs";
//TODO: Import DragDrop WHen Added
import trash from ".././assets/trash.mp3";
const API = process.env.REACT_APP_API_URL;
function NoteDetails({ files, handleDelete }) {
  const playMySound = (src) => {
    const mySound = new Howl({
      src,
      volume: 0.25,
      html5: true,
    });
    mySound.play();
  };

  const [note, setNote] = useState([]);
  let { id } = useParams();
  let navigate = useNavigate();

  useEffect(() => {
    axios
      .get(`${API}/notes/${id}`)
      .then((response) => {
        setNote(response.data);
      })
      .catch((c) => {
        console.warn("catch", c);
      });
  }, [id]);

  // DELETE
  const deleteNote = () => {
    axios
      .delete(`${API}/notes/${id}`)
      .then(
        () => {
          setTimeout(() => {
            navigate(`/notes`);
          }, 1000);
        },
        (error) => console.error(error)
      )
      .catch((e) => console.warm(e));
  };

  return (
    <div className="bg-gray-100 border border-gray-400 p-4 w-2/3 h-72 flex flex-col items-center rounded-lg shadow-lg">
      <div className="relative w-full h-full">
        <div className="absolute top-0 left-0 w-full h-full bg-yellow-50"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-white p-4">
          <header className="flex justify-between items-center">
            <h3 className="text-lg font-medium text-gray-800">
              <span>{note.title} </span>
              <span>{note.is_bookmark ? "⭐️" : null}</span>
            </h3>
            <h3 className="text-lg font-medium text-gray-800">
              <span>{note.date}</span> @<span> {note.time}</span>
            </h3>
          </header>
          <div className="note-body text-gray-700 mt-4">
            <p>{note.content}</p>
          </div>
        </div>
      </div>
      <div className="flex my-auto">
        <button
          className="mx-2 bg-neutral-800 hover:bg-red-800 py-2 px-5 rounded-md text-white"
          onClick={() => {
            playMySound(trash);
            deleteNote();
          }}
        >
          <BsTrash className="text-white" />
        </button>
        <Link to={`/notes/${id}/edit`}>
          {" "}
          <button className="bg-neutral-800 hover:bg-green-700 py-4 px-5 rounded-md mx-2">
            <ImPencil2 className="text-white" />
          </button>
        </Link>
        <Link to={`/notes`}>
          <button className=" mx-2 bg-neutral-800 hover:bg-yellow-500 py-3 px-3 rounded-md text-white font-bold">
            Back
          </button>
        </Link>
      </div>
    </div>
  );
}

export default NoteDetails;
