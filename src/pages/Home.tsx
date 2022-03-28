import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonFooter } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';
import Header from '../components/Header/Header';
import SignUp from '../components/Signup/Signup';
import SignIn from '../components/SignIn/SignIn';

const Home: React.FC = () => {
  return (
    <IonPage className="color">
      <IonHeader>
        <IonToolbar>
          <IonTitle className='footerSize'>
            <Header></Header>
          </IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <div className="mainContent">
          <SignUp></SignUp>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Home;
