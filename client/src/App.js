import { useAuth0 } from '@auth0/auth0-react';

function App() {

  const { loginWithRedirect, user, isAuthenticated, logout, isLoading } = useAuth0();
  isAuthenticated && console.log(user)

  return (
    <div>
      <h1>E-commerce app - Final Project</h1>
      {!isAuthenticated ? 
      <button onClick = {() => loginWithRedirect()}>Login</button> 
      : isAuthenticated && <button onClick = {() => logout()}>Logout</button>}
      <div>
        { isAuthenticated && <img src={user.picture} />} 
        { isAuthenticated && <p>{user.name}</p>} 
        { isAuthenticated && <p>{user.nickname}</p>}
        { isAuthenticated && <p>{user.email}</p>} 
      </div>     
    </div>
  );
}

export default App;
