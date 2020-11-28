
Install firebase library
```
  npm i firebase
```

## firebase project
Create firebase project

Register web app to firebase project


## Setup database
Cloud Firestore -> create datebase 
Cloud Firestore -> Rules -> Edit Rule
```
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /users/{userId} {
      allow read, update, delete: if request.auth != null && request.auth.uid == userId;
      allow create: if ture;
    }
  }
}

```

## Coding

```
import firebase from "firebase/app";
import "firebase/auth"
import "firebase/firestore"

```