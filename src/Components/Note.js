import { Link } from "react-router-dom";
// import Files from "../Components/Files";
//TODO: Import HOWLER
import "./Notes.css";
export default function Note({
  note: { id, title, content, date, time, is_bookmark },
}) {
  return (
    <div className="Note">
      <ul className="Single_Note">
        <li style={{ listStyle: "none" }}>
          <Link to={`/notes/${id}`}>
            <div className="Header">
              {" "}
              <h3>{title}</h3> <b>{date}</b> <b>{time}</b>
            </div>
            <p>{content}</p>
            <div className="Footer">
              {" "}
              <p>{is_bookmark ? "⭐️" : null}</p>
            </div>
          </Link>
      </li>
      </ul>
    </div>
  );
}


import { Link } from "react-router-dom";
import { useDrop } from "react-dnd";
import Files from "../Components/Files";
import axios from "axios";
//TODO: Import HOWLER
import "./Notes.css";
export default function Note({
  note: { id, title, content, date, time, is_bookmark },
}) {
  const [{ isOver }, drop] = useDrop({
    accept: "file",
    drop: (item) => {
      //TODO: Handle file drop
      console.log(item);
    },
    collect: (monitor) => ({
      isOver: !!monitor.isOver(),
    }),
  });

  return (
    <div className={`Note ${isOver ? "over" : ""}`} ref={drop}>
      <ul className="Single_Note">
        <li  style={{ listStyle: "none" }}>
          <Link to={`/notes/${id}`}>
            <div className="Header">
              {" "}
              <h3>{title}</h3> <b>{date}</b> <b>{time}</b>
            </div>
            <p>{content}</p>
            <div className="Footer">
              {" "}
              <p>{is_bookmark ? "⭐️" : null}</p>
            </div>
          </Link>
          <Files />
        </li>
      </ul>
    </div>
  );
}

