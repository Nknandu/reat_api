import React from "react";

const Hero = (user) => {
   console.log(user);
    return (
        <section id="hero" class="d-flex flex-column justify-content-center align-items-center">
            <div class="hero-container" data-aos="fade-in">
                <h1>Name</h1>
                <p>I'm <span class="typed" data-typed-items="Designer, Developer, Freelancer, Photographer"></span>'</p>
            </div>
        </section>
    );
};
export default Hero;