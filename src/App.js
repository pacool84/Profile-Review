import React from "react";
import "./App.css";
import Profile from "./Profile";

function App() {
  return (
    <main>
      <section className='container'>
        <div className='container-title'>
          <h2>Our Profiles</h2>
        </div>
        <Profile />
      </section>
    </main>
  );
}

export default App;
