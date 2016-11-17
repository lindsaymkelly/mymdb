class MoviesView extends React.Component {
  render(){
    return(
      <section id="movies-list">
      <h2>Movies:</h2>
        <ul>
          {
            this.props.data.map((movie, i) => {
              return <Movie data={movie} key={i} />
            })
          }
          </ul>
        </section>
      );
  }
}
