import React, { Fragment, useState, useEffect } from "react";
import Modal from "react-modal";
import { connect } from "react-redux";
import { editTask } from "../redux/actions";

const customStyles = {
  content: {
    top: "25%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    background: "#c5d0dd ",
  },
};

// Make sure to bind modal to your appElement (http://reactcommunity.org/react-modal/accessibility/)
Modal.setAppElement("#root");

const EditForm = ({ oldTodo, editTask }) => {
  const [show, setShow] = useState(false);
  const [text, setText] = useState("");

  useEffect(() => {
    setText(oldTodo.text);
  }, [show, oldTodo.text]);

  const toggleModal = () => setShow(!show);

  const handleSubmit = (e) => {
    e.preventDefault();
    const newTask = { ...oldTodo, text: text };
    editTask(newTask);
    toggleModal();
  };

  return (
    <Fragment>
      <button onClick={toggleModal}>EDIT</button>
      <Modal isOpen={show} style={customStyles} onRequestClose={toggleModal}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            required
          />
          <button type="submit">Confirm</button>
          <button onClick={toggleModal}>Cancel</button>
        </form>
      </Modal>
    </Fragment>
  );
};

export default connect(null, { editTask })(EditForm);