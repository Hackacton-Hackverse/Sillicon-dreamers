import React from 'react';
import './stylesheet/DeleteNote_popup.css';
import close_icon from '../assets/images/black_cross_icon.svg';
import { deleteNoteAPI } from '../APIs/api';
import axios from 'axios';
import { useContextProvider } from '../Contexts/ context';
import { getCurrentDate } from '../Contexts/date';
import { useNavigate } from 'react-router-dom';

const DeleteNote_popup = ({ onClose, taskName, folderName }) => {
  const navigate = useNavigate();
  const { setReload } = useContextProvider();
  const handleDeleteNewNote = async () => {
    try {
      const response = await axios.delete(deleteNoteAPI, {
        data: { title: taskName },
      });
      if (response.status == 200) {
        setReload(true);
        navigate('/');
      } else {
        alert('An Error Occured. Try again later');
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="deletepopup-main">
      <div className="deletepopup-container">
        <div className="deletepopup-content">
          <p>Are you sure you want to delete this task</p>
          <div className="deletePopup-btn-div">
            <button className="cancel-btn" onClick={onClose}>
              Close
            </button>
            <button
              className="confirm-btn"
              onClick={() => {
                handleDeleteNewNote();
                onClose();
              }}
            >
              Confirm
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

export default DeleteNote_popup;
