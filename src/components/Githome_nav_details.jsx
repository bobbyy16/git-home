import React,{useContext} from 'react'
import { GitHomeContext } from '../App';

const Githome_nav_details = ({active_data}) => {
const {following} = useContext(GitHomeContext)
  return (
    <div className='details'>
      <ul>
        {
            following.map((follow)=>(
                <li>
                <div className='details_card'>
                    <span>
                        <img src={follow.avatar_url} alt="" />
                        <span>{follow.login}</span>
                    </span>
                    <span>
                    <button><a href={follow.html_url} target='_blank'>Follow</a></button>
                    </span>
                </div>
            </li>
            ))
        }
      </ul>
    </div>
  )
}

export default Githome_nav_details
