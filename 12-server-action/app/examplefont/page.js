import React from "react";
import { Oswald } from "next/font/google";

const oswald = Oswald({
  weigth: ["100", "300", "500"],
  subsets: ["latin"],
});

function ExampleFont() {
  return (
    <div>
      <h1 className="text-4xl">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam adipisci
        consequuntur eligendi ab excepturi fugit aut minus ducimus odit
      </h1>
      <p className={`${oswald.className}`}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, autem.
        Non est nam esse odio facilis voluptatum impedit reprehenderit veniam.
        Cumque numquam cum neque repudiandae nisi non. Atque, recusandae
        aperiam. Minus harum quos odit molestiae, nisi hic maiores reiciendis
        explicabo est assumenda optio sed, incidunt iste obcaecati sequi ad
        cupiditate aliquam repudiandae doloribus, quis omnis cum praesentium
        eaque. Quia, rerum. Aut dolores eius numquam vel similique maxime
        voluptas obcaecati excepturi velit molestias? Tempora debitis id
        assumenda numquam fugit excepturi adipisci explicabo similique aliquam
        alias pariatur obcaecati quasi, doloribus perferendis cum.f
      </p>
    </div>
  );
}

export default ExampleFont;
