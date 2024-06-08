import styled from "styled-components";

export const WrapperSlider = styled.div`
  position: relative;
`;

// export const ButtonPrev = styled.button`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   position: absolute;
//   top: 44%;
//   left: 0;
//   z-index: 1;
//   width: 40px;
//   height: 40px;
//   border: none;
//   border-radius: 50%;
//   transition: all 0.5s;
//   background-color: var(--light-blue);

//   & svg {
//     rotate: 270deg;
//     fill: var(--dark-blue);
//   }

//   &:hover {
//     background-color: var(--dark-blue);
//     box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.7);

//     & svg {
//       fill: var(--light-blue);
//     }
//   }
// `;

export const Button = styled.button<{ $left: boolean }>`
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 44%;
  ${(props) => (props.$left ? "left: 0;" : "right: 0;")}
  z-index: 1;
  width: 40px;
  height: 40px;
  border: none;
  border-radius: 50%;
  transition: all 0.5s;
  background-color: var(--light-blue);

  & svg {
    rotate: ${(props) => (props.$left ? "270deg" : "90deg")};
    fill: var(--dark-blue);
  }

  &:hover {
    background-color: var(--dark-blue);
    box-shadow: 0px 0px 30px 0px rgba(233, 255, 255, 0.7);

    & svg {
      fill: var(--light-blue);
    }
  }
`;
