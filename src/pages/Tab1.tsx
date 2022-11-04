import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
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

                    <ion-row>
                        <button className="col my-auto btn d-flex align-items-center justify-content-center" onClick={() => navigator.vibrate(5000)}><img src="assets/icon/vibration.webp" alt="volume icon" height="90%" width="40%"/></button>
                        <button className="col my-auto btn d-flex align-items-center justify-content-center" onClick={() => new Audio('https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3').play()}><img src="assets/icon/volume.png" alt="volume icon" height="90%" width="60%"/></button>
                        <button className="col my-auto btn d-flex align-items-center justify-content-center" onClick={capture}><img src="assets/icon/picture.png" alt="volume icon" height="90%" width="50%"/></button>
                        {/* do a button that redirect to Tab2*/}
                    </ion-row>
                </div>
          </IonContent>
    </IonPage>
  );
};

export default Tab1;
