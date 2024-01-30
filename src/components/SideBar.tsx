import { FC, ReactNode } from "react";
import { IconType } from "react-icons";
import { BsPlus, BsLightningFill, BsGearFill } from "react-icons/bs";
import { FaFire, FaPoo } from "react-icons/fa";

export default function SideBar() {
  return (
    <div className="fixed top-0 left-0 h-screen w-16 m-0 flex flex-col bg-primary text-secondary shadow-lg">
      <SideBarIcon icon={<FaFire size="28" />} />
      <SideBarIcon icon={<BsPlus size="32" />} />
      <SideBarIcon icon={<BsLightningFill size="20" />} />
      <SideBarIcon icon={<FaPoo size="28" />} />
      <SideBarIcon icon={<BsGearFill size="32" />} />
    </div>
  );
}

interface SideBarIconProps {
  icon: ReactNode;
  text?: string;
}

const SideBarIcon: FC<SideBarIconProps> = ({ icon, text = "tooltip 💡" }) => (
  <div className="sidebar-icon group">
    {icon}
    <span className="sidebar-tooltip group-hover:scale-100">{text}</span>
  </div>
);
