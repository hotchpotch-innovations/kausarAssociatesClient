'use client'
import React, { useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import { loadSlim } from "tsparticles-slim";
import { FullScreenStartParticles, slimParticles } from './particlesConfig';

const ParticlesBackground = () => {

    // Load Slim 
    const particlesInit = useCallback(async engine => {
        await loadSlim(engine);
    }, []);

    const particlesLoaded = useCallback(async container => {
        // await console.log(container);
    }, []);
    return (
        <Particles 
        id='tsparticles'
        init={particlesInit}
        loaded={particlesLoaded}
        options={slimParticles}
        />
    );
};

export default ParticlesBackground;