import { useState,createContext, useEffect } from 'react'
import './styles/App.css'
import { Route, Routes,useNavigate } from 'react-router-dom'
import Home from './components/Home'
import Myspace from './components/Myspace'
import Navbar from './components/Navbar'


const GitHomeContext = createContext()

function App() {
  const[userdata , setUserData] = useState([])
  const[notFollowing , setNotFollowing] = useState([])
  const[idontfollow , setIdontfollow] = useState([])
  const [followers, setFollowers] = useState([]);
  const [following, setFollowing] = useState([]);
  const [loading, setLoading] = useState(true);
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  async function getData() {
    await getUserData();
    await fetchFollowers(1, 'followers', setFollowers);
    await fetchFollowers(1, 'following', setFollowing);
    setTimeout(() => {
      navigate('/myspace');
    }, 1000);


    // setLoading(false);
    // console.log(userdata);
  }

  const getUserData = async () => {
    const response = await fetch(`https://api.github.com/users/${username}`);
    if (response.ok) {
      const data = await response.json();
      setUserData(data);
    }
  }


  const fetchFollowers = async (p, type, setValTo) => {
    // console.log(loading);
    const response = await fetch(`https://api.github.com/users/${username}/${type}?per_page=100&page=${p}`);
    if (response.ok) {
      const data = await response.json();
      setValTo((prevFollowers) => [...prevFollowers, ...data]);
      if (data.length === 100) {
        fetchFollowers(p + 1, type, setValTo);
      }
    }
  };

  async function findUsersNotFollowing() {
    const followersSet = new Set(followers.map((follower) => follower.login));
    const followingSet = new Set(following.map((follower) => follower.login));
    // console.log("followersSet Array:", followersSet);
    // console.log("followingSet Array:", followingSet);

    const notFollowingMe = following.filter((user) => !followersSet.has(user.login));
    const imnotfollowing = followers.filter((user) => !followingSet.has(user.login));
    setNotFollowing(notFollowingMe);
    setIdontfollow(imnotfollowing);
  }

  const GitHomeContextvalues ={
    userdata,
    setUserData,
    notFollowing,
    setNotFollowing,
    idontfollow,
    setIdontfollow,
    followers,
    setFollowers,
    following,
    setFollowing,
    loading,
    setLoading,
    username,
    setUsername,
    getData,
    getUserData,
    fetchFollowers,
    findUsersNotFollowing
  }


  

  return (
    <>
    <GitHomeContext.Provider value={GitHomeContextvalues}>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="/myspace" element={<Myspace />}/>
      </Routes>
      </GitHomeContext.Provider>  
    </>
  )
}

export default App
export { GitHomeContext }
