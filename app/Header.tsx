import React from "react";
import Image from "next/image";
import HeaderItem from "./HeaderItem";
import {
  HomeIcon,
  FolderIcon,
  CheckBadgeIcon,
  LightBulbIcon,
  MagnifyingGlassIcon,
  UserIcon,
} from "@heroicons/react/24/outline";

function Header() {
  return (
 
      <header className="flex flex-col sm:flex-row mt-8 px-2 justify-between items-center h-auto ">
        <div className="flex flex-grow justify-evenly max-w-2xl">
          <HeaderItem title="HOME" Icon={HomeIcon} />
          <HeaderItem title="TRENDING" Icon={LightBulbIcon} />
          <HeaderItem title="VERIFIED" Icon={CheckBadgeIcon} />
          <HeaderItem title="COLLECTIONS" Icon={FolderIcon} />
          <HeaderItem title="SEARCH" Icon={MagnifyingGlassIcon} />
          <HeaderItem title="ACCOUNT" Icon={UserIcon} />
        </div>
        <Image
          className="object-contain"
          src="https://links.papareact.com/ua6"
          width={150}
          height={100}
          alt="logo"
        />
      </header>

  );
}

export default Header;
