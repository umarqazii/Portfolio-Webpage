import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {
//  const typedTextRef = useRef(null);

  useEffect(() => {
    var typedName = new Typed('.typedName', {
      strings: ['Umar Qazi'],
      typeSpeed: 150,
      showCursor: false,
    });

    var typedSkill = new Typed('.typedSkill', {
      strings: [
        'C/C++, Java, Python',
        'HTML, CSS, JavaScript',
        'SQL , MongoDB',
        'Linux (Ubuntu)',
        'Web Development',
      ],
      typeSpeed: 50,
    });

    return () => {
      typedName.destroy();
      typedSkill.destroy();
    };
  }, []);

  return (
        <div>
        <p>Hi! My name is</p>
        <span className="typedName" style={{ color: '#9f009f' }}></span>
        <p>and I am proficient in</p>
        <span id="element" className="typedSkill" style={{ color: '#9f009f' }}></span>
        </div>
  );
};

export default TypedText;
