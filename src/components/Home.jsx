import React, { useEffect,useContext } from 'react';
import { GitHomeContext } from '../App';

const Home = () => {
  const{ userdata,
        setUserData,
        idontfollow,
        setIdontfollow,
        setNotFollowing,
        notFollowing ,
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
  } = useContext(GitHomeContext)


  useEffect(() => {
    console.log(followers);
    console.log(following);
    console.log(notFollowing.length, "This is they dont follow");
    console.log(idontfollow.length, "This is I dont follow");
  });

  useEffect(() => {
    findUsersNotFollowing();
    console.log(userdata)
  }, [following, followers]);


  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };
  


  return (
    <div className='githome_uname_input_area'>
      <div className='username_field'>
        <div className='username_input_container'>
          <div className='username_input_subheading'>
            <h2>GitHub Username</h2>
          </div>
          <div className='username_input_area'>
            <span>
              <h1>@<input type="text" placeholder='USER NAME' onChange={handleUsernameChange} /></h1>
            </span>
          </div>
        </div>
        <div className='username_submit_btn'>
          <button onClick={() => getData()}>Generate Profile</button>
        </div>
      </div>
      {/* <h1>{followers.length}</h1>
      <h1>{following.length}</h1>
      <h1>{notFollowing.length}</h1>
      <h1>{idontfollow.length}</h1> */}
    </div>
  );
}

export default Home;
