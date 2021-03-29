import React from "react";
import s from "./NotFound.module.css";
import {NotFoundIcon} from '../Icons';

const NotFound = () => {
  return (
    <>
      <NotFoundIcon width={512} height={512}/>
      <h2 className={s.title}>Sorry, page not found!!!</h2>
    </>
  );
};

export default NotFound;
