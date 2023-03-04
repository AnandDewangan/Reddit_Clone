import "./App.css";
import Main from "./components/main/Main";
import SideNav from "./components/sidenav/SideNav";


function App() {
  return (
    <div className="App">
      <div className="container">
   
          <SideNav />
          <Main />
         
      </div>
    </div>
  );
}

export default App;
