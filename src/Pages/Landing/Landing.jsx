import Nav from "../../Components/Nav/Nav";
import CopyrightIcon from "@mui/icons-material/Copyright";

// Import CSS
import "./styles.scss";

const Landing = () => {
  return (
    <div className="landing">
      <section className="landing__présentation">
        <h2 className="landing__titles">Des entretiens inversé !</h2>
        <p>
          Les candidats font passer un entretien aux entreprises. Au lieu de se
          contenter de répondre aux questions des recruteurs, les candidats
          prennent l'initiative de poser des questions pertinentes et
          approfondies aux représentants de l'entreprise.
        </p>
        <img
          src="https://42f2671d685f51e10fc6-b9fcecea3e50b3b59bdc28dead054ebc.ssl.cf5.rackcdn.com/illustrations/Meeting_re_i53h.svg"
          alt="ilustation meeting"
        />
      </section>

      <section className="landing__événements">
        <h2 className="landing__titles">
          Des animations, un espace détente, et bien sûr des jeunes à recruter.
        </h2>
        <img
          src="https://pbs.twimg.com/media/FGuRXB5XwAULo0V.jpg"
          alt="Campus sud des métier"
        />
      </section>

      <section className="landing__campus">
        <h2 className="landing__titles">
          Rendez-vous le 7 décembre de 9h à 12h au campus sud des métiers !
        </h2>
        <p>13 Av. Simone Veil, 06200 Nice </p>

        <img
          src="https://fyooyzbm.filerobot.com/v7/NIC10Q525_DM_INAUGURA+%2827844562%29-TfBUZuD2.jpg?vh=6c1c4b&ci_seal=b4a143fc05&w=1280&h=746&gravity=auto&func=crop"
          alt="Campus sud des métier"
        />
      </section>
      <section className="landing__sponsor">
        <h2 className="landing__titles">Avec la participation de :</h2>

        <div className="logo__container">
          <img
            className="logo"
            src="https://upload.wikimedia.org/wikipedia/fr/c/c0/Logo_P%C3%B4le_Emploi_2008.svg"
            alt="Logo pole emploi"
          />
          <img
            className="logo"
            src="https://www.campussuddesmetiers.com/wp-content/uploads/2021/03/logo.png"
            alt="Logo campus sud métiers"
          />
          <img
            className="logo"
            src="https://www.cuisinemodemplois.com/wp-content/themes/cme/assets/img/logo-intro.png"
            alt="Logo cuisine mode emploi"
          />
        </div>
      </section>

      <footer>
        <section className="landing__footer">
          <CopyrightIcon sx={{ fontSize: 50 }} />
          <p>2023 Copyright : Defie jeune-nice</p>
          <p>Tous droits réservés</p>
        </section>
      </footer>
    </div>
  );
};

export default Landing;
