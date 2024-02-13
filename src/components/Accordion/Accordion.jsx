import React, { useEffect, useRef, useState } from "react";
import styled, { css } from "styled-components";

const AccordionContainer = styled.div``;

const AccordionInner = styled.div`
  position: relative;
  width: 100%;
  border: 1px solid black;
  border-radius: 4px;
`;

const AccordionItem = styled.div`
  &:not(:last-child) {
    border-bottom: 1px solid black;
  }
`;

const AccordionTitle = styled.h3`
  margin: 0;
  padding: 1rem;
  cursor: pointer;
`;

const AccordionBody = styled.div`
  display: block;
  position: relative;
  padding: 0;
  margin: 0;
  height: 0;
  overflow: hidden;
  transition: height 0.3s;

  ${({ active, bodyHeight }) =>
    active &&
    css`
      height: ${bodyHeight}px;
    `}
`;

const AccordionContent = styled.div`
  margin: 0;
  padding: 0 1rem 1rem;
  height: auto;
`;

const sampleAccordionData = [
  {
    title: "Item 1",
    content: "Lorem ipsum dolor amet gastropub church-key ",
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
    content: "Oh. You need a little dummy text for your mockup? How quaint.",
  },
];

const Accordion = () => {
  const [currentAccordion, setCurrentAccordion] = useState(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  // Create refs dynamically based on the length of sampleAccordionData
  const accordionRefs = Array.from({ length: sampleAccordionData.length }, () =>
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useRef(null)
  );

  const toggleAccordion = (index) => {
    setCurrentAccordion((prevAccordion) =>
      prevAccordion === index ? null : index
    );
  };

  useEffect(() => {
    // Set the body height based on the currentAccordion index
    if (currentAccordion !== null) {
      setBodyHeight(accordionRefs[currentAccordion].current.clientHeight);
    } else {
      setBodyHeight(0);
    }
  }, [currentAccordion]);

  return (
    <div>
      <AccordionContainer>
        <AccordionInner>
          {sampleAccordionData.map(({ title, content }, index) => (
            <AccordionItem key={`accordion-item-${index}`}>
              <AccordionTitle onClick={() => toggleAccordion(index)}>
                {title}
              </AccordionTitle>
              <AccordionBody
                active={currentAccordion === index}
                bodyHeight={bodyHeight}
              >
                <AccordionContent ref={accordionRefs[index]}>
                  {content}
                </AccordionContent>
              </AccordionBody>
            </AccordionItem>
          ))}
        </AccordionInner>
      </AccordionContainer>
    </div>
  );
};

export default Accordion;
