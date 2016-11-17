class App extends React.Component {
  constructor(){
    super();
    this.state = {
      movies: []
    }
  }

updateMovies(searchedMovies){
  this.setState({
    movies: searchedMovies
  })
}

  render(){
    return(
      <div>
        <WelcomeView/>
        <SearchBoxView onUpdate={this.updateMovies.bind(this)}/>
        <MoviesView data={this.state.movies}/>
      </div>
      )
  }
}
