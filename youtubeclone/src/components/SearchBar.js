import React from 'react';

class SearchBar extends React.Component{
     constructor(){
         super();
         this.state= {
              term: ''
         }
     }

      searchVideo =(event) =>{
            event.preventDefault();
           this.props.searchTerm(this.state.term);
      }

      render(){
          return(
              <div>
                   <form>
                       <input size="100" type="text" onChange={ (event) => {this.setState({term:event.target.value})}} name="term"></input>
                        <button onClick={ this.searchVideo}>Search</button>
                   </form>

                   {this.state.term}
              </div>
          )
      }
}
export default SearchBar;