import { useState } from "react";
import api from "../../api/api";
import "./styles.scss";

function FormCandidat() {
   const [nom, setNom] = useState("");
   const [prenom, setPrenom] = useState("");
   const [dateNaissance, setDateNaissance] = useState("");
   const [recherche, setRecherche] = useState("");
   const [linkedin, setLinkedin] = useState("");
   const [description, setDescription] = useState("");

   const handleSubmit = (event) => {
      event.preventDefault();

      api.post("/candidats", {
         firstname: nom,
         lastname: prenom,
         birthday: dateNaissance,
         search: recherche,
         linkedin: linkedin,
         description: description,
      })
         .then((response) => {
            console.log(response.data);
         })
         .catch((error) => {
            console.log(error);
         });
   };

   return (
      <form className='form' onSubmit={handleSubmit}>
         <p className='title'>Créer un candidat</p>
         <p className='message'>
            Remplie tout les champs pour créer ton profil
         </p>
         <div className='flex'>
            <label>
               <input
                  required=''
                  placeholder='Nom'
                  type='text'
                  className='input'
                  value={nom}
                  onChange={(e) => setNom(e.target.value)}
               />
            </label>

            <label>
               <input
                  required=''
                  placeholder='Prénom'
                  type='text'
                  className='input'
                  value={prenom}
                  onChange={(e) => setPrenom(e.target.value)}
               />
            </label>
         </div>

         <label>
            <input
               required=''
               placeholder='10 janvier 1997'
               type='text'
               className='input'
               value={dateNaissance}
               onChange={(e) => setDateNaissance(e.target.value)}
            />
         </label>

         <label>
            <input
               required=''
               placeholder='Recherche une alternance ...'
               type='text'
               className='input'
               value={recherche}
               onChange={(e) => setRecherche(e.target.value)}
            />
         </label>
         <label>
            <input
               required=''
               placeholder='Linkedin'
               type='text'
               className='input'
               value={linkedin}
               onChange={(e) => setLinkedin(e.target.value)}
            />
         </label>
         <label>
            <textarea
               className='input'
               placeholder='Long Text'
               value={description}
               onChange={(e) => setDescription(e.target.value)}
            ></textarea>
         </label>
         <button type='submit' className='submit'>
            Valider
         </button>
      </form>
   );
}

export default FormCandidat;
