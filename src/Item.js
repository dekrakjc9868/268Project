import React, {useState} from 'react';
import './App.css';
import {useDispatch} from 'react-redux';
import {enterEditMode, leaveEditMode,startDeletingItem, startSavingItem} from './actions';



export function Item(props){
  const item = props.item;
  const dispatch = useDispatch();
  const [title, setTitle] = useState(item.title);
  const [description, setDescription] = useState(item.description);


  const onEdit = () => {
    dispatch(enterEditMode(item));
  }

  const onCancel = () => {
    dispatch(leaveEditMode(item));
  }

  const onSave = () => {
    dispatch(startSavingItem({
      id: item.id,
      title,
      description,
    }));
  }

  const onDelete = () => {
    dispatch(startDeletingItem(item));
  }

  if(item.isEditing){
    return (
    <div className="item">

<div>

<button onClick={onSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
      <button onClick = {onDelete} className="deleteButton" >Delete</button>

</div>
      <div>
          <input placeholder = "Title" type="text" value={title} onChange = {e => 
                  setTitle (e.target.value)}/>
                  <input placeholder = "Description" type="text" value={description} onChange = {e => 
                  setDescription (e.target.value)}/> 

      </div>

               
     
  </div>
);
  } else {
      return (
        <div className="item">
          <div id = "editDiv">
            <button className = "editBUtton" onClick = {onEdit}>Edit</button>
          </div>
          <div>
            <span className="title">{item.title}<br/></span>
                    <span className="title">{item.description}<br/></span>
            
          </div>
       
        </div>
      );
    }

}
