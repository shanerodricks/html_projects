import { useState } from "react";
import styled from "styled-components";
/* 
  TASKS
  #1 - Add a state variable to keep track of which index
  in the images array you want to display. Modify the <img> 
  to display the current index's image.

  #2 - Add event handlers to the buttons to appropriately update
  the index.

  #3 - Use conditional logic to set the appropriate button's
  disabled attribute to true when the index can no longer be
  incremented / decremented.
*/
export default function Slideshow({ images }) {
  const [imageIndex, setIndex] = useState(0);

  return (
    <Wrapper>
      <ImageWrapper>
        <img src={images[imageIndex]} alt="" />
      </ImageWrapper>
      <Controls>
        <button
          disabled={imageIndex === 0}
          onClick={() => setIndex(imageIndex - 1)}
        >
          Previous
        </button>
        <button
          disabled={imageIndex === images.length - 1}
          onClick={() => setIndex(imageIndex + 1)}
        >
          Next
        </button>
      </Controls>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const ImageWrapper = styled.div`
  border: 10px solid black;
  background-color: white;
  overflow: hidden;
  img {
    width: 100%;
    object-fit: cover;
    display: block;
    max-width: 1000px;
    max-height: 600px;
    padding: 20px;
  }
`;

const Controls = styled.div`
  padding-top: 10px;
  display: flex;
  justify-content: center;
  gap: 10px;
`;
