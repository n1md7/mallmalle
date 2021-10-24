import React, { useState } from "react";

type Props = {};

export default function Registration(props: Props) {
  const [state, setState] = useState("Registration");

  return <div>{state}</div>;
}
