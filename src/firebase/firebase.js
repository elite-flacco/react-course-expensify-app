import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export { firebase, googleAuthProvider, database as default };

// // child_removed event
// database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_changed event
// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// // child_added event
// database.ref('expenses').on('child_added', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// })

// database.ref('expenses')
// .once('value')
// .then((snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];
//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     })
//     console.log(expenses);
// })

// database.ref('expenses').push({
//     description: 'April rent',
//     note: 'my rent',
//     amount: 2000,
//     createdAt: 932842923480
// });


// const firebaseNotes = {
//     notes: {
//         fewifjo: {
//             title: 'first note',
//             body: 'this is my note'
//         },
//         fweiojoirw: {
//             title: 'second note',
//             body: 'this is my second note'
//         }
//     }
// }

// const onValueChange = database.ref().on('value', (snapshot) => {
//     const val = snapshot.val();
//     console.log(`${val.name} is a ${val.job.title}  at ${val.job.company}`);
// }, (e) => {
//     console.log('error fetching data', e)
// })

// setTimeout(() => {
//     database.ref('age').set(31);
// }, 3500);

// // setTimeout(() => {
// //     database.ref().off(onValueChange);
// // }, 7000);

// setTimeout(() => {
//     database.ref('age').set(33);
// }, 10500);

// database.ref()
//     .once('value')
//     .then((snapshot) => {
//         const val = snapshot.val();
//         console.log(val);
//     })
//     .catch((e) => {
//         console.log('error fetching data', e);
//     })

// database.ref().set({
//     name: 'shuang',
//     age: 34,
//     stressLevel: 6,
//     job: {
//         title: 'product manager',
//         company: 'BofA'
//     },
//     location: {
//         state: 'new jersey',
//         city: 'jersey city'
//     }
// }).then(() => {
//     console.log('data is saved!');
// }).catch((e) => {
//     console.log('this failed.', e);
// });

// // //   database.ref().set('this is my data');

// // // database.ref('age').set(22);
// // // database.ref('location/city').set('hoboken');

// // database.ref('attributes').set({
// //     height: 162,
// //     weight: 100
// // }).then(() => {
// //     console.log('data added')
// // }).catch((e) => {
// //     console.log('failed!!', e)
// // })

// // database.ref('isSingle').remove()
// //     .then(() => {
// //         console.log('data removed!')
// //     }).catch((e) => {
// //         console.log('remove failed', e);
// //     })

// database.ref().update({
//     stressLevel: 9,
//     'job/company': 'Amazon',
//     'location/city': 'new york'
// })

// console.log('I made a request to change the data');