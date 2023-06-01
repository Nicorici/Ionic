import React from 'react';
import { IonList, IonItem, IonLabel, IonNote } from '@ionic/react';

const FieldList: React.FC = () => {
 //create a list of fields
    const fields = [
        {
            name: 'Field 1',
            description: 'This is the first field',
            date: '2021-01-01'
        },
        {
            name: 'Field 2',
            description: 'This is the second field',
            date: '2021-01-02'
        },
        {
            name: 'Field 3',
            description: 'This is the third field',
            date: '2021-01-03'
        },
        {
            name: 'Field 4',
            description: 'This is the fourth field',
            date: '2021-01-04'
        },
        {
            name: 'Field 5',
            description: 'This is the fifth field',
            date: '2021-01-05'
        },
        {
            name: 'Field 6',
            description: 'This is the sixth field',

            date: '2021-01-06'
        },
        {
            name: 'Field 7',
            description: 'This is the seventh field',
            date: '2021-01-07'
        },
        {
            name: 'Field 8',

            description: 'This is the eighth field',
            date: '2021-01-08'
        },  
        {


            name: 'Field 9',
            description: 'This is the ninth field',
            date: '2021-01-09'
        },
    ];
 
    return (
   <IonList>
     {fields.map((field, index) => (
       <IonItem key={index}>
         <IonLabel className="ion-text-wrap">
           <h2>
             {field.name}
             <span className="date">
               <IonNote>{field.date}</IonNote>
             </span>
           </h2>
           <h3>
             {field.description}
             <span className="date">
               <IonNote>{field.date}</IonNote>
             </span>
           </h3>
           <p>
             {field.description}
             <span className="date">
               <IonNote>{field.date}</IonNote>
             </span>
           </p>
         </IonLabel>
       </IonItem>
     ))}
   </IonList>
 );
};
export default FieldList;
