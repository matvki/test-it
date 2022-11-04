import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonRow, IonCol, IonGrid} from '@ionic/react';
import { Camera, CameraResultType } from '@capacitor/camera';
import './Tab1.css';
import {IonReactRouter} from "@ionic/react-router";

const capture = async () => {
    const image = await Camera.getPhoto({
        quality: 90,
        allowEditing: true,
        resultType: CameraResultType.Uri
    });
  alert("Image sauvegardé dans votre galerie. Aucun probkème avec le plugin Camera.");
}

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
                    <IonGrid>
                        <IonRow>
                            <IonCol>
                                <button className="btn d-flex align-items-center justify-content-center" onClick={() => navigator.vibrate(5000)}><img src="assets/icon/vibration.webp" alt="Vibration icon" height="90%" width="80%"/></button>
                            </IonCol>
                            <IonCol>
                                <button className="btn d-flex align-items-center justify-content-center" onClick={() => new Audio('assets/music.mp3').play()}><img src="assets/icon/volume.png" alt="volume icon" height="75%" width="80%"/></button>
                            </IonCol>
                        </IonRow>
                        <IonRow>
                            <IonCol className="align-items-center justify-content-center d-flex">
                                <button className="btn d-flex align-items-center justify-content-center" onClick={capture}><img src="assets/icon/picture.png" alt="Camera icon" height="90%" width="60%"/></button>
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
          </IonContent>
    </IonPage>
  );
};

export default Tab1;
