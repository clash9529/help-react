import React from "react";
import ViewDetails from "./view_details"
import NewDetails from "./new_deceased"
import AddDeceased from "./add_deceased"
import {
  Routes,
  Route
} from "react-router-dom";



// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

function App() {
  return (
    <div className="wrapper">
      <Routes>
        <Route exact path="/" element={<ViewDetails/>}/>
        <Route exact path="/new" element={<NewDetails/>}/>
        <Route exact path="/add" element={<AddDeceased/>}/>
      </Routes>
    </div>
  );
}

export default App;