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

   
    html2canvas(page1Ref.current).then((canvas) => {
      const imgData = canvas.toDataURL("image/png");
      pdf.addImage(imgData, "PNG", 10, 10, 190, 0); 
      pdf.addPage();
    
      html2canvas(page2Ref.current).then((canvas2) => {
        const imgData2 = canvas2.toDataURL("image/png");
        pdf.addImage(imgData2, "PNG", 10, 10, 190, 0); 
        pdf.save("resume.pdf");
      });
    });
  };

  return (
    <div className="snehal">
      <div ref={page1Ref}>
        <h2 className="title">Snehal Bhor CV</h2>

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

        {/* part----3      Resume */}

        <div className="part3">
          <div className="title-1">
            <h3 className="h3-design">Technical Skill Set</h3>
          </div>

          <div className="part3main">
            <div className="mainA">
              <div className="mainA-child-1">
                {" "}
                <img src="./pythonlogo.png" alt="" className="python1"/>
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
                is the backbone of web development.{" "}
              </div>
              <div className="dot">
                <GoDotFill size={25} />I prioritize the use of semantic HTML
                elements to enhance accessibility and search engine
                optimization, ensuring that web content is easily understandable
                and navigable.
              </div>
              <div className="dot">
                <GoDotFill size={25} />I have experience in creating HTML forms
                and implementing client-side input validation to enhance user
                interactivity and data integrity.
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
                <GoDotFill size={25} />I excel in applying CSS to style and
                format web elements, achieving aesthetically pleasing designs
                and layouts that resonate with the desired user experience.
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
                MongoDB databases, collections, and documents, ensuring
                efficient data storage and retrieval.
              </div>
              <div className="dot1">
                <GoDotFill size={25} />I have completed a project on GitHub that
                utilizes MongoDB as the database backend, showcasing my
                practical application of MongoDB in real-world scenarios.{" "}
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
                <GoDotFill size={25} />I can create simple routes in Express.js
                to handle HTTP requests, providing a foundation for building web
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
              <div className="mainA-child-2">
                ARTIFICIAL INTELEGENCE (Basics)
              </div>
            </div>
            <div className="mainB">
              <div className="dot1">
                <GoDotFill size={25} />I have a foundational understanding of
                artificial intelligence (AI) and its core principles,
                encompassing the simulation of human-like intelligence in
                machines.
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
                potential code disasters, as it provides a reliable and
                organized history of changes and helps in code recovery.
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
                automate the deployment, scaling, and management of
                containerized applications.
              </div>
              <div className="dot1">
                <GoDotFill size={25} />I have employed Kubernetes in projects
                hosted on GitHub, showcasing my practical experience with
                container orchestration and the management of complex
                application environments.
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="part4" ref={page2Ref}>
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
              features to track project progress.{" "}
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

        {/* part4-------- experience */}

        <div className="part3">
          <div className="title-1">
            <h3 className="h3-design">Experience</h3>
          </div>
          <div className="div1st">
            <div className="stone1">
              <div className="onechild1">
                <strong>Research Techician : </strong> As I have life science
                background I was working in research field in Linq Therapeutics
                Pvt Ltd.(Jehangir Clinical Development Centre, Pune)
              </div>
              <br />
              <div className="onechild2">
                <strong>Duration : </strong> September 2021 To July 2022
              </div>
            </div>

            <div className="stone1">
              <div className="onechild1">
                <strong>Research Techician : </strong> As I have life science
                background I was working in research field in Linq Therapeutics
                Pvt Ltd.(Jehangir Clinical Development Centre, Pune)
              </div>
              <br />
              <div className="onechild2">
                <strong>Duration : </strong> September 2021 To July 2022
              </div>
            </div>
          </div>
        </div>

        {/* part 5---------education */}
        <div className="part5">
          <div className="title-1">
            <h3 className="h3-design">Education</h3>
          </div>
          <div className="div1st">
            <div className="p5A">
              <div className="childA">
                10th
              </div>
              <div className="childB">
                <strong>Year:</strong>2012
              </div>
              <div className="childC">
                <strong>School:</strong>Santuknath English Vidyalaya Jeur (Ba.),
                Ahmednagar
              </div>
              <div className="childD">
                <strong>Marks:</strong>68.73%
              </div>
            </div>

            <div className="p5A">
              <div className="childA">
               12th
              </div>
              <div className="childB">
                <strong>Year:</strong>2014
              </div>
              <div className="childC">
                <strong>College:</strong>Radhabai Kale Mahila Mahavidyalaya,
                Ahmednagar
              </div>
              <div className="childD">
                <strong>Marks:</strong>49.38%
              </div>
            </div>

            <div className="p5A">
              <div className="childA">
               Bachelor of Science (Microbiology)
              </div>
              <div className="childB">
                <strong>Year:</strong>2018
              </div>
              <div className="childC">
                <strong>College:</strong>B.P.H Education Society's Ahmednagar
                College, Ahmednagar
              </div>
              <div className="childD">
                <strong>Marks:</strong>59.78%
              </div>
            </div>

            <div className="p5A">
              <div className="childA">
                Masters of Science (Microbiology)
              </div>
              <div className="childB">
                <strong>Year:</strong>2020
              </div>
              <div className="childC">
                <strong>College:</strong>Sinhgad College of Science, Pune
              </div>
              <div className="childD">
                <strong>Marks:</strong>59.85%
              </div>
            </div>
          </div>
        </div>

        {/* Part  6--------Projects */}

        <div className="title-1">
          <h3 className="h3-design">Projects</h3>
        </div>

        <div className="subdivr-2">
          <div className="decr-2">
            <strong>Project 01: </strong>I have developed a project entitled
            "Financial Management UI" using a combination of React for the
            frontend, CSS for styling, and HTML for structuring the user
            interface.
          </div>
          <a
            href="https://github.com/snehalbhor/p01-core-css-react-financial-management-ui"
            className="btnnr-1"
          >
            GitHub Link
          </a>
        </div>

        <div className="subdivr-2">
          <div className="decr-2">
            <strong>Project 02: </strong>I have successfully addressed a series
            of questions exclusively utilizing React.js.
          </div>
          <a
            href="https://github.com/snehalbhor/p02-react-exercise"
            className="btnnr-1"
          >
            GitHub Link
          </a>
        </div>

        <div className="subdivr-2">
          <div className="decr-2">
            <strong>Project 03: </strong>In this project I took some questions
            from python related to function, for loop, list, tuple etc. for
            practice purpose.
          </div>
          <a
            href="https://github.com/snehalbhor/p05-python-exercise"
            className="btnnr-1"
          >
            GitHub Link
          </a>
        </div>

        <div className="subdivr-2">
          <div className="decr-2">
            <strong>Project 04: </strong>In this project I used React JS,
            javascript, html, css. Through this project I gained valuable
            experience in building website and user interface design
          </div>
          <a
            href="https://github.com/snehalbhor/p04-css-project"
            className="btnnr-1"
          >
            GitHub Link
          </a>
        </div>

        <div className="subdivr-2">
          <div className="decr-2">
            <strong>Project 05: </strong>
            In the development of this project, I used many of technologies,
            including React JS, JavaScript, HTML, CSS, Python, as well as
            containerization through Docker and orchestration with Kubernetes.
            For automation and continuous integration, Jenkins was used in our
            deployment pipeline.
          </div>
          <a
            href="https://github.com/snehalbhor/p09-deployment-docker-kubernets-jenkins-react-python-deep-learning"
            className="btnnr-1"
          >
            GitHub Link
          </a>
        </div>

        <div className="subdivr-2">
          <div className="decr-2">
            <strong>Project 06: </strong>This included React JS, HTML, and
            Python for building the application, and I used Docker to package it
            and Kubernetes to manage it.
          </div>
          <a
            href="https://github.com/snehalbhor/p07-deployment-docker-react-python-deep-learning"
            className="btnnr-1"
          >
            GitHub Link
          </a>
        </div>

        <div className="subdivr-2">
          <div className="decr-2">
            <strong>Project 07: </strong>This included React JS and HTML for the
            user interface, and Python with Flask for the back-end.
          </div>
          <a
            href="https://github.com/snehalbhor/p06-react-python-flask-deep-learning-ai"
            className="btnnr-1"
          >
            GitHub Link
          </a>
        </div>

        <div className="subdivr-2">
          <div className="decr-2">
            <strong>Project 08: </strong> This portfolio project showcases a
            comprehensive integration of various technologies that I've acquired
            expertise in. It encompasses React for the dynamic front-end, HTML
            and CSS for web structure and design, and Python for versatile
            back-end capabilities. The project's aim was to demonstrate a wide
            range of acquired skills and knowledge in a single, cohesive
            showcase.
          </div>
          <a
            href="https://github.com/snehalbhor/p03-Snehal-Bhor-portfolio"
            className="btnnr-1"
          >
            GitHub Link
          </a>
        </div>

        {/* part   7---------next 5 years goal */}
        <div className="title-1">
          <h3 className="h3-design">Next Five Year Goals</h3>
        </div>

        <div className="subdivn-2">
          <div className="decn-2">
          <GoDotFill size={25} /><strong >Continuous Learning:</strong>Over the next five years, I aspire to engage in ongoing learning and development to enhance my skill set and knowledge.<br/>
          <GoDotFill size={25} /><strong>Technical Officer Role:</strong>My goal is to secure a position as a technical officer in a reputable organization, contributing my expertise to its success.<br/>
          <GoDotFill size={25} /><strong>Self-Improvement: </strong>I am committed to self-improvement in all aspects of life, striving for personal growth and a steady career progression.<br/>
          <GoDotFill size={25} /><strong>Spousal Support: </strong>My spouse is a significant source of inspiration and support, motivating me to explore new horizons and providing encouragement in my career pursuits.<br/>
          <GoDotFill size={25} /><strong>Family Planning: </strong>For the next five years, my spouse and I have chosen not to have children, allowing us to focus on our personal and professional growth.
          </div>
         
        </div>


      </div>

      <div>
        <button onClick={handleDownloadClick}>Download as PDF</button>
      </div>
    </div>
  );
};

export default Resume;
