import './header.css'
import React from 'react';
import { menuSharp,personSharp } from 'ionicons/icons';
import { IonContent, IonFooter, IonCol, IonRow, IonGrid, IonIcon } from '@ionic/react';

const Header: React.FC = () => (
  <>
    <IonGrid>
        <IonRow >
            <IonCol size="2" className="headerText"><IonIcon className="menuIcon" icon={menuSharp} size='large' color='primary'></IonIcon></IonCol>
            <IonCol size="8" className="headerText">logo</IonCol>
            <IonCol size="2" className="headerText"><IonIcon icon={personSharp} size='large' color='primary'></IonIcon></IonCol>
        </IonRow>
    </IonGrid>
  </>
);
export default Header