import React from 'react';

import { AvatarGenerator } from 'random-avatar-generator';

const Worker = (props) => {
    const generator = new AvatarGenerator();

    let avatar = generator.generateRandomAvatar();

    return (
        <div 
            className="md:w-1/4 p-4 bg-white m-6 shadow-md rounded-md text-center">
            <img src={avatar} alt="avatar" className="mx-auto w-24 m-4 opacity-80" />
            <h1 className="text-2xl font-semibold text-center">{props.data.Work_Category}</h1>
            <h1 className="text-md font-semibold text-center">{ `${props.data.FirstName} ${props.data.LastName}`}</h1>
            <p>{`Experience : ${props.data.Experience}`}</p>
            <p className=" bg-green-50">{`Contact : ${ props.data.Phone_no }`}</p>

        </div>
    );
}

export default Worker;