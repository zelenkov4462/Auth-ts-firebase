import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { removeUser } from "../store/slices/userSlice";
import { useAppDispatch } from "../hooks/redux-hooks";

import { useAuth } from "../hooks/use-auth";

import ListSubheader from "@mui/material/ListSubheader";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Collapse from "@mui/material/Collapse";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import DraftsIcon from "@mui/icons-material/Drafts";
import SendIcon from "@mui/icons-material/Send";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import StarBorder from "@mui/icons-material/StarBorder";
import ListItemAvatar from "@mui/material/ListItemAvatar";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import Button from "@mui/material/Button";
import ButtonGroup from "@mui/material/ButtonGroup";

const HomePage = () => {
  const [contacts, setContacts] = useState([
    { id: 1, fullName: "Marry Key" },
    { id: 2, fullName: "Make Vazovskiy" },
    { id: 3, fullName: "Ivan Urgant" },
    { id: 4, fullName: "Djeck Vorobey" },
  ]);
  const [user, setUser] = useState({
    id: null,
    fullName: "",
  });
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };
  // const handleEditClick = (id) => {
  //   setUser(contacts.filter((user) => user.id === id));
  // };
  const dispatch = useAppDispatch();
  const { isAuth, email } = useAuth();
  return !isAuth ? (
    <List
      sx={{ width: "100%", maxWidth: 360, bgcolor: "background.paper" }}
      component="nav"
      aria-labelledby="nested-list-subheader"
      subheader={
        <ListSubheader component="div" id="nested-list-subheader">
          Список контаков
        </ListSubheader>
      }
    >
      <ListItemButton onClick={handleClick}>
        <ListItemAvatar>
          <Avatar
            alt="Remy Sharp"
            src="https://makeup.ru/storage/widgets/19425/conversions/Jzynpkr2XqbjBQbFLoOR82F3bpITHLQk-gallery_front.jpg"
            // sx={{ width: 56, height: 56 }}
          />
        </ListItemAvatar>
        <ListItemText primary="Marry Key" />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ButtonGroup variant="outlined" aria-label="outlined button group">
            {/*<Button>Delete</Button>*/}
            <Button
              color="error"
              variant="contained"
              startIcon={<DeleteIcon />}
            >
              Delete
            </Button>
            <Button
              color="success"
              variant="contained"
              // startIcon={<EditIcon />}
            >
              Edit
            </Button>
          </ButtonGroup>

          {/*<ListItemButton sx={{ pl: 6 }}>*/}
          {/*<ListItemIcon>*/}
          {/*<DeleteIcon />*/}
          {/*<Button variant="outlined" startIcon={<DeleteIcon />}>*/}
          {/*  Delete*/}
          {/*</Button>*/}
          {/*</ListItemIcon>*/}
          {/*<ListItemText primary="Delete" />*/}
          {/*  <ListItemIcon>*/}
          {/*    <DeleteIcon />*/}
          {/*  </ListItemIcon>*/}
          {/*  <ListItemText primary="Delete" />*/}
          {/*</ListItemButton>*/}
        </List>
      </Collapse>
    </List>
  ) : (
    <Navigate replace to="/login" />
  );
};

export default HomePage;
