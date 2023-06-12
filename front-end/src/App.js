import './App.scss';
import Navbar from './components/Navbar.js';

import { useEffect, useState } from "react"

import axios from "axios"

function App() {
  const [contacts, setContacts] = useState([])
  const [errors, setErrors] = useState({});

  // Fetch mit useEffect und axios umd die Daten zu "GET"en
  useEffect(() => {
    axios.get("/contact").then(({ data }) => setContacts(data));
  }, [])

  return (
    <div className="App">
      <Navbar />
      <form
        onSubmit={async (e) => {
          e.preventDefault();
          console.log(e);

          // Values aus den Input-Feldern
          const name = e.currentTarget[0].value;
          const email = e.currentTarget[1].value;

          // Hier werden neue Daten ans Backend gepostet
          // error oder newEntry
          const resp = await axios.post("/contact", { name, email });

          if (resp.data.newEntry) {
            setContacts((prevState) => [...prevState, resp.data.newEntry]);
          }
          if (resp.data.errors) {

            // Wenn es Fehler gibt, setzen wir diese in den state errors!
            setErrors(resp.data.errors);
          }
        }}
      >
        <label>Name</label>
        <input id="name" />
        {/* Errors von mongoose im Frontend */}
        <small>{errors?.name?.message}</small>

        <label>Email</label>
        <input id="email" />
        {/* Errors von mongoose im Frontend */}
        <small>{errors?.email?.message}</small>

        <button>Submit</button>

      </form>


      {contacts.map((elt) => (
        <div key={elt._id}>
          <img src="" alt="" />
          <p>{elt.name}</p>
          <p>{elt.email}</p>
          <br />
        </div>
      ))}

    </div>
  );
}

export default App;
