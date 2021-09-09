import { IonButtons, IonContent, IonHeader, IonMenuButton, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import { useParams } from 'react-router';
import { ExampleComponent } from 'maincode-ui';

import './Page.css';

const Page: React.FC = () => {
  const { name } = useParams<{ name: string }>();

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot='start'>
            <IonMenuButton />
          </IonButtons>
          <IonTitle>{name}</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse='condense'>
          <IonToolbar>
            <IonTitle size='large'>{name}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <section className='px-1'>
          <h2>Lets put the intro description here</h2>
          <h2>Lets put the usage / demo's here</h2>
          <ExampleComponent text='Component!' />
          <h2>Lets put the children of this page here</h2>
          <h2>Lets put the prop descriptions here</h2>
          <h2>Lets put the style descriptions here</h2>
        </section>
      </IonContent>
    </IonPage>
  );
};

export default Page;
