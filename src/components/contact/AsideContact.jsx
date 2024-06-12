"use client"
import React, { useState } from "react";
import Link from "next/link";
import { contact_links } from "@/data/data";
import { TiArrowSortedDown } from "react-icons/ti";

const AsideContact = () => {
  const initialExpandedState = contact_links.reduce((acc, _, index) => {
    acc[index] = true;
    return acc;
  }, {});

  const [expandedSections, setExpandedSections] =
    useState(initialExpandedState);

  const toggleSection = (index) => {
    setExpandedSections((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  return (
    <aside className="w-64 border-r-[2px] h-[86vh] border-r-[#1E2D3D]">
      <ul>
        {contact_links.map((contact, index) => (
          <li key={index} className="w-64">
            <div
              className={`flex gap-4 items-center px-[16px] py-[11px] border-[#1E2D3D] cursor-pointer ${
                index === 0 ? "border-b-[2px]" : "border-b-[2px] border-t-[2px]"
              }`}
              onClick={() => toggleSection(index)}
            >
              <TiArrowSortedDown
                className={`text-[#FFF] transform ${
                  expandedSections[index] ? "rotate-180" : ""
                }`}
              />
              <span className="text-[#FFF]">{contact.label}</span>
            </div>
            {expandedSections[index] && (
              <ul className="flex flex-col gap-4 py-[16px]">
                {contact.children.map((child, childIndex) => (
                  <li
                    key={childIndex}
                    className="flex items-center gap-4 px-[16px] text-[#607B96] duration-300 hover:text-[#FFF]"
                  >
                    <span className="text-[15px]">{child.icon}</span>
                    {child.link ? (
                      <Link
                        href={child.link}
                        target="_blank"
                        className="text-[15px]"
                      >
                        {child.name}
                      </Link>
                    ) : (
                      <span className="text-[15px]">{child.name}</span>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </li>
        ))}
      </ul>
    </aside>
  );
};

export default AsideContact;
