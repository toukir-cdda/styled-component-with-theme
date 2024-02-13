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
  // overflow: hidden;

  overflow-y: auto;

  //scroll bar hidden
  &::-webkit-scrollbar {
    display: none;
  }
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

const Accordion = ({ data = [] }) => {
  const [currentAccordion, setCurrentAccordion] = useState(null);
  const [bodyHeight, setBodyHeight] = useState(0);

  // Create refs dynamically based on the length of sampleAccordionData
  const accordionRefs = Array.from({ length: data?.length }, () =>
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
    <AccordionContainer>
      <AccordionInner>
        {data?.map(({ title, content }, index) => (
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
  );
};

export default Accordion;
