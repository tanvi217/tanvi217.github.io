import React from "react";

const techStack = [
  { name: "Python", icon: "devicon-python-plain colored" },
  { name: "C++", icon: "devicon-cplusplus-plain colored" },
  { name: "C#", icon: "devicon-csharp-plain colored" },
  { name: "Java", icon: "devicon-java-plain colored" },
  { name: "React", icon: "devicon-react-original colored" },
  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
  { name: ".NET", icon: "devicon-dot-net-plain-wordmark colored" },
  { name: "Spring Boot", icon: "devicon-spring-plain colored" },
  { name: "Django", icon: "devicon-django-plain colored" },
  { name: "MySQL", icon: "devicon-mysql-plain colored" },
  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
  { name: "Azure", icon: "devicon-azure-plain colored" },
  { name: "Docker", icon: "devicon-docker-plain colored" },
  { name: "Kubernetes", icon: "devicon-kubernetes-plain colored" },
  { name: "Git", icon: "devicon-git-plain colored" },
];

const TechStack: React.FC = () => {
  return (
    <section id="tech-stack" className="tech-stack">
      <h1 className="mb-4 text-4xl font-normal tracking-normal xl:text-5xl">🧰 Tech Stack</h1>
      <h4>Here are the tools and technologies I work with</h4>
      <br />
      <div className="tech-icons">
        {techStack.map((tech) => (
          <i
            key={tech.name}
            className={`tech-icon ${tech.icon}`}
            title={tech.name}
            aria-label={tech.name}
          ></i>
        ))}
      </div>
    </section>
  );
};

export default TechStack;
