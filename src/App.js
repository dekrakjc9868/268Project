// import React, { Component } from "react";
// import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
// import "bootstrap/dist/css/bootstrap.min.css";
// import "./App.css";
// import logo from './images/logo.jpeg'
// import AddTutorial from "./components/add-tutorial.component";
// import Tutorial from "./components/tutorial.component";
// import TutorialsList from "./components/tutorials-list.component";


// class App extends Component {
//   render() {
//     return (
//       <Router>
//         <div>
//           <nav className="navBar">
//             <div className = "logo">
//               <Link className= 'navbar-brand' to ={'/tutorials'}>
//               <img src = {logo} alt = "blugold logo"></img>
//               </Link>
//               {/* <a href="/tutorials" className="navbar-brand">
//                 <img src = {logo} alt = "blugold logo"></img>
//                </a> */}
//             </div>
//             <div id = "spacer"></div>
//             <div className="navBarLinks">
//                 <Link id = "navLinks" to={"/tutorials"} className="nav-link">
//                   Items
//                 </Link>
//             </div>
//             <div className="spacer2"></div>
//             <div className = "navBarLinks">
//                 <Link id = "navLinks" to={"/add"} className="nav-link">
//                   Add Item
//                 </Link>
//             </div>
//             <div className="spacer2">
//             </div>
//           </nav>

//         <div className="itemBody">
//           <div className="container mt-3">
//             {/* <Switch>
//               <Route exact path={["/", "/blusolddb"]} component={TutorialsList} />
//               <Route exact path="/add" component={AddTutorial} />
//               <Route path="/blusolddb/:id" component={Tutorial} />
//             </Switch> */}
//             </div>
//           </div>
//         </div>
//       </Router>
//     );
//   }
// }

// export default App;

import React, { useEffect  } from "react";
import { BrowserRouter as Router, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import logo from './images/logo.jpeg'
// import AddTutorial from "./components/add-tutorial.component";
// import TutorialsList from "./components/tutorials-list.component";
import {Item} from './Item';
import {useSelector, useDispatch} from 'react-redux';
import {loadAllItems, startAddingItem} from './actions';



function App() {

  const items = useSelector(state => state.items);
  const dispatch = useDispatch();
  const title = '';
  const description = ''; 

   useEffect(() => {
    dispatch(loadAllItems());
  }, [dispatch]);

  const onAdd = () => {
    console.log(title);
    dispatch(startAddingItem(title, description));
  }
  

 
    return (
      <Router>
        <div>
          <nav className="navBar">
            <div className = "logo">
              <Link className= 'navbar-brand' to ={'/listingsPage'}>
              <img src = {logo} alt = "blugold logo"></img>
              </Link>
              {/* <a href="/tutorials" className="navbar-brand">
                <img src = {logo} alt = "blugold logo"></img>
               </a> */}
            </div>
            <div id = "spacer"></div>
            <div className="navBarLinks">
                <Link id = "navLinks" to={"/listingsPage"} className="nav-link"> 
                </Link>
            </div>
            <div className="spacer2"></div>
              <div className = "navBarLinks">
                <Link id = "navLinks" to={"/addItem"} className="nav-link">
                </Link> 
              </div>  
            <div className="spacer2">
            </div>
          </nav>
          {/* <div className="item-root">
            {items && items.map( item => <Item key= {item.id} item={item} />)}
          </div> */}
           <h1 className="listH1">Listings</h1>
      <div className="item-root">
          <button onClick={onAdd}>New Item</button>
          {items && items.map(item => <Item key= {item.id} item={item} />)}
      </div>
         </div> 

         {/* <Switch> 
              <Route exact path='/listingsPage' component={Listings}/>           
              <Route exact path="/addItem" component={AddItem} />
            </Switch>  */}
      </Router>
    );
  }

// function toggleDiv() {
//   var x = document.getElementById("item-root");
//   if (x.style.display == "none") {
//     x.style.display = "block";
//   } else {
//     x.style.display = "none";
//   }
// }

export default App;