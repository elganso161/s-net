import React from "react";
import { useState, useEffect } from "react";

const ProfileStatus = (props) => {
  const [editMode, setEditMode] = useState(false);
  const [statusValue, setStatusValue] = useState(props.status);

  useEffect(() => {
    setStatusValue(props.status);
  }, [props.status]);

  const activateEditMode = () => {
    setEditMode(true);
  };

  const deActivateEditMode = () => {
    setEditMode(false);
    props.updateStatus(statusValue);
  };

  const onStatusChange = (e) => {
    setStatusValue(e.target.value);
  };

  return (
    <>
      <div>
        {!editMode && (
          <div>
            <div onClick={activateEditMode}>status : {statusValue}</div>
          </div>
        )}
        {editMode && (
          <div>
            <input
              autoFocus={true}
              onChange={onStatusChange}
              onBlur={deActivateEditMode}
              placeholder="статус"
              defaultValue={statusValue}
            />
          </div>
        )}
      </div>
    </>
  );
};

export default ProfileStatus;
