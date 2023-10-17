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
      {data.map((item, index) => {
        return (
          <div className="skill__item" key={index}>
            <h2 className="header-l">{item.skill}</h2>
            <p>{item.years} year experience</p>
          </div>
        );
      })}
    </section>
  );
};

export default Skills;
