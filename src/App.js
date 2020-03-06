/* eslint-disable react/prefer-stateless-function */
import React from 'react';

// import Header from './components/Header';
// import TodoList from './components/TodoList';
// import Footer from './components/Footer';

// function App() {
//   return (
//     <div>
//       <Header />
//       <TodoList />
//       <Footer />
//     </div>
//   );
// }

class App extends React.Component {
  myMethod() {
    this.testing = `Some Headline Text`;
    return this.testing;
  }

  render() {
    const importing = this.myMethod();
    return (
      <div>
        <h1>{importing}</h1>
      </div>
    );
  }
}

export default App;
