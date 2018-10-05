import React from "react";
import DisplayComments from "../DisplayList/DisplayComments";
import "./IsLoading.css";

export default function isLoadingComments(props) {
  return props.loading ? (
    <div className="isLoadingComments">
      <i>Updating Comments...</i>
    </div>
  ) : (
    <DisplayComments comments={props.comments} />
  );
}
