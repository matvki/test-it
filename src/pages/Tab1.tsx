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
                <div id="container" className="mx-auto d-flex align-items-center justify-content-center flex-column">
                    <h1 className="ion-text-center">
                        Choisissez votre bouton
                    </h1>
                    <div className="d-flex justify-content-center align-items-center row">
                        <button className="col my-auto btn d-flex align-items-center justify-content-center"><img src="assets/icon/vibration.webp" alt="volume icon" height="90%" width="40%"/></button>
                        <button className="col my-auto btn d-flex align-items-center justify-content-center"><img src="assets/icon/volume.png" alt="volume icon" height="90%" width="60%"/></button>
                        <button className="col my-auto btn d-flex align-items-center justify-content-center"><img src="assets/icon/picture.png" alt="volume icon" height="90%" width="50%"/></button>
                        <button className="col my-auto btn d-flex align-items-center justify-content-center"><img src="assets/icon/mystery.png" alt="volume icon" height="90%" width="60%"/></button>
                    </div>
                </div>
          </IonContent>
    </IonPage>
  );
};

export default Tab1;
