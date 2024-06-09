import Api from "@/util/api";
import { useEffect, useState } from "react";

export default function Header({ router }) {
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");

  useEffect(() => {
    Api.getBlogData(router.query.id).then((data) => {
      setName(data.name);
      setDesc(data.desc);
    });
  }, []);

  return (
    <>
      <div className="w-full flex justify-start items-center pb-3 gap-5">
        <div className="p-3 rounded-full bg-gray-200 text-white">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-16 md:size-28"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 6a3.75 3.75 0 1 1-7.5 0 3.75 3.75 0 0 1 7.5 0ZM4.501 20.118a7.5 7.5 0 0 1 14.998 0A17.933 17.933 0 0 1 12 21.75c-2.676 0-5.216-.584-7.499-1.632Z"
            />
          </svg>
        </div>
        <div className="w-full flex flex-col justify-center items-start">
          <p className="font-ngb text-2xl">{name}</p>
          <p className="text-base">{desc}</p>
        </div>
      </div>
      <hr className="w-full" />
    </>
  );
}
