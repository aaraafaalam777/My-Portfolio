import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "../components/ProjectCard.js";
import projImg1 from "../Assets/Login_Page.png";
import projImg2 from "../Assets/Student Dashboard.png";
import projImg3 from "../Assets/Quiz_App.png";
import projImg4 from "../Assets/Sign_Up.png";
import projImg5 from "../Assets/Budget Allocation.png";
import colorSharp2 from "../Assets/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {

  const projects = [
    {
      title: "Login Page",
      description: "Design & Development",
      imgUrl: projImg1,
    },
    {
      title: "Student Dashboard",
      description: "Design & Development",
      imgUrl: projImg2,
    },
    {
      title: "Quiz App",
      description: "Design & Development",
      imgUrl: projImg3,
    },
    {
      title: "Sign Up Page",
      description: "Design & Development",
      imgUrl: projImg4,
    },
    {
      title: "Budget Allocation",
      description: "Design & Development",
      imgUrl: projImg5,
    },

  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
              <div className={isVisible ? "animate__animated animate__fadeIn": ""}>
                <h2>Projects</h2>
                <p>As a MERN Stack Developer at a reputed organization, I’ve worked on several projects that demonstrate my expertise.
                   One such project involved building a dynamic web application using React.js for the frontend, Node.js and Express.js for backend, and MongoDB for data storage.
                   My role included creating RESTful APIs, managing state with Redux, and optimizing performance. Additionally, I hold certifications and have knowledge in IoT, LLM, and AI, which I’ve applied in various aspects of my projects.
                   This diverse experience has equipped me with a strong skill set and the ability to deliver high-quality work.<br></br>
                   Here are a list of my personal projects ...</p>
                <Tab.Container id="projects-tabs" defaultActiveKey="first">
                  <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                    <Nav.Item>
                      <Nav.Link eventKey="first">Tab 1</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="second">Tab 2</Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                      <Nav.Link eventKey="third">Tab 3</Nav.Link>
                    </Nav.Item>
                  </Nav>
                  <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                    <Tab.Pane eventKey="first">
                      <Row>
                        {
                          projects.map((project, index) => {
                            return (
                              <ProjectCard
                                key={index}
                                {...project}
                                />
                            )
                          })
                        }
                      </Row>
                    </Tab.Pane>
                    <Tab.Pane eventKey="second">
                      <p>More projects on their way ...</p>
                    </Tab.Pane>
                    <Tab.Pane eventKey="third">
                      <p>More projects on their way ...</p>
                    </Tab.Pane>
                  </Tab.Content>
                </Tab.Container>
              </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2}></img>
    </section>
  )
}