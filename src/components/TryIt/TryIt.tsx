import * as React from 'react';
import styled from '../../styled-components';

import { Endpoint } from '../Endpoint/Endpoint';

const TryItWrapper = styled.div`
  display: flex;
`;

const EndpointWrapper = styled.div`
  flex-grow: 1;
`;

const TryItButtonWrapper = styled.div`
  margin-left: 12px;
  margin-bottom: 5px;
  display: flex;
`;

const Button = styled.button`
  border: 0;
  background-color: #F0DFED;
  font-weight: 500;
  border-radius: 8px;
  padding: 0 16px;
  color: #3D3E3F;

  &:focus,
  &:hover {
    outline: none;
    background-color: #FCF2FB;
  }

  &:active {
    background-color: #FCF2FB;
  }
`

export function TryIt(props) {
  const [tryItOpen, setTryItOpen] = React.useState(false)
  const { operation, ...otherProps } = props

  if (!otherProps.tryItComponent) return <Endpoint operation={operation} />

  return (
    <>
      <TryItWrapper>
        <EndpointWrapper>
          <Endpoint operation={operation} />
        </EndpointWrapper>
        {!tryItOpen && <TryItButtonWrapper>
          <Button onClick={() => setTryItOpen(true)}>Try it</Button>
        </TryItButtonWrapper>}
      </TryItWrapper>
      {tryItOpen && otherProps.tryItComponent({ operation, onClose: () => setTryItOpen(false)})}
     </>
  );
}
