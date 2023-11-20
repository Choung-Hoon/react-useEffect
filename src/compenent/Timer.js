import React, { useEffect, useState } from "react";

const Timer = () => {
  const [count, setCount] = useState(0);

  // 최초 로딩 시, 한번만 timer 구동
  useEffect(() => {
    // setInterval 실행 후, timer에 할당 후, 반환
    const timer = setInterval(() => {
      // setCount(count+1) 동작하지 않는다.
      // count가 클로저가 되서 항상 그 시점의 값을 읽어 오기 때문에 변경되지 않는다.
      setCount((prevState) => prevState + 1);
    }, 1000);

    // unmount 시, 정리 작업
    return () => {
      console.log("Timer component is going to unmount.");
      console.log("before clearing time");
      clearInterval(timer);
      console.log("timer cleared!!");
    };
  }, []);

  return (
    <div>
      <span>timer is on now : {count}</span>
      <hr />
      <span>[타이머 종료]를 클릭하세요</span>
      <hr />
    </div>
  );
};

export default Timer;
