import './App.css';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
import Messenger from './components/Messenger';


function App() {
  return (
    <div className="App">
      <GoogleOAuthProvider clientId="588399426395-q4j4n00964ijvos3dagqpg95d73gtnb7.apps.googleusercontent.com">
        <AccountProvider>
          <Messenger />
        </AccountProvider>

      </GoogleOAuthProvider>
    </div>
  );
}

export default App;
