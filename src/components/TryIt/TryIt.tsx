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
  background-color: #f0dfed;
  font-weight: 500;
  border-radius: 8px;
  padding: 0 16px;
  color: #3d3e3f;

  &:focus,
  &:hover {
    outline: none;
    background-color: #fcf2fb;
  }

  &:active {
    background-color: #fcf2fb;
  }
`;

export function TryIt(props) {
  const { operation, ...otherProps } = props;
  const [tryItOpen, setTryItOpen] = React.useState(
    props?.tryItOpen === operation?.operationId || false,
  );

  if (!otherProps.tryItComponent) return <Endpoint operation={operation} />;

  return (
    <>
      <TryItWrapper>
        <EndpointWrapper>
          <Endpoint operation={operation} />
        </EndpointWrapper>
        {!tryItOpen && (
          <TryItButtonWrapper>
            <Button onClick={() => setTryItOpen(true)}>Try it</Button>
          </TryItButtonWrapper>
        )}
      </TryItWrapper>
      {tryItOpen && otherProps.tryItComponent({ operation, onClose: () => setTryItOpen(false) })}
    </>
  );
}
