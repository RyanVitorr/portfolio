import React, { useState } from 'react';
import "../skills/SkillsStyle.css";
import CardSkill from './cardSkill/CardSkill';

const Skills = () => {
  return (
    <section className="skills">
        <div className="conteudo-skills">
            <div className="titulo-skills">
                <h2>Skills</h2>
                <span className="linha-titulo"></span>
            </div>

            <div className="infos-skills">
                <CardSkill />
                <CardSkill />
                <CardSkill />
                <CardSkill />
                <CardSkill />
            </div>
        </div>
    </section>

  )
}

export default Skills;