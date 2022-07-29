import type { NextPage } from "next";
import Image from "next/image";
import React, { useRef } from "react";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <Parallax ref={parallax} pages={3}>
      <ParallaxLayer offset={0} style={{ backgroundColor: "#ffffff" }} />

      <ParallaxLayer style={{ marginLeft: "20%", maxWidth: 450 }} offset={0.25} speed={-0.3}>
        <h1 className="text-3xl text-black font-bold">
          Le J&apos; là một quán cà phê.
        </h1>
      </ParallaxLayer>

      <ParallaxLayer style={{ marginLeft: "20%", maxWidth: 450 }} offset={0.35} speed={-0.2}>
        <h1 className="text-2xl text-black font-bold">
          Bên cạnh đó, Le J&apos; còn như là một chốn trú ẩn thân thuộc, một nơi đủ
          yên tĩnh<br></br> để tập trung làm việc, và là một mái hiên<br></br> đầy nắng để thả
          trôi những xúc cảm đời thường.
        </h1>
      </ParallaxLayer>

      <ParallaxLayer style={{ marginLeft: "55%" }} offset={0.2} speed={0.1}>
        <Image
          alt="coffee-cup"
          src="/images/coffee-cup.jpeg"
          layout="intrinsic"
          width={400}
          height={475}
        />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
