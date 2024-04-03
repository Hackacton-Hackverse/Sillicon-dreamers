import React, { createContext, useEffect } from "react";
import { useState, useContext } from "react";
import { getAllFoldersAPI, getAllTasksAPI } from "../APIs/api";
import axios from "axios";
import { parseIt } from "./parser";

export const context = createContext(null);

export default function ContextProvider({ children }) {
  const [isFolderPopUpOpen, setIsFolderPopupOpen] = useState(false);
  const [notePopUpOpen, setNotePopUpOpen] = useState(false);
  const [isDeletePopUpOpen, setIsDeletePopUpOpen] = useState(false);
  const [isDeletePopUpOpenFolder, setIsDeletePopUpOpenFolder] = useState(false);
  const [isLockNotePopUpOpen, setIsLockNotePopUpOpen] = useState(false);
  const [tree, setTree] = useState([]);
  const [reload, setReload] = useState(false);


  const getAllFolders = async () => {
    try {
      const response = await axios.get(getAllFoldersAPI);
      let folders = [];
      if (response.status == 200) {
        folders = response.data.folders;
        return folders;
      }
    } catch (error) {
      console.log(error);
    }
  };
  const getAlltasks = async () => {
    try {
      const response = await axios.get(getAllTasksAPI);
      let tasks = [];
      if (response.status == 200) {
        tasks = response.data.taks;
        
        return tasks;
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const fetchData = async () => {
      try {
        const folders = await getAllFolders();
        const tasks = await getAlltasks();
        const data = parseIt(folders, tasks);
        setTree(data);
        setReload(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
    
  }, [reload]);

  const openLockedNotePopUp = () => {
    setIsLockNotePopUpOpen(true);
  };
  const closeLockedNotePopUp = () => {
    setIsLockNotePopUpOpen(false);
  };

  const openDeleteFolderPopUp = () => {
    setIsDeletePopUpOpenFolder(true);
  }
  const closeDeleteFolderPopUp = () => {
    setIsDeletePopUpOpenFolder(false);
  }
  const openDeletePopUp = () => {
    setIsDeletePopUpOpen(true);
  };
  const closeDeletePopUp = () => {
    setIsDeletePopUpOpen(false);
  };
  const openFolderPopup = () => {
    setIsFolderPopupOpen(true);
  };

  const closeFolderPopup = () => {
    setIsFolderPopupOpen(false);
  };
  const openNotePopup = () => {
    setNotePopUpOpen(true);
  };

  const closeNotePopup = () => {
    setNotePopUpOpen(false);
  };
  const contextValue = {
    isFolderPopUpOpen,
    notePopUpOpen,
    isLockNotePopUpOpen,
    openLockedNotePopUp,
    closeLockedNotePopUp,
    setIsLockNotePopUpOpen,
    isDeletePopUpOpen,
    setIsDeletePopUpOpen,
    openDeletePopUp,
    closeDeletePopUp,
    setNotePopUpOpen,
    openFolderPopup,
    closeFolderPopup,
    openNotePopup,
    closeNotePopup,
    tree,
    setTree,
    reload,
    setReload,
    openDeleteFolderPopUp,
    closeDeleteFolderPopUp,
    isDeletePopUpOpenFolder,
    setIsDeletePopUpOpenFolder
  };

  return <context.Provider value={contextValue}>{children}</context.Provider>;
}

export const useContextProvider = () => {
  return useContext(context);
};
