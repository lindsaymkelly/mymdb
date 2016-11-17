class Movie extends React.Component {
  render() {
    let data = this.props.data
    return(
      <li className="movie">
        <img className="poster" src={data.Poster} alt=""/>
        <div className="movie-details">
          <p>
            <span className="title">{data.Title}</span>
            <br/>
            <span className="year">{data.Year}</span>
            <br/>
            <br/>
          </p>
        </div>
      </li>
    )
  }
}
