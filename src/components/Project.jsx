import PropTypes from 'prop-types'

export const Project = (props) => {

  const { title, description, link, github, image } = props

return (
<div className="col-12 col-md-6 col-lg-4">
<div className="card my-2" style={{ border: "4px solid black", height: '97%' } } >
    <h5 className="card-title">{title}</h5>
  <img
    className="card-img-top"
    src={image}
    alt="screenshot of webpage"
  />
  <div className="card-body">
    <p className="card-text">{description}</p>
    <a
        target="_blank"
        rel="noopener noreferrer"
        href={link}
        className="btn btn-dark"
      >
        Deployed Project
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={github}
        className="btn btn-dark"
      >
        Github Repo
      </a>
  </div>
</div>
</div>
)
}

Project.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  github: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
}