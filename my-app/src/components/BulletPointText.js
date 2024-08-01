import 'bootstrap/dist/css/bootstrap.min.css';
import '../style.css';
import React from 'react';

const BulletPointText = ({ text }) => {
  const lines = text.split('\n');
  // Triplet: first number represents if the list is active, second and third number represent the index bounds of the unordered list
  let activeList = [0, 0, 0];

  const RenderLine = ( { line, index }) => {
    if (line.charAt(0) === '*') {
      if (activeList[0] === 0) {
        activeList = [1, index, index];
        console.log('new list detected: ' + activeList);
      } else {
        activeList = [1, activeList[1], index];
        console.log('list expanded: ' + activeList + '. List: ' + lines.length);
      }
      if (index === lines.length - 1) {
        console.log('bullets displayed due to end of array: ' + activeList);
        return <SubRenderList subList={lines.slice(activeList[1], lines.length)} />
      } else {
        return '';
      }
    } else {
      if (activeList[0] === 1) {
        activeList = [0, activeList[1], index];
        console.log('bullets displayed due to new line ' + activeList);
        return (
          <>
            <SubRenderList subList={lines.slice(activeList[1], activeList[2])} />
            {line}
          </>
        )
      } else {
        return <>{line}</>
      }
    }
  }

  const SubRenderList = ({ subList }) => {
    return (
      <ul>
        {subList.map((line, i) => (
          <li key={i}>{line.slice(1, line.length)}</li>
        ))}
      </ul>
    )
  }

  return (
    <div className="bullet-point-text">
      {lines.map((line, i) => (
        <RenderLine line={line} index={i} />
      ))}
    </div>
  );
}

export default BulletPointText;
