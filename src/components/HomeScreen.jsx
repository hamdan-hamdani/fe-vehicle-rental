import home from "../img/home.svg";
import file from "../img/file.svg";
import chat from "../img/chat.svg";
import user from "../img/user.svg";
import "./HomeScreen.css";
function HomeScreen() {
  return (
    <div className="container-home-screen">
      <img src={home} alt="" />
      <img src={file} alt="" />
      <img src={chat} alt="" />
      <img src={user} alt="" />
    </div>
  );
}

export default HomeScreen;
