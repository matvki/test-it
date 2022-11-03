import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import './Tab2.css';

const Tab2: React.FC = () => {
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
                        <IonTitle size="large">Tab 2</IonTitle>
                    </IonToolbar>
                </IonHeader>
                <div id="container" className="mx-auto d-flex align-items-center justify-content-center flex-column">
                    <h1 className="ion-text-center">
                        Giroscope
                    </h1>
                    {/* display a gyroscope that work on phone */}

                </div>
            </IonContent>
        </IonPage>
    );
};

export default Tab2;
