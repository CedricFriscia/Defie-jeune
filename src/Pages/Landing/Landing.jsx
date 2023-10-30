import React from "react";

// Import CSS
import "./styles.scss";

const Landing = () => {
  return (
    <div className="landing">
      <section className="landing__présentation">
        {" "}
        <h2 className="landing__titles">Des entretiens inversé !</h2>
        <p>
          Les candidats font passer un entretien aux entreprises. Au lieu de se
          contenter de répondre aux questions des recruteurs, les candidats
          prennent l'initiative de poser des questions pertinentes et
          approfondies aux représentants de l'entreprise.
        </p>
        <img
          src="src\assets\undraw_meeting_re_i53h.svg"
          alt="ilustation meeting"
        />
      </section>

      <section className="landing__événements">
        <h2 className="landing__titles">
          Des animations, un espace détente, et bien sûr des jeunes à recruter.
        </h2>
        <img
          src="src\assets\undraw_interview_re_e5jn.svg"
          alt="Campus sud des métier"
        />
      </section>

      <section className="landing__campus">
        <h2 className="landing__titles">
          Rendez-vous le 7 décembre au campus sud des métiers !
        </h2>

        <img
          src="https://fyooyzbm.filerobot.com/v7/NIC10Q525_DM_INAUGURA+%2827844562%29-TfBUZuD2.jpg?vh=6c1c4b&ci_seal=b4a143fc05&w=1280&h=746&gravity=auto&func=crop"
          alt="Campus sud des métier"
        />
      </section>
    </div>
  );
};

export default Landing;
