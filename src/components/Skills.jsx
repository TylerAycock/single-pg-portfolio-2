import "./Skills.css";

const Skills = () => {
  let data = [
    { skill: "HTML", years: 3 },
    { skill: "CSS", years: 3 },
    { skill: "JavaScript", years: 3 },
    { skill: "React", years: 2 },
    { skill: "Git", years: 2 },
    { skill: "npm", years: 2 },
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
