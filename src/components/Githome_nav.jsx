import  { useContext } from 'react';
import { GitHomeContext } from '../App';

const Githome_nav = () => {
  const {idontfollow,followers,following,notFollowing}= useContext(GitHomeContext)
  const headers =[
    "Followers",
    "Following",
    "idontfollow",
    "notFollowing"
  ]
  return (
    <div className='githome_details_nav'>
      <nav>
        <ul>
            <button>
              <li>
                <div className='githome_details_property_sizes'>
                  {followers.length}
                </div>
                <div className='githome_details_property_title'>
                  Followers
                </div> 
              </li>
            </button>
            <button>
              <li>
                <div className='githome_details_property_sizes'>
                    {following.length}
                </div>
                <div className='githome_details_property_title'>
                  Following
                </div> 
              </li>
            </button>
            <button>
              <li>
                  <div className='githome_details_property_sizes'>
                      {idontfollow.length}
                  </div>
                  <div className='githome_details_property_title'>
                  idontfollow
                  </div> 
                </li>
            </button>
            <button>
                 <li>
                  <div className='githome_details_property_sizes'>
                      {notFollowing.length}
                  </div>
                  <div className='githome_details_property_title'>
                    notFollowing
                  </div> 
                </li>
            </button>
        </ul>
      </nav>
    </div>
  )
}

export default Githome_nav
