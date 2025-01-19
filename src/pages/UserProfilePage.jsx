import React from 'react'
import UserProfile from '../components/users/UserProfile'
import Header from '../components/common/Header'
const UserProfilePage = () => {
  return (
    <div className='flex-1 overflow-auto relative z-10'>
			<Header title='User Profile' />
            <main>
                <UserProfile/>
            </main>
		</div>
  )
}

export default UserProfilePage