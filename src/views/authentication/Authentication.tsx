import React, { useState } from "react";

type Props = {};

export default function Authentication(props: Props) {
  const [state, setState] = useState("authentication");

  return <div>{state}</div>;
}
