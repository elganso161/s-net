import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../assets/avatar.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";

const ProfileInfo = (props) => {
  if (!props.profile) {
    return <Preloader />;
  }
  return (
    <>
      <div className={style.profileInfo}>
        <div className={style.image}>
          <img
            src={
              props.profile.photos.large != null
                ? props.profile.photos.large
                : avatar
            }
            alt="userAvatar"
          />
        </div>
        <div className={style.description}>
          <ul className={style.descriptionList}>
            <li className={style.descriptionListItem}>
              <p className={style.fullName}>{props.profile.fullName}</p>
            </li>
            <li className={style.descriptionListItem}>
              <p className={style.aboutMe}>
                {props.profile.aboutMe ? props.profile.aboutMe : "---"}
              </p>
            </li>
            <li className={style.descriptionListItem}>
              <p className={style.lookingForAJob}>
                {props.profile.lookingForAJob === true
                  ? "looking for a job"
                  : "not looking for work"}
              </p>
            </li>
            <li className={style.descriptionListItem}>
              <p className={style.lookingForAJobDescription}>
                {props.profile.lookingForAJobDescription
                  ? props.profile.lookingForAJobDescription
                  : "---"}
              </p>
            </li>
            <li className={style.descriptionListItem}>
              <a href={props.profile.contacts.vk} target="blank">
                {props.profile.contacts.vk ? props.profile.contacts.vk : "---"}
              </a>
            </li>
            <li className={style.descriptionListItem}>
              <a href={props.profile.contacts.twitter} target="blank">
                {props.profile.contacts.twitter
                  ? props.profile.contacts.twitter
                  : "---"}
              </a>
            </li>
          </ul>
        </div>
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </>
  );
};

export default ProfileInfo;
