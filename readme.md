# 🍅 Pomodoro Timer

> A beautiful and minimalist Pomodoro timer web application to boost your productivity using the Pomodoro Technique.

---

## 📖 Description

This is a browser-based Pomodoro timer that helps you manage your time effectively using the popular **Pomodoro
Technique**.
The application features a clean interface with smooth color transitions and audio notifications to keep you focused and
productive.

---

## ✨ Features

- **⏱️ Three Timer Modes:**
    - 🔴 Working session (25 minutes)
    - 🟡 Short break (5 minutes)
    - 🟢 Long break (15 minutes)

- **🔄 Automatic Session Management** - After 4 working sessions, the app automatically switches to a long break
- **🎨 Visual Feedback** - Background color changes based on the current session type
- **🔔 Audio Notifications** - Sound alert when a session ends
- **🎮 Easy Controls:**
    - ▶️ Start/Stop button to control the timer
    - ⏭️ Skip button to move to the next session
    - 🔘 Quick mode switching buttons
- **📑 Browser Tab Title Updates** - Current time displayed in the browser tab

---

## 🛠️ Technologies Used

- **HTML5** - Structure
- **CSS3** - Styling
- **JavaScript (Vanilla)** - Timer logic and interactivity
- **Tailwind CSS** - Utility-first CSS framework for styling
- **Google Material Symbols** - Icons

---

## 📦 Installation

1. **Clone the repository:**
   ```bash
   git clone https://github.com/yourusername/pomodoro-timer.git
   cd pomodoro-timer
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```
3. **Run it using your favorite web server!**
4. **To make changes to the css, run this to compile Tailwind changes**
   ```bash
   npx @tailwindcss/cli -i ./src/styles.css -o ./src/output.css --watch
   ```
## 🚀 Usage

1. **Select a mode** by clicking one of the three buttons at the top:
    - **Pomodoro** - 25-minute work session
    - **Short Break** - 5-minute break
    - **Long Break** - 15-minute break

2. **Start the timer** by clicking the "Start timer" button

3. **Stay focused** during work sessions and relax during breaks

4. **Skip to the next session** anytime using the skip button (⏭️)

5. The app will automatically cycle through sessions:
    - Work → Short Break → Work → Short Break → Work → Short Break → Work → **Long Break** → Repeat


