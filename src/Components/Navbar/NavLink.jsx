import React, { useState } from "react";
import { link } from "./MyLinks";
const NavLinks = () => {
  const [heading, setHeading] = useState("");
  const [subheading, setSubHeading] = useState("");

  return (
    <>
      {link.map((link, key) => (
        <div>
          <div className="px-3 text-left md:cursor-pointer group ">
            <h1
              key={key}
              className="py-7 flex justify-between items-center md:pr-0 pr-5"
              onClick={() => {
                heading !== link.name ? setHeading(link.name) : setHeading("");
                setSubHeading("");
              }}
            >
              {link.name}
              <span className="text-xl md:hidden inline">
                <ion-icon
                  name={`${
                    heading === link.name ? "chevron-up" : "chevron-down"
                  }`}
                ></ion-icon>
              </span>
              <span className="text-xl md:mt-1 md:ml-2 md:block hidden group-hover:rotate-180 group-hover:-mt-2">
                <ion-icon name="chevron-down"></ion-icon>
              </span>
            </h1>

            {link.submenu && (
              <div>
                <div className="absolute top-20 hidden group-hover:md:block  hover:md:block z-40">
                  <div className="py-3">
                    <div className="w-4 h-4 left-3 absolute mt-1 bg-white rotate-45"></div>
                  </div>
                  <div className="bg-white p-5 grid grid-cols-3 gap-10">
                    {link.sublinks.map((mysublink, i) => (
                      <div key={i}>
                        <h1 className="text-lg font-semibold flex items-center">
                          {mysublink.Head}
                        </h1>
                        {mysublink.sublink.map((slinl, k) => (
                          <li key={k} className="text-sm text-gray-600 my-2.5 ">
                            <a className="hover:text-blue-400">{slinl.name}</a>
                          </li>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
          {/* Mobile-Menu */}
          <div className={`${heading === link.name ? "md:hidden" : "hidden"}`}>
            {link.sublinks.map((slink) => (
              <div>
                <div>
                  <h1
                    onClick={() =>
                      subheading !== slink.Head
                        ? setSubHeading(slink.Head)
                        : setSubHeading("")
                    }
                    className="py-4 pl-7 font-semibold md:pr-0 flex justify-between items-center md:pr-0 "
                  >
                    {slink.Head}
                    <span className="text-xl md:mt-1 md:ml-2 inline">
                      <ion-icon
                        name={`${
                          subheading === slink.Head
                            ? "chevron-up"
                            : "chevron-down"
                        }`}
                      ></ion-icon>
                    </span>
                  </h1>
                  <div
                    className={`${
                      subheading === slink.Head ? "md:hidden" : "hidden"
                    }`}
                  >
                    {slink.sublink.map((slinks) => (
                      <li className="pl-14 py-3">
                        <a>{slinks.name}</a>
                      </li>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </>
  );
};

export default NavLinks;
