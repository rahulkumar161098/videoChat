import './signup.css'
import React from 'react';
import { menuSharp, personSharp } from 'ionicons/icons';
import { IonContent, IonFooter, IonCol, IonRow, IonGrid, IonIcon, IonCard, IonCardHeader, IonCardSubtitle, IonInput, IonButton, IonHeader } from '@ionic/react';

const SignUp: React.FC = () => (
    <>
    {/* <div className="signUpIcon">
        <IonIcon icon={personSharp} size='large' color='danger'></IonIcon>
    </div> */}
        <IonCard className="signUpCardWidth">

            <IonCardHeader className="headingText">
                Register Now
            </IonCardHeader>
            <IonCardSubtitle className="inputField">
                <IonInput placeholder='First name' type='text' className='userInput' />
                <IonInput placeholder='Last name' type='text' className='userInput' />
                <IonInput placeholder='Email ID' type='email' className='userInput' />
                <IonInput placeholder='Password' type='password' className='userInput' />
                <IonButton expand='block' className="signUpBtn">Sign Up</IonButton>
                <p>
                    <a href="/signin"> Alredy have an account</a>
                </p>

            </IonCardSubtitle>

        </IonCard>
    </>
);
export default SignUp