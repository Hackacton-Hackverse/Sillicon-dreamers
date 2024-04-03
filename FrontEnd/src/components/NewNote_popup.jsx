import React from 'react';
import './stylesheet/NewNote_popup.css';
import { useState } from 'react';
import close_icon from '../assets/images/black_cross_icon.svg';
import { useContextProvider } from '../Contexts/ context';
import { createNoteAPI } from '../APIs/api';
import { getCurrentDate } from '../Contexts/date';
import axios from 'axios';

const NewNote_popup = ({ onClose, selectedFolder }) => {
  const { setReload } = useContextProvider();
  const [noteName, setNoteName] = useState('');
  const handleCreateNewNote = async () => {
    try {
      const response = await axios.post(createNoteAPI, {
        title: noteName,
        description: null,
        completed: false,
        locked: false,
        folder_name: selectedFolder,
        date: getCurrentDate(),
        password: '0000',
      });
      if (response.status == 200) {
        setReload(true);
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="notepopup-main">
      <div className="notepopup-container">
        <div className="notepopup-content">
          <p>New Task</p>
          <input
            type="text"
            name=""
            value={noteName}
            onChange={(e) => setNoteName(e.target.value)}
            id=""
          />
          <div className="notePopup-btn-div">
            <button
              type="submit"
              onClick={() => {
                onClose();
                handleCreateNewNote();
              }}
            >
              Enter
            </button>
          </div>
        </div>

        <button className="close-icon-btn" onClick={onClose}>
          <img src={close_icon} alt="" />
        </button>
      </div>
    </div>
  );
};

export default NewNote_popup;
