import React from 'react';
import './stylesheet/DeleteFolder_popup.css';
import { useNavigate } from 'react-router-dom';
import close_icon from '../assets/images/black_cross_icon.svg';
import axios from 'axios';
import { deleteFolderAPI } from '../APIs/api';
import { useContextProvider } from '../Contexts/ context';

const DeleteFolder_popup = ({ onClose, folderName }) => {
  const navigate = useNavigate();
  const { setReload } = useContextProvider();
  const handleDeleteFolder = async () => {
    try {
      const response = await axios.post(deleteFolderAPI, {
        folder_name: folderName,
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
    <div className="deletepopupfolder-main">
      <div className="deletepopupfolder-container">
        <div className="deletepopupfolder-content">
          <p>Are you sure you want to delete this folder</p>
          <div className="deletePopupfolder-btn-div">
            <button className="cancel-btn" onClick={onClose}>
              Close
            </button>
            <button
              className="confirm-btn"
              onClick={() => {
                handleDeleteFolder();
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

export default DeleteFolder_popup;
