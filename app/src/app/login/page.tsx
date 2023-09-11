"use client";
import { useState } from "react";
import Logo from "@/components/Dummies/Logo";
import LoginForm from "@/components/LoginForm";
import RegisterForm from "@/components/RegisterForm";
import { useTransition, animated } from "@react-spring/web";

export default function Login() {
  const [isLogin, setIsLogin] = useState(true);
  const transition = useTransition(isLogin, {
    from: { opacity: 0, transform: "translateX(-100%)" },
    enter: { opacity: 1, transform: "translateX(0%)" },
    leave: { opacity: 0, transform: "translateX(-100%)" },
  });

  return (
    <div className="w-full h-[100vh] flex justify-between">
      <div className="mx-auto w-[400px] flex flex-col items-center py-6 gap-8">
        <Logo className="mt-2 text-[2rem] cursor-default select-none" />
        <hr className="w-[75%] border-bgsecondary border-y-1" />
        <div className="relative min-h-[450px] min-w-[300px]">
          {transition((style, item) =>
            item ? (
              <animated.div
                style={style}
                className={
                  "absolute left-0 min-w-[300px] flex flex-col items-center gap-8 "
                }
              >
                <LoginForm changeRegister={() => setIsLogin(!isLogin)} />
              </animated.div>
            ) : (
              <animated.div
                style={style}
                className={
                  "absolute left-0 min-w-[300px] flex flex-col items-center gap-8 "
                }
              >
                <RegisterForm changeLogin={() => setIsLogin(!isLogin)} />
              </animated.div>
            )
          )}
        </div>
      </div>
    </div>
  );
}