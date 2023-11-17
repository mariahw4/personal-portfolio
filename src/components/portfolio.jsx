
import projects from "./projects";
import { Project } from "./Project";


function Portfolio() {
    return (
      <>
        <div className="container py-4 px-4">
        <h2 className="h2" id="Portfolio">
          Portfolio:
        </h2>
        <h3>Example Projects:</h3>
        <div className="row">
      {projects.map((project) => ( 
        <Project key={project.title} description={project.description} title={project.title} image={project.image} github={project.github} link={project.link}/>
      ))}
      </div>
      </div>
      </>
    );
  }
  
  export default Portfolio;

// function Portfolio() {
//   return (
//     <>

//     <div>
//         <Projects title={project.title} github={project.github} image={project.image} description={project.description} link={project.link} />
//     </div>
    //   {
        /* <div className="container py-4 px-4">
        <h2 className="h2" id="Portfolio">
          Portfolio:
        </h2>
        <h3>Example Projects:</h3>

        <div className="row">
            <div className='col-12 col-md-6 col-lg-4'>
          <div
            className="card my-2"
            style={{ border: "4px solid navy", height: '97%' } }
          >
            <h5 className="card-title">Tech Blog App:</h5>
            <img
              className="card-img-top"
              src="/react-portfolio/images/tech-blog.png"
              alt="screenshot of webpage"
            />
            <div className="card-body">
              <p className="card-text">
                Full Stack project that enables users to post and comment on
                blog entries.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://tech-blog-application.herokuapp.com/"
                className="btn btn-dark"
              >
                Deployed Project
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mariahw4/14-Tech-Blog"
                className="btn btn-dark"
              >
                Github Repo
              </a>
            </div>
          </div>
          </div>
          <div className='col-12 col-md-6 col-lg-4'>
          <div
            className="card my-2"
            style={{ border: "4px solid navy", height: '97%' }}
          >
            <h5 className="card-title">Web API group project:</h5>
            <img
              className="card-img-top"
              src="/react-portfolio/images/webAPI.png"
              alt="screenshot of webpage"
            />
            <div className="card-body">
              <p className="card-text">
                App to search for movies and see details about the movie and
                actors.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mariahw4.github.io/MovieDetails/"
                className="btn btn-dark"
              >
                Deployed Project
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mariahw4/MovieDetails"
                className="btn btn-dark"
              >
                Github Repo
              </a>
            </div>
          </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
            <div
              className="card my-2"
              style={{ border: "4px solid navy", height: '97%' }}
            >
              <h5 className="card-title">Workday Scheduler: </h5>
              <img
                className="card-img-top"
                src="/react-portfolio/images/workday-scheduler.png"
                alt="screenshot of webpage"
              />
              <div className="card-body">
                <p className="card-text">
                  Scheduling Application to enable a user to track their daily
                  actities by the hour.
                </p>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://mariahw4.github.io/05-workday-scheduler/"
                  className="btn btn-dark"
                >
                  Deployed Project
                </a>
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/mariahw4/05-workday-scheduler"
                  className="btn btn-dark"
                >
                  Github Repo
                </a>
              </div>
            </div>
            </div>
            <div className="col-12 col-md-6 col-lg-4">
              <div
                className="card my-2"
                style={{ border: "4px solid navy", height: '97%' }}
              >
                <h5 className="card-title">Weather Dashboard:</h5>
                <img
                  className="card-img-top"
                  src="/react-portfolio/images/weather-dashboard.png"
                  alt="screenshot of webpage"
                />
                <div className="card-body">
                  <p className="card-text">
                    Search for weather data by city. Current and 5-day weather
                    is displayed. Recent searches are saved in local storage so
                    they can be revisited.
                  </p>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://mariahw4.github.io/06-weather-dashboard/"
                    className="btn btn-dark"
                  >
                    Deployed Project
                  </a>
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://github.com/mariahw4/06-weather-dashboard"
                    className="btn btn-dark"
                  >
                    Github Repo
                  </a>
                </div>
              </div>
            </div>
        <div className="col-12 col-md-6 col-lg-4">
          <div
            className="card my-2"
            style={{ border: "4px solid navy", height: '97%' }}
          >
            <h5 className="card-title">Password Generator: </h5>
            <img
              className="card-img-top"
              src="/react-portfolio/images/password-generator.png"
              alt="screenshot of webpage"
            />
            <div className="card-body">
              <p className="card-text">
                Password generator allowing users to create a password that
                meets specific criteria.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mariahw4.github.io/03-javascript-password-generator/"
                className="btn btn-dark"
              >
                Deployed Project
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mariahw4/03-javascript-password-generator"
                className="btn btn-dark"
              >
                Github Repo
              </a>
            </div>
          </div>
          </div>
          <div className="col-12 col-md-6 col-lg-4">
          <div
            className="card my-2"
            style={{ border: "4px solid navy", height: '97%' }}
          >
            <h5 className="card-title">Basic Portfolio: </h5>
            <img
              className="card-img-top"
              src="/react-portfolio/images/early-portfolio.png"
              alt="screenshot of webpage"
            />
            <div className="card-body">
              <p className="card-text">
                This is my first generation portfolio with links to more
                projects I have completed.
              </p>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://mariahw4.github.io/02-professional-portfolio/"
                className="btn btn-dark"
              >
                Deployed Project
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href="https://github.com/mariahw4/02-professional-portfolio"
                className="btn btn-dark"
              >
                Github Repo
              </a>
            </div>
          </div>
          </div>
        </div>
        </div> */
    // }

//     </>
//   );
// }

// export default Portfolio;
