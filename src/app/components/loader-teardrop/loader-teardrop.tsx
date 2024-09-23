import React from "react";

import "./loader-teardrop.scss";

export function LoaderTeardrop(props: any) {
  return (
    <div className={`loader-teardrop ${props.isDark ? "dark" : ""}`}></div>
  );
}
