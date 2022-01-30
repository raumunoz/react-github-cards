//import logo from './logo.svg';
import Header from './components/Header';
import Form from './components/Form';
import CardList from './components/CardList';
import React from 'react';
import './App.scss';
const titulo="Usuarios github"
class App extends React.Component {

  state={
    profiles:[],
  }
  addNewProfile=(profileData)=>{
    console.log("Add New");
    this.setState(prevState=>({
      //se concatena prevState con profilData
      profiles:[...prevState.profiles,profileData]
    }));
  }
  render() {
  return (
    <div>
      <div className="App">
        <Header title={titulo} />
        <Form onAdd={this.addNewProfile}/>
        <CardList profiles={this.state.profiles}/>
      </div>
    </div>
  );
  }
}

export default App;
