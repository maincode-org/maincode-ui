import { FunctionsCannon, MathLive } from 'maincode-ui';
import React, { useState } from 'react';
import { IonButton } from '@ionic/react';

const FunctionsCannonPlayground: React.FC = () => {
  const [shouldRevealA, setShouldRevealA] = useState(false);
  const [shouldRevealC, setShouldRevealC] = useState(false);
  const [parabolaA, setParabolaA] = useState(-0.2);
  const [parabolaC, setParabolaC] = useState(3);
  console.log('new render. revA and revC:', shouldRevealA, shouldRevealA);

  const mathLiveOnChange = (values: (string | undefined)[]) => {
    console.log('Math Live changed. revA and revC:', shouldRevealA, shouldRevealC);
    console.log('New values from input field: ', values);
  };

  return (
    <>
      <FunctionsCannon
        id='cannon'
        parabolaValues={{ a: parabolaA, c: parabolaC }}
        axisOptions={{ x: { from: 0, to: 10 }, y: { from: 0, to: 10 }, color: { light: '#431959', dark: '' } }}
        shouldRevealA={shouldRevealA}
        shouldRevealC={shouldRevealC}
        theme={{ backgroundColor: { light: '#de5a67', dark: '#de2a25' }, parabolaColor: { light: '#8fde5a', dark: '#2fdeaa' }, playButtonColor: { light: 'secondary', dark: 'primary' } }}
      />
      <MathLive
        formula='f(x)=\placeholder{}\cdot x^2+x+\placeholder{}'
        onChange={mathLiveOnChange}
        answerValues={[
          { value: parabolaA, shouldReveal: shouldRevealA },
          { value: parabolaC, shouldReveal: shouldRevealC },
        ]}
      />
      <p>Current rev A{shouldRevealA ? ': TRUE' : ': FALSE'}</p>
      <p>Current rev C{shouldRevealC ? ': TRUE' : ': FALSE'}</p>
      <IonButton onClick={() => setShouldRevealA(!shouldRevealA)}>Swap reveal A</IonButton>
      <IonButton onClick={() => setShouldRevealC(!shouldRevealC)}>Swap reveal C</IonButton>
      <input onChange={(e) => setParabolaA(Number(e.target.value) ?? 0)} />
      <input onChange={(e) => setParabolaC(Number(e.target.value) ?? 0)} />
    </>
  );
};
export default FunctionsCannonPlayground;
