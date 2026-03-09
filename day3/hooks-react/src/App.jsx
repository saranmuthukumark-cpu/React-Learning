import { useState } from "react";

import "./App.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Cart from "./components/Cart";

function App() {
  return (
    <>
      <Header />

      <Hero />

      <div className="flex justify-around items-center my-5  bg-gray-400">
        <Cart
          product={{
            name: "4X4 Remote Control Drift Stunt Car....",
            image:
              "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/n/i/t/high-speed-rc-car-toys-for-boys-usb-rechargable-road-vehicle-toy-original-imagr9jns5dsfrgc.jpeg?q=70",
            price: 1099,
          }}
        />
        <Cart
          product={{
            name: "Mounted 8-Wheel Drift Stunt Car....",
            image:
              "https://rukminim2.flixcart.com/image/1528/1528/xif0q/remote-control-toy/9/u/f/mounted-8-wheel-car-1-aarav-enterprise-original-imah6gsyk6zq6awf.jpeg?q=90",
            price: 1799,
          }}
        />
        <Cart
          product={{
            name: "Black Rock Kids Smoke Monster Rc Car....",
            image:
              "https://rukminim2.flixcart.com/image/1528/1528/xif0q/remote-control-toy/m/5/a/remote-controlled-rock-crawler-rc-monster-truck-4-wheel-drive-1-original-imahayxyqycjdett.jpeg?q=90",
            price: 1499,
          }}
        />
        <Cart
          product={{
            name: "Rechargeable Adventure Jeep Off Roader Car...",
            image:
              "https://rukminim2.flixcart.com/image/612/612/xif0q/remote-control-toy/o/q/f/rechargeable-adventure-jeep-off-roader-all-terrain-4-headlight-original-imahhshq9dyzgabn.jpeg?q=70",
            price: 1799,
          }}
        />
      </div>
    </>
  );
}

export default App;
