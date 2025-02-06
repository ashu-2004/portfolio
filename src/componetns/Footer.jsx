import React from "react";
import { CONTACT } from "../constants";

function Footer() {
  return (
    <div>
      <div className="text-center tracking-tighter text-sm">
        <p className="my-4">{CONTACT.address}</p>
        <p className="my-4">{CONTACT.phoneNo}</p>
        <a href="#" className="border-b">
          {CONTACT.email}
        </a>
      </div>
    </div>
  );
}

export default Footer;
