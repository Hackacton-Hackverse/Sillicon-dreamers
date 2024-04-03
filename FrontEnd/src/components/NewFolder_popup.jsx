import React from "react";
import { useState } from "react";
import close_icon from "../assets/images/black_cross_icon.svg";
import "./stylesheet/NewFolder_popup.css";
import { useContextProvider } from "../Contexts/ context";
import axios from "axios";
import { createFoldersAPI } from "../APIs/api";

const NewFolder_popup = ({ onClose }) => {
  const [folderName, setFolderName] = useState("");
  const { setReload } = useContextProvider();

  const handleCreateNewFolder = async () => {
    try {
      const response = await axios.post(createFoldersAPI, {
        folder_name: folderName,
      });
      if (response.status == 200) {
        setReload(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="folderpopup-main">
      <div className="folderpopup-container">
        <div className="folderpopup-content">
          <p>New Folder</p>
          <input
            type="text"
            name=""
            value={folderName}
            onChange={(e) => setFolderName(e.target.value)}
            id=""
          />
          <div className="folderPopup-btn-div">
            <button
              onClick={() => {
                handleCreateNewFolder();
                onClose();
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

export default NewFolder_popup;
