class Movie extends React.Component {
  render() {
    let data = this.props.data
    return(
      <li className="movie">
        <img className="poster" src={data.Poster} alt=""/>
        <p>
          <span className="title">{data.Title}</span>
          <br/>
          <span className="year">{data.Year}</span>

        </p>
        <p>{data.Plot}</p>
      </li>
    )
  }
}
