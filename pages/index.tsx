import type { NextPage } from "next";
import Image from "next/image";
import React, { useRef } from "react";

import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";

const Home: NextPage = () => {
  const parallax = useRef<IParallax>(null!);

  return (
    <Parallax ref={parallax} pages={3}>
      <ParallaxLayer offset={0} style={{ backgroundColor: "#ffffff" }} />
      <ParallaxLayer offset={1} style={{ backgroundColor: "#ffffff" }} />
      <ParallaxLayer offset={2} style={{ backgroundColor: "#ffffff" }} />

      <ParallaxLayer
        style={{ marginLeft: "20%", maxWidth: 450 }}
        offset={0.3}
        speed={0.15}
      >
        <h1 className="text-3xl text-black font-bold">
          Le J&apos; là một quán cà phê.
        </h1>
      </ParallaxLayer>

      <ParallaxLayer
        style={{ marginLeft: "20%", maxWidth: 450 }}
        offset={0.45}
        speed={0.2}
      >
        <h1 className="text-2xl text-black font-bold">
          Bên cạnh đó, Le J&apos; còn như là một chốn trú ẩn thân thuộc, một nơi
          đủ yên tĩnh<br></br> để tập trung làm việc, và là một mái hiên
          <br></br> đầy nắng để thả trôi những xúc cảm đời thường.
        </h1>
      </ParallaxLayer>

      <ParallaxLayer style={{ marginLeft: "55%" }} offset={0.2} speed={0.3}>
        <Image
          alt="coffee-cup"
          src="/images/coffee-cup.jpeg"
          layout="intrinsic"
          width={400}
          height={525}
        />
      </ParallaxLayer>

      {/* PAGE 2 */}
      <ParallaxLayer
        style={{ marginLeft: "55%", maxWidth: 400 }}
        offset={1.25}
        speed={0.1}
      >
        <h1 className="text-3xl text-black font-bold">
          Ngoài ra, bọn mình còn tổ chức các workshop, với mục đích là chia sẻ
          nhiều hơn về hành trình cà phê của bọn mình.
        </h1>
      </ParallaxLayer>

      <ParallaxLayer style={{ marginLeft: "15%" }} offset={1.1} speed={0.3}>
        <Image
          alt="coffee-cup"
          src="/images/competition.jpeg"
          layout="intrinsic"
          width={400}
          height={555}
        />
      </ParallaxLayer>
    </Parallax>
  );
};

export default Home;
