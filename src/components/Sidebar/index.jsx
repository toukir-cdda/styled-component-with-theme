import React, { useState } from "react";
import Toolbar from "../Toolbar";
import { SidebarWrapper } from "./Styled-elements";
import ColorShades from "./components/color-shades/ColorShades";
import Link from "next/link";
import ThemeToolBar from "../ThemeToolBar";

const Sidebar = () => {
  // toggle sidebar state and on off using toggle button
  const [toggle, setToggle] = useState(false);
  const toggleSidebar = () => {
    setToggle(!toggle);
  };

  return (
    <SidebarWrapper toggle={toggle.toString()}>
      {/* toggle button  */}
      <button onClick={toggleSidebar}>Toggle</button>
      {/* sidebar */}
      <h1>Sidebar</h1>
      {/* <Toolbar /> */}
      {/* <Link href="/generate-presets">Create Presets</Link> */}

      <ThemeToolBar />

      {/* color shades generator */}
      {/* <ColorShades /> */}
      {/* <Shades /> */}
      {/* <Accordion
        data={[
          {
            title: "Item 1",
            content: (
              <div>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Obcaecati esse molestiae fugit facilis quis enim in adipisci
                odit voluptatibus aliquid ex voluptatum omnis distinctio
                eligendi deserunt maiores, ad provident soluta?
              </div>
            ),
          },
          {
            title: "Item 2",
            content:
              "Slow-carb knausgaard health goth kombucha tousled four loko. Messenger bag cronut +1, four loko williamsburg you probably haven't heard of them bicycle rights taiyaki ramps squid vaporware. Green juice typewriter master cleanse distillery viral wayfarers asymmetrical quinoa health goth semiotics succulents kinfolk pork belly shaman. Cronut salvia farm-to-table kickstarter shaman cloud bread echo park.",
          },
          {
            title: "Item 3",
            content:
              "Health goth humblebrag live-edge meggings pork belly actually ugh kombucha banh mi plaid etsy waistcoat. Hammock celiac crucifix tousled, dreamcatcher tbh truffaut direct trade cliche synth hot chicken palo santo pork belly man bun retro. Art party +1 live-edge occupy iceland selfies beard fanny pack godard 90's messenger bag. Bushwick irony umami woke. Kale chips raw denim austin, food truck flexitarian 90's deep v. Locavore green juice cold-pressed hexagon copper mug vegan sriracha man bun la croix photo booth forage. Succulents migas irony hella mumblecore keytar waistcoat aesthetic cornhole shabby chic tumblr semiotics readymade.",
          },
          {
            title: "Item 4",
            content:
              "Tbh next level subway tile ennui cloud bread. Master cleanse vaporware food truck, authentic distillery meggings ugh activated charcoal iceland gastropub fam. Raw denim direct trade pinterest keytar fam echo park wolf four dollar toast glossier kitsch taiyaki 8-bit austin. Brunch pinterest raw denim banh mi, bushwick organic artisan synth poutine man bun scenester. Occupy chartreuse food truck banh mi affogato shaman.",
          },
          {
            title: "Item 5",
            content:
              "Aesthetic tofu dreamcatcher lumbersexual jianbing poke PBR&B kogi heirloom. Sartorial artisan synth tacos vegan bushwick, lomo thundercats VHS disrupt bespoke scenester. Copper mug taiyaki occupy, coloring book drinking vinegar taxidermy direct trade intelligentsia quinoa raw denim succulents. Dreamcatcher copper mug fanny pack yuccie art party hoodie, ugh portland.",
          },
          {
            title: "Item 6",
            content:
              "Oh. You need a little dummy text for your mockup? How quaint.",
          },
        ]}
      /> */}
    </SidebarWrapper>
  );
};

export default Sidebar;
