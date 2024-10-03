import React, { useState, memo } from 'react';

const initialData = [
    { id: 1, name: "alice", likes: 0 },
    { id: 2, name: "bob", likes: 0 },
    { id: 3, name: "neeraj", likes: 0 },
];

const useLikes = () => {
    const [users, setUsers] = useState(initialData);

    const handleLike = (userId) => {
        setUsers(
            users.map(user =>
                user.id === userId ? { ...user, likes: user.likes + 1 } : user
            )
        );
    };

    const UserProfile = memo(
        ({ user, onLike }) => {
            return (
                <li key={user.id}>
                    <h1>{user.name} : {user.likes}</h1>
                    <button onClick={() => onLike(user.id)}>Like</button>
                </li>
            );
        },
        (prevProps, nextProps) => prevProps.user.likes === nextProps.user.likes
    );

    return { users, UserProfile, handleLike };
};

export default useLikes;


