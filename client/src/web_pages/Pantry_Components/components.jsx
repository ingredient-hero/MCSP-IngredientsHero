import React from 'react';
import ReactDOM from 'react-dom';
import Axios from 'axios';

class App extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
          item = ''
      };
  };

  componentDidMount(){
      let foods = [];
      Axios.get('/Foods')
        .then((response) => {
          response.data.map(function(element, index){
              let items = [];
              items.push(element.Item);
              foods.push(items);
          })
        })
  };

  render () {
    return (
        <div>
            <h1>Pantry</h1>
            {this.state.item.map(function(element, index){
                if (index < this.state.item.length){
                  return <div>
                  <ul>
                    <li>{element[0]}</li>
                    <li>{element[1]}</li>
                  </ul>
                </div>
                }
              }
            )}
        </div>
    )
  }
}

ReactDOM.render();
