export const Action = Object.freeze({
LoadItems: 'LoadItems',
FinishAddingItem: 'FinishAddingItem',
EnterEditMode: 'EnterEditMode',
LeaveEditMode: 'LeaverEditMode',
FinishSavingItem: 'FinishSavingItem',
FinishDeletingItem: 'FinishDeletingItem',
});

export function loadItems(items) {
  return {
    type: Action.LoadItems,
    payload: items,
  };
}

export function finishAddingItem(item) {
  return {
    type: Action.FinishAddingItem,
    payload: item,
  };
}

export function finishSavingItem(item) {
  return {
    type: Action.FinishSavingItem,
    payload: item,
  };
}


export function finishDeletingItem(item) {
  return {
    type: Action.FinishDeletingItem,
    payload: item,
  };
}


export function enterEditMode(item) {
  return {
    type: Action.EnterEditMode,
    payload: item,
  };
}

export function leaveEditMode(item) {
  return {
    type: Action.LeaveEditMode,
    payload: item,
  };
}



function checkForErrors(response) {
  if(!response.ok){
    throw Error(`${response.status}: ${response.statusText}`);
  }
  return response;
}

const host = "https://blusold-api.duckdns.org:8442";

export function loadTitle(title){
  return dispatch => {
  fetch(`${host}/blusolddb/${title}`)
    .then(checkForErrors)
    .then(response => response.json())
    .then (data => {
      if(data.ok){
       dispatch(loadItems(data.items));
      }
    })
    .catch(e => console.error(e));
  };
}

export function loadAllItems(){
  return dispatch => {
  fetch(`${host}/blusolddb/`)
    .then(checkForErrors)
    .then(response => response.json())
    .then (data => {
      if(data.ok){
       dispatch(loadItems(data.items));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startAddingItem(title, description){
  const item = {title: title, description: description};
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(item),
  }
  return dispatch => {
  fetch(`${host}/blusolddb`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then (data => {
      if(data.ok){
          item.id = data.id;
          dispatch(finishAddingItem(item));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startSavingItem(item){
  const options = {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    
    body: JSON.stringify(item),
  }
  return dispatch => {
  fetch(`${host}/blusolddb/${item.id}`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then (data => {
      if(data.ok){
          dispatch(finishSavingItem(item));
      }
    })
    .catch(e => console.error(e));
  };
}

export function startDeletingItem(item){
  const options = {
    method: 'DELETE',
  };
  return dispatch => {
  fetch(`${host}/blusolddb/${item.id}`, options)
    .then(checkForErrors)
    .then(response => response.json())
    .then (data => {
      if(data.ok){
          dispatch(finishDeletingItem(item));
      }
    })
    .catch(e => console.error(e));
  };
}

 
