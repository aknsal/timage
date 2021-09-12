import React from "react";
import PersistentDrawerLeft from "./sidebar/sidbar";

export function Layout({ children, isAuthenticated }) {
  return (
    <div>
      {isAuthenticated ? (
        <PersistentDrawerLeft>
          <div>{children}</div>
        </PersistentDrawerLeft>
      ) : (
        <div style={{ backgroundColor: "#46876c" }}>{children}</div>
      )}
    </div>
  );
}
