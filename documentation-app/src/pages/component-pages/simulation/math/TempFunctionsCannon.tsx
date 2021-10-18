import { FunctionsCannon, MathLive } from 'maincode-ui';
import React, { useState } from 'react';
import { IonButton } from '@ionic/react';

const TempFunctionsCannon: React.FC = () => {
  const [shouldRevealA, setShouldRevealA] = useState(false);
  const [shouldRevealC, setShouldRevealC] = useState(false);
  const [parabolaA, setParabolaA] = useState(-0.2);
  const [parabolaC, setParabolaC] = useState(3);
  console.log('new render. revA and revC:', shouldRevealA, shouldRevealA);

  return (
    <>
      <FunctionsCannon
        id='cannon'
        parabolaValues={{ a: parabolaA, c: parabolaC }}
        axisOptions={{ x: { from: 0, to: 15 }, y: { from: 0, to: 10 } }}
        shouldRevealA={shouldRevealA}
        shouldRevealC={shouldRevealC}
      />
      <MathLive
        formula={`f(x)=${parabolaA && shouldRevealA ? '' : '-'}\\placeholder{}\\cdot x^2+x+\\placeholder{}`}
        onChange={(values) => {
          console.log('Math Live changed. revA and revC:', shouldRevealA, shouldRevealC);
          console.log('New values from input field: ', values);
        }}
        initialValues={[shouldRevealA ? parabolaA.toString() : '', shouldRevealC ? parabolaC.toString() : '']}
      />
      <IonButton onClick={() => setShouldRevealA(!shouldRevealA)}>Swap reveal A</IonButton>
      <IonButton onClick={() => setShouldRevealC(!shouldRevealC)}>Swap reveal C</IonButton>
      <input onChange={(e) => setParabolaA(Number(e.target.value) ?? 0)} />
      <input onChange={(e) => setParabolaC(Number(e.target.value) ?? 0)} />
    </>
  );
};
export default TempFunctionsCannon;