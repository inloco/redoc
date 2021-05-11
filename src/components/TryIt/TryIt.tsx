import * as React from 'react';
import styled from 'styled-components';

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


export function TryIt({ operation, ...otherProps }) {
  const [tryItOpen, setTryItOpen] = React.useState(false)

  const TryItComponent = otherProps.tryItComponent

  if (!TryItComponent) return <Endpoint operation={operation} />

  return (
    <>
      <TryItWrapper>
        <EndpointWrapper>
          <Endpoint operation={operation} />
        </EndpointWrapper>
        {!tryItOpen && <TryItButtonWrapper>
          <button onClick={() => setTryItOpen(true)}>Try it</button>
        </TryItButtonWrapper>}
      </TryItWrapper>
      {tryItOpen && <TryItComponent operation={operation} onClose={() => setTryItOpen(false)} />}
     </>
  );
}
