import Api from "@/util/api";
import { useEffect, useState } from "react";

export default function Login({ loginToggle, refresh }) {
  const [register, setRegister] = useState(false);
  const [id, setId] = useState("");
  const [pw, setPw] = useState("");

  const [idErr, setIdErr] = useState(false);
  const [pwErr, setPwErr] = useState(false);

  const [errMsg, setErrMsg] = useState("");

  useEffect(() => {
    setId("");
    setPw("");
    setIdErr(false);
    setPwErr(false);
    setErrMsg("");
  }, [register]);

  const login = () => {
    if (id.length == 0) {
      setIdErr(true);
      setPwErr(false);
    } else if (pw.length == 0) {
      setPwErr(true);
      setIdErr(false);
    } else {
      Api.login(id, pw).then((res) => {
        if (res) {
          refresh();
        } else {
          setErrMsg("아이디 혹은 비밀번호를 확인해 주세요");
        }
      });
    }
  };

  const reg = () => {
    if (id.length == 0) {
      setIdErr(true);
      setPwErr(false);
    } else if (pw.length == 0) {
      setPwErr(true);
      setIdErr(false);
    } else {
      Api.register(id, pw).then((res) => {
        if (res) {
          alert("회원가입이 완료되었습니다!");
          refresh();
        } else {
          setErrMsg("이미 존재하는 아이디입니다!");
        }
      });
    }
  };

  return (
    <div className="relative animate-fade">
      <div className="absolute w-screen h-screen bg-white opacity-70"></div>
      <div className="absolute w-screen h-screen flex justify-center items-center">
        <div className="absolute w-[350px] h-[350px] bg-white shadow-md p-4 flex flex-col justify-between">
          <div>
            <div
              className="flex items-center justify-end text-gray-500 cursor-pointer"
              onClick={() => loginToggle()}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="size-6"
              >
                <path
                  fillRule="evenodd"
                  d="M5.47 5.47a.75.75 0 0 1 1.06 0L12 10.94l5.47-5.47a.75.75 0 1 1 1.06 1.06L13.06 12l5.47 5.47a.75.75 0 1 1-1.06 1.06L12 13.06l-5.47 5.47a.75.75 0 0 1-1.06-1.06L10.94 12 5.47 6.53a.75.75 0 0 1 0-1.06Z"
                  clipRule="evenodd"
                />
              </svg>
            </div>
            <p className="font-ngb text-xl mt-7">
              {register ? "회원가입" : "로그인"}
            </p>
            <p
              className={`font-ng text-base mt-3 text-gray-600 select-none ${
                register ? "text-white" : ""
              }`}
            >
              아이디로 로그인
            </p>
            <div
              className={`flex border border-solid ${
                idErr
                  ? "border-red-500 shadow-sm shadow-red-500"
                  : "border-gray-200"
              } font-ng text-sm mt-2`}
            >
              <input
                className="w-full px-3 py-2"
                placeholder="아이디를 입력하세요."
                onChange={(e) => {
                  setIdErr(false);
                  setId(e.target.value);
                }}
              ></input>
            </div>
            <div
              className={`flex border border-solid ${
                pwErr
                  ? "border-red-500 shadow-sm shadow-red-500"
                  : "border-gray-200"
              } font-ng text-sm mt-2`}
            >
              <input
                className="w-full px-3 py-2"
                type="password"
                placeholder="비밀번호를 입력하세요."
                onChange={(e) => {
                  setPwErr(false);
                  setPw(e.target.value);
                }}
              ></input>
            </div>
            <div className="border border-solid border-gray-200 font-ng text-sm mt-2">
              <button
                className="w-full flex bg-[#12B886] hover:bg-green-600 text-white justify-center items-center py-2 font-ng"
                onClick={() => (register ? reg() : login())}
              >
                {register ? "가입하기" : "로그인"}
              </button>
              <div className="w-full text-sm text-red-500 font-ng">
                {errMsg}
              </div>
            </div>
          </div>
          <div className="flex items-center justify-end gap-1 font-ng text-sm text-[#12B886] mt-5 select-none">
            {!register && (
              <>
                <p>아직 회원이 아니신가요?</p>
                <p
                  className="font-ngb cursor-pointer"
                  onClick={() => setRegister(true)}
                >
                  회원가입
                </p>
              </>
            )}
            {register && (
              <>
                <p>이미 회원이신가요?</p>
                <p
                  className="font-ngb cursor-pointer"
                  onClick={() => setRegister(false)}
                >
                  로그인
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
