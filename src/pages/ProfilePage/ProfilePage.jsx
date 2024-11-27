import useMainPageActions from "../../hooks/useMainPageActions";
import NavBar from "../../components/NavBar";
import "./ProfilePage.scss";

const ProfilePage = () => {
  const { userData, logout } = useMainPageActions();

  return (
    <div className="page-div w-full h-full relative">
      <NavBar />
      <div className="container m-auto h-full flex justify-center ">
        <div className="w-6/12 h-full py-5">
          <div className="border-2 border-violet-700 flex flex-col gap-y-3 my-3 justify-start items-center bg-zinc-50">
            <p>Uid: {userData.uid}</p>
            <p>Email: {userData.userEmail}</p>
            <p>Username: {userData.username}</p>
            <button onClick={logout} className="bg-cyan-600 p-3 border-2 border-orange-700">
              logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfilePage;
