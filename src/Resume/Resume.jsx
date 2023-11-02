import "./Resume.css";
import React, { useRef } from "react";
import jsPDF from "jspdf";
import html2canvas from "html2canvas";
import photo from "./sneha.JPG";
import { BiSolidPhoneCall } from "react-icons/bi";
import { GrMail } from "react-icons/gr";
import { FaLocationDot } from "react-icons/fa6";
import { BsGithub } from "react-icons/bs";
import { GoDotFill } from "react-icons/go";

const Resume = () => {
  const page1Ref = useRef();
  const page2Ref = useRef();

  const handleDownloadClick = () => {
    const pdf = new jsPDF();

    // Generate the PDF for page 1
    html2canvas(page1Ref.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0); // Assuming the width of A4 page
      pdf.addPage();

      // Generate the PDF for page 2
      html2canvas(page2Ref.current).then((canvas) => {
        const imgData = canvas.toDataURL("image/png");
        pdf.addImage(imgData, "PNG", 10, 10, 190, 0); // Assuming the width of A4 page

        // Save the PDF with both pages
        pdf.save("resume.pdf");
      });
    });
  };

  return (
    <div className="snehal">
      <h2 className="title">Snehal Bhor CV</h2>
      <div ref={page1Ref}>
        <div className="akshay">
          <div className="page1main">
            <div className="part1">
              <div className="part1A">
                <div className="sub1">
                  <img src={photo} alt="" />
                </div>
                <div className="sub2">
                  <div className="child-div1">SNEHAL BHOR</div>
                  <div className="child-div2">
                    <br />
                    As a recent graduate with a background in life sciences and
                    a newfound passion for the IT field, I am eager to embark on
                    a dynamic journey in technology. Armed with skills in
                    React.js, Python, HTML, CSS, Git, GitHub, Docker,
                    Kubernetes, Jenkins, MongoDB, and a strong foundation in
                    scientific methodologies, I am committed to leveraging my
                    analytical mindset and adaptability to contribute to
                    innovative IT projects.I am excited to learn and grow in
                    this fast-paced and ever-evolving industry.
                  </div>
                </div>
              </div>
            </div>
            <div className="part2">
              <div className="part2child">
                <div className="icon-container">
                  <GrMail size={30} className="design" />
                </div>
                <div className="text-container">
                  mail :{" "}
                  <a href="mailto:snehalsp65@gmail.com">snehalsp65@gmail.com</a>
                </div>
              </div>

              <div className="part2child">
                <div className="icon-container">
                  <BiSolidPhoneCall size={30} className="design" />
                </div>
                Call : 9607851094
              </div>

              <div className="part2child">
                <div className="icon-container">
                  <FaLocationDot size={30} className="design" />
                </div>
                Location : Pune
              </div>

              <div className="part2child">
                <div className="icon-container">
                  <BsGithub size={30} className="design" />
                </div>
                github link :{" "}
                <a href="https://github.com/snehalbhor?tab=repositories">
                  https://github.com/snehalbhor
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="part3">
          <div className="title-1">
            <h3 className="h3-design">Technical Skill Set</h3>
          </div>
        </div>

        <div className="part3main">
            <div className="mainA">
              <div className="mainA-child-1">
                {" "}
                <img src="./pythonlogo.png" alt="" className="src" />
              </div>
              <div className="mainA-child-2">PYTHON</div>
            </div>
            <div className="mainB">
              <div className="dot">
                <GoDotFill size={25} /> I am well-versed in working with
                Python's fundamental data types, such as lists, tuples, and
                variables, enabling me to efficiently manage and manipulate
                data.
              </div>
              <div className="dot">
                <GoDotFill size={25} /> I have a solid grasp of control
                structures like loops and conditional statements, which allows
                me to create logical and iterative solutions to complex
                problems.
              </div>
              <div className="dot">
                <GoDotFill size={25} /> I have gained expertise in creating and
                utilizing functions to modularize code, making it more organized
                and reusable.
              </div>
              <div className="dot">
                <GoDotFill size={25} /> I have engaged in practical learning by
                solving variety of Python programming exercises, which I have
                documented and shared on GitHub repository under the project
                name 'python exercise.'
              </div>
            </div>
          </div>

        <div className="part3main">
            <div className="mainA">
              <div className="mainA-child-1">
                {" "}
                <img src="./download.png" alt="" className="src6" />
              </div>
              <div className="mainA-child-2">REACT.JS</div>
            </div>
            <div className="mainB">
              <div className="dot">
                <GoDotFill size={25} />I have acquired comprehensive knowledge
                of React.js, starting with the creation of React applications
                and the installation of extensions and libraries to enhance the
                development environment.
              </div>
              <div className="dot">
                <GoDotFill size={25} /> I am proficient in building both
                class-based and functional components in React, allowing me to
                create dynamic and interactive user interfaces.{" "}
              </div>
              <div className="dot">
                <GoDotFill size={25} />I have a strong grasp of React's hooks,
                including useState, useEffect, and useRef, enabling me to manage
                component state and side effects efficiently.
              </div>
              <div className="dot">
                <GoDotFill size={25} /> I have done some projects, available on
                my GitHub. Some are pure frontend applications as well as those
                integrated with backend services.
              </div>
            </div>
          </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./html.avif" alt="" className="src2" />
            </div>
            <div className="mainA-child-2">HTML</div>
          </div>
          <div className="mainB">
            <div className="dot">
              <GoDotFill size={25} />I have a strong foundation in HTML, which
              is the backbone of web development,{" "}
            </div>
            <div className="dot">
              <GoDotFill size={25} />I prioritize the use of semantic HTML
              elements to enhance accessibility and search engine optimization,
              ensuring that web content is easily understandable and navigable
            </div>
            <div className="dot">
              <GoDotFill size={25} />I have experience in creating HTML forms
              and implementing client-side input validation to enhance user
              interactivity and data integrity
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./download (1).png" alt="" className="src04" />
            </div>
            <div className="mainA-child-2">CSS</div>
          </div>
          <div className="mainB">
            <div className="dot">
              <GoDotFill size={25} />I have a solid understanding of CSS
              (Cascading Style Sheets) and its pivotal role in web design,
              enabling me to enhance the visual appeal and layout of web
              content.
            </div>
            <div className="dot">
              <GoDotFill size={25} />I excel in applying CSS to style and format
              web elements, achieving aesthetically pleasing designs and layouts
              that resonate with the desired user experience.
            </div>
            <div className="dot">
              <GoDotFill size={25} />I have applied my CSS skills in various
              projects hosted on my GitHub repository, where I've crafted
              visually appealing and well-designed user interfaces.{" "}
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./MongoDB.jpg" alt="" className="src3" />
            </div>
            <div className="mainA-child-2">MongoDB</div>
          </div>
          <div className="mainB">
            <div className="dot1">
              <GoDotFill size={25} />I am proficient in creating and managing
              MongoDB databases, collections, and documents, ensuring efficient
              data storage and retrieval
            </div>
            <div className="dot1">
              <GoDotFill size={25} />I have completed a project on GitHub that
              utilizes MongoDB as the database backend, showcasing my practical
              application of MongoDB in real-world scenarios.{" "}
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./expresslogo.png" alt="" className="src4" />
            </div>
            <div className="mainA-child-2">EXPRESS.JS</div>
          </div>
          <div className="mainB">
            <div className="dot1">
              <GoDotFill size={25} />I can create simple routes in Express.js to
              handle HTTP requests, providing a foundation for building web
              applications.
            </div>
            <div className="dot1">
              <GoDotFill size={25} />I am familiar with using middleware
              functions in Express.js to execute tasks during the
              request/response cycle.
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./ai.jpg" alt="" className="src5" />
            </div>
            <div className="mainA-child-2">ARTIFICIAL INTELEGENCE (Basics)</div>
          </div>
          <div className="mainB">
            <div className="dot1">
              <GoDotFill size={25} />I have a foundational understanding of
              artificial intelligence (AI) and its core principles, encompassing
              the simulation of human-like intelligence in machines.
            </div>
            <div className="dot1">
              <GoDotFill size={25} />I am familiar with the fundamentals of
              machine learning, which is a subset of AI, including supervised
              learning, unsupervised learning, and reinforcement learning.
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./Git.png" alt="" className="src6" />
            </div>
            <div className="mainA-child-2">GIT</div>
          </div>
          <div className="mainB">
            <div className="dot">
              <GoDotFill size={25} />I am proficient in using Git, a widely
              adopted version control system, to track changes in code and
              collaborate effectively with development teams.
            </div>
            <div className="dot">
              <GoDotFill size={25} />I have a strong understanding of version
              control concepts, enabling me to manage code changes, track
              history, and collaborate on projects efficiently.
            </div>
            <div className="dot">
              <GoDotFill size={25} />I have a habit of making regular code
              commits to Git repositories, ensuring that project progress.
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./GitHub.png" alt="" className="src6" />
            </div>
            <div className="mainA-child-2">GIThub</div>
          </div>
          <div className="mainB">
            <div className="dot">
              <GoDotFill size={25} />I am familiar with using GitHub as a
              collaborative platform for hosting Git repositories, enabling me
              to contribute to open-source projects and collaborate with other
              developers.
            </div>
            <div className="dot">
              <GoDotFill size={25} />I can work effectively with team members
              using Git, resolving conflicts, reviewing pull requests, and
              ensuring smooth collaboration in a distributed development
              environment.
            </div>
            <div className="dot">
              <GoDotFill size={25} />
              My regular code commits and use of Git have saved projects from
              potential code disasters, as it provides a reliable and organized
              history of changes and helps in code recovery.
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./docker.png" alt="" className="src8" />
            </div>
            <div className="mainA-child-2">DOCKER</div>
          </div>
          <div className="mainB">
            <div className="dot1">
              <GoDotFill size={25} />I am proficient in Docker, a
              containerization platform, and use it to package and deploy
              applications, ensuring consistency and portability across
              different environments.
            </div>
            <div className="dot1">
              <GoDotFill size={25} />I have utilized Docker in projects hosted
              on GitHub, demonstrating my practical knowledge of
              containerization and its benefits in application development and
              deployment.
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./kubernetes.jpg" alt="" className="src8" />
            </div>
            <div className="mainA-child-2">KUBERNETES</div>
          </div>
          <div className="mainB">
            <div className="dot1">
              <GoDotFill size={25} />I am proficient in Kubernetes, an
              open-source container orchestration platform, and use it to
              automate the deployment, scaling, and management of containerized
              applications.
            </div>
            <div className="dot1">
              <GoDotFill size={25} />I have employed Kubernetes in projects
              hosted on GitHub, showcasing my practical experience with
              container orchestration and the management of complex application
              environments.
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./Jenkins.png" alt="" className="src6" />
            </div>
            <div className="mainA-child-2">JENKINS</div>
          </div>
          <div className="mainB">
            <div className="dot">
              <GoDotFill size={25} />I am proficient in Jenkins, an open-source
              automation server, and I leverage its capabilities to automate and
              streamline various aspects of the software development and
              deployment lifecycle.
            </div>
            <div className="dot">
              <GoDotFill size={25} />I can integrate Jenkins with version
              control systems like GitHub, allowing for automatic builds and
              tests triggered by code changes and pull requests.
            </div>
            <div className="dot">
              <GoDotFill size={25} />I have integrated Jenkins into projects
              hosted on GitHub, showcasing my practical experience with
              continuous integration and deployment automation, and the role
              Jenkins plays in efficient software development.
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./jira.jpg" alt="" className="src11" />
            </div>
            <div className="mainA-child-2">JIRA</div>
          </div>
          <div className="mainB">
            <div className="dot1">
              <GoDotFill size={25} />I am proficient in Jira, a widely used
              project management and issue tracking tool, and use it to
              facilitate project planning, tracking, and collaboration.
            </div>
            <div className="dot1">
              <GoDotFill size={25} />I use Jira's reporting and dashboard
              features to track project progress,{" "}
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./download (2).png" alt="" className="src12" />
            </div>
            <div className="mainA-child-2">FAST API</div>
          </div>
          <div className="mainB">
            <div className="dot1">
              <GoDotFill size={25} />I have started exploring FastAPI, a Python
              web framework for building APIs, and I'm in the early stages of
              learning its fundamental concepts and features.
            </div>
            <div className="dot1">
              <GoDotFill size={25} />I have created simple APIs using FastAPI to
              understand how routing, request handling, and response generation
              work.
            </div>
          </div>
        </div>

        <div className="part3main">
          <div className="mainA">
            <div className="mainA-child-1">
              {" "}
              <img src="./flask.png" alt="" className="src13" />
            </div>
            <div className="mainA-child-2">FLASK</div>
          </div>
          <div className="mainB">
            <div className="dot1">
              <GoDotFill size={25} />I have begun my journey with Flask, a micro
              web framework for Python, and I am in the early stages of
              familiarizing myself with its core concepts.
            </div>
            <div className="dot1">
              <GoDotFill size={25} />I am familiar with setting up basic routes
              and handling HTTP requests and responses in Flask applications.
            </div>
          </div>
        </div>
      </div>

      {/* part---4    experience */}

      <div className="part4">
        <div className="title-4">
          <h3 className="h3-design4">Experience</h3>
        </div>
      </div>


      <div ref={page2Ref}>
        <div className="akshay2"></div>
        {/* Add the content for page 2 here */}
      </div>
      <div>
        <button onClick={handleDownloadClick}>Download as PDF</button>
      </div>
    </div>
  );
};

export default Resume;
