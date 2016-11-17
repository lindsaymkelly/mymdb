class SearchBoxView extends React.Component {
  handleSubmit(event){
    event.preventDefault();
    let search = this.refs.searchField.value;
    $.ajax({
      url: `http://www.omdbapi.com/?s${search}`,
      method: 'get'
    })
    .done(function(response){
      console.log(response);
      this.props.onUpdate(response);
    }.bind(this))
  }
  render(){
    return(
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          Search for a movie: <br/>
          <input ref="searchField" type="text" name="query"/>
          <input type="submit" value="Search"/>
        </form>
      </div>
      )
  }
}
