import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab1.css';

const Tab1: React.FC = () => {
  return (
    <IonPage>
          <IonHeader>
                <IonToolbar>
                      <IonTitle>Appli IT</IonTitle>
                </IonToolbar>
          </IonHeader>
          <IonContent fullscreen>
                <IonHeader collapse="condense">
                    <IonToolbar>
                        <IonTitle size="large">Tab 1</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div id="container" className="mx-auto">
                    <h1 className="ion-text-center">
                        Choisissez votre bouton
                    </h1>
                    <div className="d-flex justify-content-center align-items-center row">
                        <button className="col my-auto">Bouton 1</button>
                        <button className="col my-auto">Bouton 2</button>
                        <button className="col my-auto">Bouton 3</button>
                        <button className="col my-auto">Bouton 4</button>
                    </div>
                </div>
          </IonContent>
    </IonPage>
  );
};

export default Tab1;
