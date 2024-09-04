import { useMemo, useState } from "react";

export default function DeviviedState() {
  const [name, setName] = useState("Anup");

  const nickName = name + 1;

  const user = [
    { id: 1, name: "Jack" },
    { id: 2, name: "Mack" },
  ];

  const findUser = useMemo(() => {
    user.find((u) => u.id === 1);
  }, []);

  return (
    <div>
      <p>{name}</p>
      <button onClick={() => setName("ram")}>Change name</button>
      <p>{nickName}</p>
      {/* <button onClick={() => user.find((i) => i.id === 1)}>Find user</button> */}
    </div>
  );
}
