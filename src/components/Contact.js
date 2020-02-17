import React, {Component, Fragment} from 'react';
import '../../public/css/formstyle.css';

export default class Contact extends Component {


  constructor(props) {
    
    super(props);

    this.state = { query: '', hits: [] };
  }

  onChange = event => {
    
    this.setState({ query: event.target.value });
  };

  onSearch = event => {
    
    event.preventDefault();

    const { query } = this.state;

    if (query === '') {
      return;
    }

    

    fetch('https://hn.algolia.com/api/v1/search?query=' + query)
      .then(response => response.json())
      .then(result => this.onSetResult(result, query));
  };

  onSetResult = (result, key) => {
    console.log(result.hits)
    this.setState({ hits: result.hits });
  };


    render(){
        return (
    <Fragment> 
      <div>
        

        {/* Search Input 
        <form onSubmit={this.onSearch}>
          <input type="text" onChange={this.onChange} />
          <button type="submit">Search</button>
        </form>*/}

          <form action="/action_page.php" className="form-class">
          <h2>Contact Us Form</h2>
          <div className="input-container">
          <i className="fa fa-user icon"></i>
          <input className="input-field" type="text" placeholder="First Name" name="firstname" />
          </div>

          <div className="input-container">
          <i className="fa fa-user icon"></i>
          <input className="input-field" type="text" placeholder="Last Name" name="lastname" />
          </div>

          <div className="input-container">
          <i className="fa fa-envelope icon"></i>
          <input className="input-field" type="text" placeholder="Email" name="email"/>
          </div>

          <div className="input-container">
          <i className="fa fa-user icon"></i>
          <input className="input-field" type="text" placeholder="Mobile No." name="mobileno" />
          </div>

         
          <textarea className="input-field txt-area"></textarea>
          

          <button type="submit" className="btn-submit">Submit</button>
          </form>



        {/* Result */}
        {this.state.hits.map(item => (
          <div key={item.objectID}>{item.title}</div>
        ))}
      </div>
    </Fragment>
        )
    }
}     