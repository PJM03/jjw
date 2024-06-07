export default function NavBar({ router, loginToggle }) {
  return (
    <div className="w-full flex justify-center items-center text-base">
      <div className="w-4/5 flex justify-start items-center p-3 gap-2">
        <div className="bg-black text-white w-6 h-6 flex justify-center items-center font-fmm rounded-md">
          b
        </div>
        <div className="font-fmm text-xl">{`${router.query.id}.Blog`}</div>
      </div>
      <div className="flex items-center gap-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2.5}
          stroke="currentColor"
          className="size-5"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z"
          />
        </svg>
        <div
          className="font-ng bg-black text-white px-3 py-1 rounded-full"
          onClick={() => loginToggle()}
        >
          로그인
        </div>
      </div>
    </div>
  );
}