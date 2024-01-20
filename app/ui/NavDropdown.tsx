import clsx from "clsx";
import React from "react";

export default function NavDropdown({className, links}: { className: string, links: React.JSX.Element[] }) {
  function handleClick() {
    const elem = document.activeElement as HTMLElement | null
    elem?.blur();
  }

  return (
    <div className={clsx('dropdown dropdown-end', className)}>
      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
             className="inline-block w-5 h-5 stroke-current">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"></path>
        </svg>
      </div>
      <ul tabIndex={0}
          className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
        {links.map((link, index) => <li key={index} onClick={handleClick}>{link}</li>)}
      </ul>
    </div>
  );
};
