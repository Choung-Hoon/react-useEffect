// import { useEffect, useState } from "react";
import { useState } from "react";
import { useEffect as defEffect } from "react";
import { useEffect as countEffect } from "react";
import { useEffect as nameEffect } from "react";

function App() {
  const [count, setCount] = useState(1);
  const [name, setName] = useState(1);

  const handleCountUpdate = () => {
    setCount(count + 1);
  };

  const handleInputChage = (e) => {
    setName(e.target.value);
  };

  // mount 시에만 실행 : 빈 연관배열 설정
  defEffect(() => {
    console.log("마운팅 🚀");
  }, []);

  // 기본적으로 렌더링 될때(mount, 상태변경 시)마다 실행
  defEffect(() => {
    console.log("기본적으로 렌더링 될때(mount, 상태변경 시)마다 실행🎨");
  });
  // mount 시와 연관배열 요소 인 count의 상태 값 변경 시 만 렌더링 실행
  countEffect(() => {
    console.log("⭐count 변경");
  }, [count]);
  // mount 시와 연관배열 요소 인 ⭐name의 상태 값 변경 시 만 렌더링 실행
  nameEffect(() => {
    console.log("😜name 변경");
  }, [name]);

  return (
    <div>
      <button onClick={handleCountUpdate}>Update</button>
      <span>count:{count}</span>
      <br />
      <input type="text" onChange={handleInputChage} />
      <span>name : {name}</span>
    </div>
  );
}

export default App;
