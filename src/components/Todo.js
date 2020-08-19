import React from "react";
import "./Todo.css";
import { List, ListItem, ListItemText, Avatar } from "@material-ui/core";

function Todo(props) {
  return (
    <div>
      <List className="todo__list">
        <ListItem>
          <ListItemText primary={props.todo} secondary="2018-02-02" />
        </ListItem>
      </List>
    </div>
  );
}

export default Todo;
