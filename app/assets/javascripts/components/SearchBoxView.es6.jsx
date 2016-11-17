class SearchBoxView extends React.Component {
  handleSubmit(event){
    event.preventDefault();
    let search = this.refs.searchField.value;
    $.ajax({
      url: `http://www.omdbapi.com/?s=${search}`,
      method: 'get'
    })
    .done(function(response){
      console.log(response);
      this.props.onUpdate(response.Search);
    }.bind(this))
  }
  render(){
    return(
      <div className="searchBar">
        <form onSubmit={this.handleSubmit.bind(this)}>
          <span className="searchText">Search for a movie: </span><br/>
          <input ref="searchField" type="text" name="query"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
      )
  }
}
