import React from 'react';

import { AvatarGenerator } from 'random-avatar-generator';

const Worker = (props) => {
    const generator = new AvatarGenerator();

    let avatar = generator.generateRandomAvatar();


    return (
        <div
            className=" p-4 bg-white m-4 shadow-md rounded-md flex flex-row ">
            <img onError={(ev)=>  ev.target.src = avatar} src={ `https://unorganisedsectorbackbnd.herokuapp.com/API/uploads/${props.data._id}/${props.data.user_type}/Profile`} alt="avatar" className=" w-24 m-4 opacity-80" />

            <div className="m-4">
                <h1 className="capitalize text-2xl font-semibold ">{props.data.Work_Category}</h1>
                <h1 className="text-md font-semibold ">{`${props.data.FirstName} ${props.data.LastName}`}</h1>
                <p>{`Experience : ${props.data.Experience}`}</p>
                <p>{`City: ${props.data.City} `}</p>
                {/* <p className=" bg-green-50">{`Contact : ${props.data.Phone_no}`}</p> */}
            </div>


        </div>
    );
}

export default Worker;