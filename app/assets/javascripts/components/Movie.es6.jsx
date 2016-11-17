class Movie extends React.Component {
  render() {
    let data = this.props.data
    let imdb = "http://www.imdb.com/title/" + data.imdbID
    return(
      <li className="movie">
        <img className="poster" src={data.Poster} alt=""/>
        <div className="movie-details">
          <p>
            <span className="title">{data.Title}</span>
            <br/>
            <span className="year">{data.Year}</span>
            <br/>
            <a href={imdb}>IMDB</a>
            <br/>
            <br/>
          </p>
        </div>
      </li>
    )
  }
}
