import React, { useEffect, useState } from "react";
import "./TableOfContents.css";

function TableOfContents() {
  const [headings, setHeadings] = useState([]);

  useEffect(() => {
    const selectedHeadings = Array.from(
      document.querySelectorAll("article :is(h2, h3, h4)")
    );
    setHeadings(selectedHeadings);
  }, []);

  const generateTableOfContents = (headings, level = 1) => {
    const tocItems = [];

    for (let i = 0; i < headings.length; i++) {
      const heading = headings[i];
      const headingLevel = parseInt(heading.tagName.substring(1));

      if (headingLevel === level) {
        tocItems.push(
          <li key={i}>
            <a href={`#${heading.id}`}>{heading.innerText}</a>
          </li>
        );
      } else if (headingLevel > level) {
        const childHeadings = [];
        let j = i + 1;

        while (
          j < headings.length &&
          parseInt(headings[j].tagName.substring(1)) > headingLevel
        ) {
          childHeadings.push(headings[j]);
          j++;
        }

        i = j - 1; // Skip the child headings

        tocItems.push(
          <li key={i}>
            <a href={`#${heading.id}`}>{heading.innerText}</a>
            <ol>{generateTableOfContents(childHeadings, level + 1)}</ol>
          </li>
        );
      }
    }

    return tocItems;
  };

  return (
    <nav className="table-of-contents">
      <h2>On this Page</h2>
      <ol className="toc-list">{generateTableOfContents(headings)}</ol>
    </nav>
  );
}

export default TableOfContents;
