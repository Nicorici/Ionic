import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import FieldList from '../components/FieldList';

const Tab3: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 324323</IonTitle>
            <FieldList />
          </IonToolbar>
        </IonHeader>
        <ExploreContainer name="Tab 3 xsaxsaxsapage" />
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
