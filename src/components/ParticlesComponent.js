import React from "react";
import Particles from "react-tsparticles";
import ParticleConfig from "./config/particles-config";

const ParticlesComponent = () => {
    return (
        <Particles params={ParticleConfig}>
        </Particles>
    );
    }

export default ParticlesComponent;