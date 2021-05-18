export function seedDatabase(firebase) {
    const users = [
      {
        userId: '3dhRxHj44NfmbJevzpM2ixX1cX92',
        username: 'wahab',
        fullName: 'aderinto wahab',
        emailAddress: 'aderintoadetunji@gmail.com@gmail.com',
        following: ['2'],
        followers: ['2', '3', '4'],
        dateCreated: Date.now()
      },
      {
        userId: '2',
        username: 'nusirat',
        fullName: 'aderinto nusirat',
        emailAddress: 'nusirataderinto@gmail.com',
        following: [],
        followers: ['3dhRxHj44NfmbJevzpM2ixX1cX92'],
        dateCreated: Date.now()
      },
      {
        userId: '3',
        username: 'ridwan',
        fullName: 'fasasi ridwan',
        emailAddress: 'fasasiolatunbosun023@gmail.com ',
        following: [],
        followers: ['3dhRxHj44NfmbJevzpM2ixX1cX92'],
        dateCreated: Date.now()
      },
      {
        userId: '4',
        username: 'sadik',
        fullName: 'aderinto sadik',
        emailAddress: 'sa.ayinda@gmail.com',
        following: [],
        followers: ['3dhRxHj44NfmbJevzpM2ixX1cX92'],
        dateCreated: Date.now()
      }
    ];
  
    for (let k = 0; k < users.length; k++) {
      firebase.firestore().collection('users').add(users[k]);
    }
  
    for (let i = 1; i <= 5; ++i) {
      firebase
        .firestore()
        .collection('photos')
        .add({
          photoId: i,
          userId: '2',
          imageSrc: `/images/users/raphael/${i}.jpg`,
          caption: 'Saint George and the Dragon',
          likes: [],
          comments: [
            {
              displayName: 'nusi',
              comment: 'Love this place, looks like my animal farm!'
            },
            {
              displayName: 'ridwan',
              comment: 'Would you mind if I used this picture?'
            }
          ],
          userLatitude: '40.7128°',
          userLongitude: '74.0060°',
          dateCreated: Date.now()
        });
    }
  }