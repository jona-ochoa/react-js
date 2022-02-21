import Link from "next/link";
import React from "react";
import Layout from "../components/Layout";
import { Skills, experiences, projects } from "../profile";

const Index = () => {
  return (
    <Layout>
      <header className="row">
        <div className="col-md-12">
          <div className="card card-body bg-secondary text-light">
            <div className="row">
              <div className="col-md-4">
                <img src="jona.jfif" alt="" className="img-fluid" />
              </div>
              <div className="col-md-8">
                <h1>Jonatan Ochoa</h1>
                <h3>Fullstack Developer</h3>
                <p>
                  You can also use interpolation to create the path, which comes
                  in handy for dynamic route segments. For example, to show a
                  list of posts which have been passed to the component as a
                  prop:
                </p>
                <a href="hireme">Hire me</a>
              </div>
            </div>
          </div>
        </div>
      </header>
      <div className="row py-2">
        <div className="col-md-4">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Skills</h1>

              {Skills.map(({ skill, percentage }, i) => (
                <div className="py-3" key={i}>
                  <h5>{skill}</h5>
                  <div className="progress">
                    <div
                      className="preogress-bar"
                      role="progressbar"
                      style={{ width: `${percentage}%` }}
                      aria-valuenow="50"
                      aria-valuemin="0"
                      aria-valuemax="100"
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="col-md-8">
          <div className="card bg-light">
            <div className="card-body">
              <h1>Experience</h1>

              <ul>
                {experiences.map(({ title, from, to, description }, index) => (
                  <li key={index}>
                    <h3>{title}</h3>
                    <h5>
                      {from}-{to}
                    </h5>
                    <p>{description}</p>
                  </li>
                ))}
              </ul>
              <Link href="/blog">
                <a className="btn btn-primary">Know more</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-12">
          <div className="card card-body bg-dark">
            <div className="row">
              <div className="col-md-12">
                <h1 className="text-light text-center">Portfolio</h1>
              </div>

              {projects.map(({name,description,image}, i) => (
                <div className="col-md-4 p-3" key={i}>
                  <div className="card h-100">
                    <div className="overflow">
                    <img src={`/${image}`} alt="" className="card-img-top" />
                    </div>
                    <div className="card-body">
                      <h3>{name}</h3>
                      <p>{description}</p>
                      <a href="#!">Know More</a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
