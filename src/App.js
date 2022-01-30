import LoginButton from "./LoginButton";
import LogoutButton from "./LogoutButton";
import Profile from "./Profile";

function App() {
  return (
    <>
      Click LogIn Button to access the portal
      <LoginButton></LoginButton>
      <br></br>
      Click LogOut Button to logoff
      <LogoutButton></LogoutButton>
      <br></br> <Profile></Profile>
    </>
  );
}

export default App;
