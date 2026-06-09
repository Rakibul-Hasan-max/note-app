# Note App 📝

A premium, minimalist diary and note-keeping mobile application built with **React Native**, **Expo**, and **Firebase**. This app allows users to securely organize their daily thoughts, tasks, and notes on the go.

---

## 🚀 Features

*   **User Authentication:** Secure Sign Up and Log In flow using Firebase Authentication.
*   **Real-time Synchronization:** Powered by Firebase Firestore, ensuring any addition, update, or deletion of notes is synced in real-time across the app.
*   **Note Themes:** Customize each note with individual background color options (Green, Orange, Blue, and Purple).
*   **Responsive UI:** Sleek and user-friendly interface designed to scale seamlessly across different screen sizes.
*   **Flash Feedback:** Instant success/error alerts using React Native Flash Message for all operations.

---

## 🛠️ Tech Stack

*   **Frontend Framework:** React Native (Expo SDK 45)
*   **Database & Auth:** Firebase v9 (Firestore & Firebase Auth)
*   **Navigation:** React Navigation v6 (Native Stack Navigator)
*   **Styling:** React Native StyleSheet
*   **Icons & Assets:** Expo Vector Icons (AntDesign, MaterialIcons, FontAwesome)
*   **Alerts/Notifications:** React Native Flash Message

---

## 📁 Directory Structure

```text
note-app/
├── .expo-shared/        # Expo shared settings
├── assets/              # App images and logos
├── src/                 # Core source code
│   ├── components/      # Shared/Reusable UI components (e.g., Button)
│   ├── screens/         # Application screens
│   │   ├── login.jsx    # User Log In screen
│   │   ├── signup.jsx   # User Sign Up screen
│   │   ├── home.jsx     # Home screen containing list of notes
│   │   ├── create.jsx   # Create new note form
│   │   └── edit.jsx     # Edit/Update existing note form
│   └── theme/           # Style definitions
│       ├── colors.js    # Color palette configuration
│       └── spacing.js   # Margin and padding sizes
├── App.js               # Entry point and Firebase Initialization
├── app.json             # Expo configuration file
├── babel.config.js      # Babel configuration
└── package.json         # Scripts and dependencies
```

---

## 🔧 Local Setup & Run

Follow these steps to run the application on your local machine:

### 1. Clone the Repository
```bash
git clone https://github.com/Rakibul-Hasan-max/note-app.git
cd note-app
```

### 2. Install Dependencies
You can install the dependencies using either `yarn` or `npm`:
```bash
yarn install
# or
npm install
```

### 3. Configure Firebase
The app comes with a pre-configured Firebase project. If you wish to hook it up to your own Firebase project, replace the `firebaseConfig` object in `App.js` with your own credentials:

```javascript
const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_AUTH_DOMAIN",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID",
};
```

### 4. Run the Project
Start the Expo development server:
```bash
yarn start
# or
npm run start
```
Download the **Expo Go** app on your physical iOS or Android device, and scan the QR code printed on the terminal screen to test the app live.

---

## 🗄️ Database Schema

The database relies on two primary collections in Firebase Firestore:

### `users` Collection
Stores metadata of registered users.
| Field | Type | Description |
| :--- | :--- | :--- |
| `uid` | String | Unique ID mapped from Firebase Auth |
| `name` | String | User's full name |
| `email` | String | User's email address |
| `password` | String | User's password |
| `phone` | String | User's phone number |
| `age` | String | User's age |
| `gender` | String | User's gender (Male/Female) |

### `notes` Collection
Stores all the notes created by users.
| Field | Type | Description |
| :--- | :--- | :--- |
| `uid` | String | Reference to the owner's `uid` |
| `title` | String | Title of the note |
| `description` | String | Content/Description of the note |
| `color` | String | Background color theme (green, orange, blue, purple) |

---
