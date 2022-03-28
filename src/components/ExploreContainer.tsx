import './ExploreContainer.css';
import React from 'react';
import { IonButton, IonIcon, IonContent } from '@ionic/react';

interface ContainerProps { }

const ExploreContainer: React.FC<ContainerProps> = () => {
  return (
    <div className="container">
      <IonButton expand='block'>Click</IonButton>
    </div>
  );
};

export default ExploreContainer;
