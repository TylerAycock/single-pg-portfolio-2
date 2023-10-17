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
     <svg className="rings skills__rings" xmlns="http://www.w3.org/2000/svg" width="530" height="129"><g fill="none" fill-rule="evenodd" stroke="#FFF" opacity=".25"><ellipse cx="265" cy="40" rx="264.5" ry="39.5"/><ellipse cx="265" cy="52" rx="264.5" ry="39.5"/><ellipse cx="265" cy="65" rx="264.5" ry="39.5"/><ellipse cx="265" cy="77" rx="264.5" ry="39.5"/><ellipse cx="265" cy="89" rx="264.5" ry="39.5"/></g></svg>
    </section>
  );
};

export default Skills;
