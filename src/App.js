import logo from './logo.svg';
import './App.css';
import { Authenticator } from '@aws-amplify/ui-react'

function App() {
  return (
    <Authenticator>
      {({ signOut, user }) => (
        <div className="App">
          <header>
            <img src={logo} className="App-logo" alt="logo" />
            <h1>Hey {user.username}</h1>
          </header>
          <button onClick={signOut}>Sign out</button>
        </div>
      )}
    </Authenticator>

  );
}

export default App;