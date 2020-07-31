import React, { useState } from 'react';

const AddUser = (props) => {
    const [name, setName] = useState('')

    const handleChange = (e) => {
        setName(e.target.value)
    }

    const handleSubmit = () => {
        props.addUser(name)
        setName('')
    }

    return (
        <>
            <input onChange={handleChange} type="text" value={name} />
            <input onClick={handleSubmit} type="button" value="add user" />
        </>
    )
}

export default AddUser;