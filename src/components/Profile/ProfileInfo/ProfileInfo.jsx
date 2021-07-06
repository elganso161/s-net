import React from "react";
import style from "./ProfileInfo.module.css";
import Preloader from "../../common/Preloader/Preloader";
import avatar from "../../../assets/avatar.jpg";
import ProfileStatus from "./ProfileStatus/ProfileStatus";
import { useState } from "react";
import ProfileDataForm from "./ProfileDataForm";

const ProfileInfo = (props) => {
  const [editMode, setEditMode] = useState(false);

  if (!props.profile) {
    return <Preloader />;
  }
  const onMainPhotoSelected = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  };

  const onSubmit = (formData) => {
    props.saveProfile(formData);
    setEditMode(false);
  };
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
          <div>
            {props.isOwner && (
              <input type="file" onChange={onMainPhotoSelected} />
            )}
          </div>
        </div>
        {editMode ? (
          <ProfileDataForm
            initialValues={props.profile}
            profile={props.profile}
            onSubmit={onSubmit}
          />
        ) : (
          <ProfileData
            goToEditMode={() => {
              setEditMode(true);
            }}
            profile={props.profile}
            isOwner={props.isOwner}
          />
        )}
      </div>
      <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
    </>
  );
};

const ProfileData = (props) => {
  return (
    <>
      <div className={style.description}>
        <ul className={style.descriptionList}>
          <li className={style.descriptionListItem}>
            <p className={style.fullName}>{props.profile.fullName}</p>
          </li>
          {props.isOwner && (
            <div>
              <button onClick={props.goToEditMode}>edit</button>
            </div>
          )}

          <li className={style.descriptionListItem}>
            <b className={style.lookingForAJob}>Looking for a job : </b>
            {props.profile.lookingForAJob ? "yes" : "no"}
          </li>
          {props.profile.lookingForAJob && (
            <li className={style.descriptionListItem}>
              <b className={style.lookingForAJobDescription}>
                My profissional skills
              </b>
              :{props.profile.lookingForAJobDescription}
            </li>
          )}
          <li className={style.descriptionListItem}>
            <b className={style.aboutMe}>About me :</b> {props.profile.aboutMe}
          </li>
          <li>
            <b>Contacts :</b>
            {Object.keys(props.profile.contacts).map((key) => {
              return (
                <Contacts
                  key={key}
                  contactTitle={key}
                  contactValue={props.profile.contacts[key]}
                />
              );
            })}
          </li>
        </ul>
      </div>
    </>
  );
};

const Contacts = ({ contactTitle, contactValue }) => {
  return (
    <>
      <div>
        <b>{contactTitle}</b>:{" "}
        <a href={contactValue} target="blank">
          {contactValue}
        </a>
      </div>
    </>
  );
};

export default ProfileInfo;
