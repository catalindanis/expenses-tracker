import React from "react";
import Home from "./home";
import Loading from "./loading/loading";
import { useState } from "react";
import { wallets } from "./wallets/wallets";

export default function Index() {
  const [loading, setLoading] = useState(true);
  wallets.init(setLoading);

  return loading ? <Loading loading={loading}></Loading> : <Home></Home>;
}
