import React from "react";
import PersistentDrawerLeft from "./sidebar/sidbar";

export function Layout({ children, isAuthenticated }) {
  return (
    <div>
      <PersistentDrawerLeft isAuthenticated={isAuthenticated}>
        <div>{children}</div>
      </PersistentDrawerLeft>
    </div>
  );
}
