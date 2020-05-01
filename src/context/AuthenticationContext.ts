import React from "react";

import ProfilePicture from "../assets/images/people/person-1.jpg";

export interface SystemUser {
  displayName: string;
  email: string;
  picture: string | null;
  jobTitle: string | null;
  dateOfBirth: Date | null;
  telephone: string | null;
  address_1: string | null;
  address_2: string | null;
  bio: string | null;
}

export const dummyUser: SystemUser = {
  displayName: "Ibrahim Awad",
  email: "ibrahim.a.hamid@gmail.com",
  picture: ProfilePicture,
  jobTitle: "Sr. Software Engineer",
  dateOfBirth: new Date("1991-11-16"),
  telephone: "+20123456789",
  address_1: "Egypt, Cairo, Pyramids",
  address_2: "Egypt, New Valley",
  bio: "Some information about the person ",
};

interface Context {
  currentUser: SystemUser | null;
  loginHandler: () => void;
  logoutHandler: () => void;
}

const AuthenticationContext = React.createContext<Context>({
  currentUser: null,
  loginHandler: () => {},
  logoutHandler: () => {},
});

export default AuthenticationContext;
