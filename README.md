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


## 🔮 Upcoming Features & Roadmap

Here is the plan for future updates and premium features to be added to the application:

### 1. 🤖 AI Note Assistant
*   **Note Summarization:** Automatically condense long notes.
*   **Key Points Extraction:** Extract actionable key points and tasks from notes.
*   **Tone Rewriting:** Rewrite notes in different tones (Professional, Simple, Academic).
*   **Grammar Correction:** Instant proofreading and grammar fixes.
*   *Example:* User inputs a meeting transcript ➔ AI outputs key action items.

### 2. 🎙️ Voice to Note
*   **Voice Recorder:** Create notes directly via voice.
*   **Speech-to-Text:** Real-time speech transcription.
*   **Multilingual Support:** Supports both Bengali and English language recognition.

### 3. 🔍 Smart Search
*   **AI-Powered Search:** Natural language search instead of simple keyword matching.
*   *Example:* Searching for `"Last month marketing meeting note"` will find relevant notes even if those exact words are not present in the title.

### 4. 🏷️ Tags & Categories
*   **Organization:** Group notes under labels like *Personal*, *Work*, *Study*, and *Ideas*.
*   **Color-Coded Tags:** Visually appealing tags for easy identification.

### 5. 📝 Rich Text Editor
*   **Formatting Options:** Bold, Italic, Underline, and Strike-through text.
*   **Elements:** Checklists, Code Blocks, Inline Image insertion, and Tables for a professional editor experience.

### 6. ⏰ Note Reminders & Notifications
*   **Reminders:** Set specific date & time reminders for notes.
*   **Notifications:** Push notifications and email reminders to keep you on track.
*   *Example:* `"Call client tomorrow at 10 AM"`.

### 7. 🎯 To-Do + Notes Hybrid
*   **Inline Tasks:** Add checklists directly inside notes to track progress.
*   *Example:*
    *   **Project Launch**
        *   [x] Create UI
        *   [x] Setup Database
        *   [ ] Deploy Server
        *   [ ] Marketing Campaign

### 8. ⏳ Version History
*   **Revisions:** Track edits with previous versions saved (Version 1, Version 2, etc.).
*   **Restore:** Revert to any previous state with a single click.

### 9. 📁 File & Image Attachments (OCR)
*   **Cloud Storage:** Attach files/images using Firebase Storage.
*   **Optical Character Recognition (OCR):** Extract text from uploaded images.

### 10. 📶 Offline-First Support
*   **Local CRUD:** Create, edit, and delete notes without an internet connection.
*   **Sync Engine:** Auto-sync offline changes once the device is back online.

### 11. 🔒 End-to-End Encryption
*   **Privacy first:** Secure notes on the client-side before sending them to the database, ensuring not even the server administrators can read them.

### 12. 📤 Export Options
*   **Formats:** Export notes to PDF, DOCX, Markdown, or plain TXT format.

---

## 🧠 Digital PA (Personal Assistant) Mode
Make the application feel like a digital Personal Assistant.

### 1. 🗃️ Personal Memory System
*   **Context Retention:** Remember important user info shared in notes.
*   *Example:*
    *   User inputs: *"My birthday is March 12"*, *"My gym time is 7 PM"*, *"My manager's name is Rahim"*.
    *   User asks: *"What time do I go to the gym?"*
    *   PA answers: *"You usually go to the gym at 7:00 PM."*

### 2. 📅 Smart Daily Briefing
*   **Daily Dashboard:** On opening the app, get a summary of your day:
    ```text
    Good Morning, Rakib 👋
    ------------------------
    Today's Tasks: 5 | Meetings: 2 | Pending Notes: 3
    
    Reminders:
    • Client Call - 11:00 AM
    • Gym - 7:00 PM
    
    Weather: Sunny ☀️
    ```

### 3. 🏁 Goal Tracking
*   **Milestones:** Set goals (e.g., *"Learn Golang"* with a 60-day target) and track progress visually.

### 4. 💬 Natural Language Reminder (NLR)
*   **NLP Parsing:** Parse natural language sentences to create alarms and reminders.
*   *Example:* Writing *"Remind me to pay electricity bill next Friday"* automatically parses and schedules the alarm.

### 5. 💬 AI Chat with Notes
*   **Knowledge Base:** Chat with your notes database.
*   *Example:* *"What did I write about React last month?"* ➔ AI searches, reads, and summarizes all relevant notes.

---

## 🔐 Password Manager (Vault Mode)
A separate, ultra-secure space for storing passwords and credentials.

### 🧩 1. Isolated Vault Mode
*   **Separation of Concerns:** Normal notes are stored in standard encrypted storage, whereas passwords reside in a high-security "Vault" section.
*   **Master Access:** Accessing the vault requires a master password/biometric validation.

### 🛡️ 2. Master Password Security
*   **Zero-Knowledge:** The server never knows or stores your master password.
*   **Hashing:** Utilizes robust hashing algorithms (Argon2 / bcrypt) for verification.

### 🔒 3. End-to-End Encryption (E2EE)
*   **AES-256:** Credentials are encrypted on the device before uploading to Firestore and decrypted locally only upon validation.
*   *Flow:* `User Input ➔ Encrypt (AES-256) ➔ Store in Database`
*   *Retrieval:* `Database ➔ Fetch Encrypted Data ➔ Decrypt on Device`

### 🧠 4. Smart Fields Schema
*   **Credential Structure:**
    ```json
    {
      "title": "Gmail",
      "username": "user@gmail.com",
      "password": "encrypted_text",
      "url": "https://gmail.com",
      "notes": "2FA backup keys included",
      "tag": "Finance"
    }
    ```

### 🔍 5. Quick Filter & Search
*   **Keywords:** Search by title, domain, or category.
*   **Tags:** Filter by categories such as *Social*, *Finance*, *Work*, etc.

### 📋 6. One-Click Copy & Clipboard Security
*   **Quick Actions:** Individual buttons to copy username, email, or password.
*   **Clipboard Purge:** Automatically clears the device clipboard after 30 seconds for security.

### ⏳ 7. Password Strength Indicator
*   **Strength analysis:** Color-coded indicator (🔴 Weak, 🟡 Medium, 🟢 Strong) shown when creating or updating passwords.

### 📊 8. Login History & Security Logs
*   **Audit Trail:** Track last accessed timestamps, device info, and logins.

### 🕒 9. Auto-Lock Timeout
*   **Inactivity Protection:** Auto-locks the vault after 1, 5, or 10 minutes of inactivity, requiring the master password again.

