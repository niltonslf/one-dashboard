import React from "react";
import styled from "styled-components";

const Button = ({ icon, color }) => {
  const DefaultButton = styled.span`
    min-width: 30px;
    height: 30px;
    margin: 5px;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    cursor: pointer;
    box-shadow: 1px 1px 5px 0 rgba(0, 0, 0, 0.5);
    background: #666;
    background-color: ${color ? `var(--color-${color})` : ""};
  `;

  return <DefaultButton>{icon}</DefaultButton>;
};

export { Button };
