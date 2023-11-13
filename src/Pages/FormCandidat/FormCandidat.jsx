// Import CSS
import "./styles.scss";

function FormCandidat() {
   return (
      <form className='form'>
         <p className='title'>Créer un candidat</p>
         <p className='message'>Remplie tout les champ pour créer ton profil</p>
         <div className='flex'>
            <label>
               <input
                  required=''
                  placeholder='Nom'
                  type='text'
                  className='input'
               />
            </label>

            <label>
               <input
                  required=''
                  placeholder='Prénom'
                  type='text'
                  className='input'
               />
            </label>
         </div>

         <label>
            <input
               required=''
               placeholder='10 janvier 1997'
               type='text'
               className='input'
            />
         </label>

         <label>
            <input
               required=''
               placeholder='Recherche une alternance ...'
               type='text'
               className='input'
            />
         </label>
         <label>
            <input
               required=''
               placeholder='Linkedin'
               type='text'
               className='input'
            />
         </label>
         <label>
            <textarea className='input' placeholder='Long Text'></textarea>
         </label>
         <button className='submit'>Valider</button>
      </form>
   );
}

// description={candidat.description}

export default FormCandidat;
