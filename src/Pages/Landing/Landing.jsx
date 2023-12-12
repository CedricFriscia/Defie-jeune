import Nav from "../../Components/Nav/Nav";
import CopyrightIcon from "@mui/icons-material/Copyright";
import EmblaCarousel from "../../Components/Carousel/Carousel";
// Import CSS
import "./styles.scss";

const Landing = () => {
  return (
    <div className="landing">
      <section className="landing__présentation">
        <h2 className="landing__titles">Des entretiens inversés !</h2>

        <p>
          Les jeunes prennent leur avenir en main ! Ils n'attendent plus l'appel
          d'un employeur mais se créent eux-mêmes leurs propres opportunités à
          hauteur de leurs ambitions. Ils invitent les employeurs à les
          rencontrer et adoptent une posture de recruteur.
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
          src="/undraw_Interview_re_e5jn__1_-removebg-preview.png"
          alt="Campus sud des métier"
        />
      </section>

      <section className="landing__campus">
        <h2 className="landing__titles">
          Rendez-vous le 7 décembre de 9h à 12h au Campus Sud des Métiers !
        </h2>
        <p>13 Av. Simone Veil, 06200 Nice </p>

        <img
          src="https://fyooyzbm.filerobot.com/v7/NIC10Q525_DM_INAUGURA+%2827844562%29-TfBUZuD2.jpg?vh=6c1c4b&ci_seal=b4a143fc05&w=1280&h=746&gravity=auto&func=crop"
          alt="Illustration undraw interview"
        />
      </section>

      <section className="landing__carousel">
        <h2 className="landing__titles">Photos de l'événement !</h2>
        <p className="landing__text">
          Faites défiler les photos avec un swipe vers la gauche.
        </p>

        <EmblaCarousel />
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
          <p>2023 Copyright : Defi'JeuneS - Nice Nord</p>
          <p>Tous droits réservés</p>
        </section>
      </footer>
    </div>
  );
};

export default Landing;
