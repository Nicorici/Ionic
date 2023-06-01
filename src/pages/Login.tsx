import React, { useState } from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonInput, IonButton, IonGrid, IonRow, IonCol } from '@ionic/react';
import './Login.css';

interface LoginProps {
    history: any;
  }

const Login: React.FC<LoginProps> = ({history}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e: any) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: any) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Perform login logic here using email and password
    // For demonstration purposes, we'll simply navigate to a new page
     history.push('/dashboard');
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Login Page</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <div className="container">
          <IonGrid>
            <IonRow>
              <IonCol size="12" size-md="8" offset-md="2" size-lg="6" offset-lg="3" size-xl="4" offset-xl="4">
                <div className="form-container">
                  <form onSubmit={handleSubmit}>
                    <IonInput type="email" value={email} onIonChange={handleEmailChange} placeholder="Email"></IonInput>
                    <IonInput type="password" value={password} onIonChange={handlePasswordChange} placeholder="Password"></IonInput>
                    <IonButton type="submit" expand="full">Login</IonButton>
                  </form>
                </div>
              </IonCol>
            </IonRow>
          </IonGrid>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default Login;
