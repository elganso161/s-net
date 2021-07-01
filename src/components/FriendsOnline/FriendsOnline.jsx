import React from "react";
import style from "./FriendsOnline.module.css";
import img1 from "../../assets/img1.png";
import img2 from "../../assets/img2.png";
import img3 from "../../assets/img3.jpg";

const FriendsOnline = () => {
    let friendsData = [
        {
            id: 1,
            img: img1,
            name: "Dimych",
        },
        {
            id: 2,
            img: img2,
            name: "Andrey",
        },
        {
            id: 3,
            img: img3,
            name: "Masha",
        },
    ];

    let friendsElement = friendsData.map((elem) => (
        <li key={elem.id} className={style.item}>
            <div>
                <img src={elem.img} alt="friendImg" />
            </div>
            <div>
                <p>{elem.name}</p>
            </div>
        </li>
    ));

    return (
        <>
            <ul className={style.friendsOnline}>{friendsElement}</ul>
        </>
    );
};

export default FriendsOnline;
