// src/components/Section.js
import React, { useEffect, useRef } from 'react';
import { Link, Button, Element, Events, animateScroll as scroll, scrollSpy } from 'react-scroll';

function Section() {
  // const listRef = useRef(null);

  // useEffect(() => {
  //   Events.scrollEvent.register('begin', function (to, element) {
  //     console.log('begin', arguments);
  //   });
  // });

  return (
    <div>
      <ul>
        {Array.from({ length: 100 }).map((_, index) => (
          <li key={index}>Item {index + 1}</li>
        ))}
      </ul>
    </div>
  );
};

export default Section;
