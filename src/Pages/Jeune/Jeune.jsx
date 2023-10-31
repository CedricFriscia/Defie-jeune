import { useEffect, useState } from "react";
import api from "../../api/api";
import Card from "../../Components/Card/Card";
import Nav from "../../Components/Nav/Nav";
import "./styles.scss";

const Jeune = () => {
   const [candidats, setCandidats] = useState([]);
   const [finder, setFinder] = useState("");

   useEffect(() => {
      api.get("/candidats")
         .then((res) => {
            setCandidats(res.data);
         })
         .catch((err) => console.log("ERREUR", err));
   }, []); // Pass an empty dependency array to execute the effect only once

   const onChange = (event) => {
      setFinder(event.target.value);
   };

   return (
      <div className='jeune'>
         <Nav />

         <section className='jeune__search'>
            <form className='jeune__form'>
               <input
                  className='jeune__input'
                  type='text'
                  placeholder='Prénom du candidat'
                  value={finder}
                  onChange={onChange}
               />
            </form>
         </section>

         <div className='card__container'>
            {candidats
               .filter((candidat) =>
                  candidat.firstname
                     .toLowerCase()
                     .includes(finder.toLowerCase())
               )
               .map((candidat) => (
                  <Card
                     key={candidat.id}
                     firstname={candidat.firstname}
                     lastname={candidat.lastname}
                     birthday={candidat.birthday}
                     search={candidat.search}
                     linkedin={candidat.linkedin}
                     description={candidat.description}
                  />
               ))}
         </div>
      </div>
   );
};

export default Jeune;
