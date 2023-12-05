// Iteration-1

let container = document.getElementById("react-container")
// ReactDOM.render("Hello! Welcome to React",container)



// Iteration-2

function RectContainer(){
  return React.createElement(
    'h1',
    {id: "h1-tag"},
    'Hello!',
    React.createElement('div',null,"Welcome to react")
    )
   
  }
  // ReactDOM.render(RectContainer() , container)


  // Iteration-3

  class KalviumContainer extends React.Component{
    render(){
      return (
        React.createElement(
          'h1',
          {id: "h1-tag"},
          'Hello!',
          React.createElement('div',null,"Welcome to react")
          )
      )
    }
  }
  ReactDOM.render(React.createElement(KalviumContainer), container)