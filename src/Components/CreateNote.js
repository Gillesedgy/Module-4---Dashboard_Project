import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { FiX } from "react-icons/fi";
import { ImPlus } from "react-icons/im";
import { BsCheckSquare } from "react-icons/bs";
//
import { Howl } from "howler";
//
import error from ".././assets/error.mp3";
//
const API = process.env.REACT_APP_API_URL;

export default function CreateNote() {
  // Create a function to play your sound effect
  const playMySound = (src) => {
    // sound is new instance of howl
    const mySound = new Howl({
      // src, where sound is coming from
      src,
      volume: 0.15,
      html5: true,
    });
    // to play the sound effect when function is called
    mySound.play();
  };
  // FormModal
  const [formModal, setFormModal] = useState(false);
  // New Note
  const [newNote, setNewNote] = useState({
    title: "",
    content: "",
    date: "",
    time: "",
    is_bookmark: false,
  });
  let navigate = useNavigate();
  //Add NEW Note
  const addNewNote = (addedNote) => {
    axios
      .post(`${API}/notes`, addedNote)
      .then(
        () => {
          // navigate("/notes");
          window.location.reload();
        },
        (error) => console.log(error)
      )
      .catch((error) => console.log(error));
  };

  // TEXTCHANGE
  const handleTextChange = (e) => {
    setNewNote({ ...newNote, [e.target.id]: e.target.value });
  };
  // SUBMIT
  const handleSubmit = (e) => {
    e.preventDefault();
    addNewNote(newNote);
    setFormModal(false);
  };
  // CheckBox
  const handleCheckChange = () => {
    setNewNote({ ...newNote, is_bookmark: !newNote.is_bookmark });
  };

  //! Character Count Feature
  const characterLimit = 120;
  const handleCharacterCount = (e) => {
    console.log(newNote.content);
    if (characterLimit - newNote.content.length >= 1) {
      setNewNote({ ...newNote, [e.target.id]: e.target.value });
    } else {
      playMySound(error);
    }
  };

  return (
    <div>
      {formModal ? (
        <form
          className="bg-emerald-400 h-[25rem] absolute z-10 m-4 p-3 rounded-br-xl "
          onSubmit={handleSubmit}
        >
          <button
            onClick={() => {
              setNewNote({
                title: "",
                content: "",
                date: "",
                time: "",
                is_bookmark: false,
              });
              setFormModal(false);
            }}
            className="shadow-xl border border-cyan-900 bg-slate-600 hover:bg-slate-500 text-black p-2 rounded-md mb-2 ml-[90%]"
          >
            <FiX />
          </button>
          <br />

          <label className="font-bold py-2" htmlFor="title">
            {" "}
            Title{" "}
          </label>
          <input
            className="w-full  bg-emerald-400 leading-tight focus:outline-none"
            type="text"
            value={newNote.title}
            id="title"
            placeholder="Click to add title"
            onChange={handleTextChange}
          />
          <label className="font-bold" htmlFor="content">
            Description:
          </label>
          <textarea
            className=" bg-emerald-400 w-full focus:outline-none resize-none"
            placeholder="Click to add text"
            id="content"
            value={newNote.content}
            onChange={handleCharacterCount}
            required
            // rows="4"
            // cols="8"
          ></textarea>
          {/* //! CharCount */}
          <div className="p-2 ">
            {characterLimit - newNote.content.length} Characters Remaining
          </div>
          <label htmlFor="date">Date:</label>
          <input
            className=" bg-emerald-400 focus:outline-none hover:cursor-pointer"
            type="date"
            id="date"
            value={newNote.date}
            placeholder="Click to add date"
            onChange={handleTextChange}
            required
          />
          <label className="ml-2 " htmlFor="time">
            Time:
          </label>
          <input
            className="focus:outline-none bg-emerald-400 hover:cursor-pointer"
            type="time"
            id="time"
            value={newNote.time}
            placeholder="Click to add time"
            onChange={handleTextChange}
            required
          />
          <div>
            <div className="py-4">
              <label className=" mr-2" htmlFor="is_bookmark">
                Favorite
              </label>
              <input
                type="checkbox"
                id="is_bookmark"
                checked={newNote.is_bookmark}
                onChange={handleCheckChange}
              />
            </div>
          </div>
          <div className="flex justify-evenly">
            <button
              className="flex items-center justify-center gap-2 shadow-xl border border-cyan-900 bg-slate-600 w-full p-3 my-2 hover:bg-slate-500 rounded-xl text-black"
              type="submit"
            >
              Submit
              <BsCheckSquare />
            </button>
          </div>
        </form>
      ) : (
        <div
          onClick={() => setFormModal(true)}
          className="flex items-center justify-center pt-2 z-10"
        >
          <a
            href="#_"
            className="relative inline-flex items-center justify-start  px-40 py-16 overflow-hidden font-bold rounded-full group"
          >
            <span className="w-40 h-40 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>

            <span className="absolute top-0 left-0 w-full h-full -mt-1 transition-all duration-500 ease-in-out rotate-90 -translate-y-80 -translate-x-0 bg-white opacity-100 group-hover:-translate-y-8"></span>

            <span className="relative w-full text-left text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900">
              <ImPlus />
            </span>
            <span className="absolute inset-0 border-2 border-white rounded-full"></span>
          </a>
        </div>
      )}
    </div>
  );
}
