import React, { useState, useEffect } from 'react';
import save_icon from '../assets/images/save_icon.svg';
import bin_icon from '../assets/images/bin_icon.svg';
import share_icon from '../assets/images/share_icon.svg';
import green_lock_icon from '../assets/images/green_lock_icon.svg';
import ReactQuill from 'react-quill';
import { useParams } from 'react-router-dom';
import DeleteNote_popup from '../components/DeleteNote_popup';
import './stylesheet/TaskPage.css';
import { useContextProvider } from '../Contexts/ context';
import LockedNote_popup from '../components/LockedNote_popup';
import LockedPage from './LockedPage';
import axios from 'axios';
import { updateCompletedAPI, updateSaveNoteAPI } from '../APIs/api';
import { useNavigate } from 'react-router-dom';
import DeleteFolder_popup from '../components/DeleteFolder_popup';

const TaskPage = () => {
  const { taskFolder, taskName } = useParams();
  const {
    isDeletePopUpOpen,
    openDeletePopUp,
    closeDeletePopUp,
    setTree,
    tree,
    isLockNotePopUpOpen,
    closeLockedNotePopUp,
    openLockedNotePopUp,
    setReload,
  } = useContextProvider();
  const navigate = useNavigate();
  const [isChecked, setIsChecked] = useState(false);
  const [isUnlocked, setIsUnLocked] = useState(false);

  const handleCheckboxChange = async (event) => {
    setIsChecked(event.target.checked);
    if (event.target.checked) {
      try {
        const response = await axios.put(updateCompletedAPI, {
          title: taskName,
        });
        if (response.status == 200) {
          setReload(true);
          navigate('/');
          alert('Task moved to completed folder');
        }
      } catch (error) {
        console.log(error);
      }
    }
  };
  const handleSaveNote = async () => {
    try {
      const response = await axios.put(updateSaveNoteAPI, {
        title: taskName,
        description: textValue,
      });
      if (response.status == 200) {
        setReload(true);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const text =
    tree.length > 0
      ? tree
          .find((folder) => folder.folder_name === taskFolder)
          .content.find((task) => task.title === taskName).description
      : '';
  const [textValue, setTextValue] = useState(text);
  useEffect(() => {
    setTextValue(text);
  }, [text]);

  const folder = tree.find((folder) => folder.folder_name === taskFolder);
  const folderIndex = tree.findIndex(
    (folder) => folder.folder_name === taskFolder
  );
  const taskIndex = folder.content.findIndex((task) => task.title === taskName);
  const isLock = tree[folderIndex].content[taskIndex].locked;
  const passWord = tree[folderIndex].content[taskIndex].password;

  useEffect(() => {
    setIsUnLocked(false);
  }, [taskName]);

  return (
    <>
      {isLock === 1 && isUnlocked === false ? (
        <LockedPage setIsUnLocked={setIsUnLocked} password={passWord} />
      ) : (
        <>
          <div>
            {isDeletePopUpOpen && (
              <DeleteNote_popup
                onClose={closeDeletePopUp}
                taskName={taskName}
                folderName={taskFolder}
              />
            )}
            {isLockNotePopUpOpen && (
              <LockedNote_popup
                onClose={closeLockedNotePopUp}
                taskName={taskName}
              />
            )}
          </div>

          <div className="task-page-container">
            <div className="text-area-container">
              <div className="body-container">
                <div className="text-icons-container">
                  <div className="delete-icon-div">
                    <button
                      onClick={openDeletePopUp}
                      className="icon-btn-delete-home"
                    >
                      <img src={bin_icon} className="delete-icon" alt="" />
                    </button>
                  </div>

                  <div className="group-icons-div">
                    <button onClick={handleSaveNote} className="icon-btn-home">
                      <img src={save_icon} alt="" className="save-icon" />
                    </button>
                    <button
                      onClick={openLockedNotePopUp}
                      className="icon-btn-home"
                    >
                      <img
                        src={green_lock_icon}
                        alt=""
                        className="text-lock-icon"
                      />
                    </button>
                    <div className="checkbox-wrapper-46">
                      <input
                        type="checkbox"
                        id="cbx-46"
                        className="inp-cbx"
                        checked={isChecked}
                        onChange={handleCheckboxChange}
                      />
                      <label htmlFor="cbx-46" className="cbx">
                        <span>
                          <svg viewBox="0 0 12 10" height="25px" width="25px">
                            <polyline points="1.5 6 4.5 9 10.5 1"></polyline>
                          </svg>
                        </span>
                      </label>
                    </div>
                    <button className="icon-btn-home">
                      <img src={share_icon} alt="" className="share-icon" />
                    </button>
                  </div>
                </div>

                <div className="text-editor-container">
                  {/* <div className="edit-text-div">
          <button className="edit-text-editor-btn">Edit</button>
        </div>
         */}
                  <div>
                    {/* met le text editor ici */}
                    <ReactQuill
                      className="reactquill-text"
                      theme="snow"
                      value={textValue}
                      onChange={setTextValue}
                      style={{ fontSize: '16px' }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default TaskPage;
