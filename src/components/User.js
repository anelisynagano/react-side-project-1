import React, { useState } from 'react';

const User = ({ userInfo, handleDelete }) => {

    return (
        <div className='userCard'>
            <p>{userInfo.name}</p>
            <button onClick={handleDelete}>delete user :(</button>
        </div>
    )
}

export default User;