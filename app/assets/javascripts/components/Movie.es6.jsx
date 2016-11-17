class Movie extends React.Component {
  render() {
    let data = this.props.data
    return(
      <li className="movie">
        <p>
          <span className="title">{data.title}</span>
          <span className="year">{data.year}</span>
          <span className="rated">{data.rated}</span>
          <span className="genre">{data.genre}</span>
        </p>
        <p>{data.plot}</p>
      </li>
    )
  }
}
