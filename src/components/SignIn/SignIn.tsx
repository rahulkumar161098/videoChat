import './signin.css';
import React from 'react';
import { IonButton, IonCard, IonCardContent, IonCardHeader, IonFabButton, IonInput } from '@ionic/react';
import SignUp from '../Signup/Signup';

const SingIn: React.FC = () =>(
    <>
    <IonCard className="cardWidth">
        <IonCardHeader className='signInHeading'>
            Sign In
        </IonCardHeader>
        <IonCardContent>
            <IonInput type='text' placeholder='Username/Email' className='userInput' />
            <IonInput type='password' placeholder='Password' className='userInput' />
            <IonButton expand='block' className='signInBtn'>Sign In</IonButton>
            <p><a href='/signup'>Create an account</a></p>
        </IonCardContent>
    </IonCard>
    </>
)
export default SingIn