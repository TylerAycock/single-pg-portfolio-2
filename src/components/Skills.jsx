import "./Skills.css";

const Skills = () => {
  let data = [
    { skill: "HTML", years: 1 },
    { skill: "CSS", years: 1 },
    { skill: "JavaScript", years: 1 },
    { skill: "React", years: 1 },
    { skill: "Git", years: 1 },
    { skill: "npm", years: 1 },
  ];
  return (
    <section className="skills__section">
      {data.map(({ skill, years }) => {
        return (
          <div className="skill__item">
            <h2 className="header-l">{skill}</h2>
            <p>{years} years experience</p>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
