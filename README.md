# Mindful Moments - Voice Wellness Companion 🌙

> An AI-powered voice companion that helps you stay mindful through daily check-ins, mood tracking, and goal setting with seamless Notion integration.

[![License: MIT](https://img.shields.io/badge/License-MIT-blue.svg)](./LICENSE)
[![Next.js](https://img.shields.io/badge/Next.js-15-black)](https://nextjs.org/)
[![Python](https://img.shields.io/badge/Python-3.9+-blue)](https://www.python.org/)
[![LiveKit](https://img.shields.io/badge/LiveKit-Agents-green)](https://livekit.io/)

## ✨ Features

- 🎙️ **Natural Voice Conversations** - Speak naturally with an AI companion powered by AssemblyAI
- 🌙 **Mood Tracking** - Monitor your emotional state over time
- 💫 **Energy Monitoring** - Track your energy levels throughout your journey
- ✨ **Goal Setting** - Set and track daily intentions
- 📊 **Notion Integration** - Automatically sync your goals to Notion databases
- ⚡ **Streak Tracking** - Stay motivated with consecutive day tracking
- 💬 **Supportive AI** - Non-judgmental, warm companion for daily reflection

## 🎯 What Makes This Special

Unlike traditional wellness apps, Mindful Moments uses voice-first interaction to make daily check-ins feel natural and effortless. Your intentions are automatically organized in Notion, and you can complete tasks just by speaking.

## 🏗️ Tech Stack

### Backend
- **Python 3.9+** with `uv` package manager
- **LiveKit Agents** - Real-time voice AI framework
- **AssemblyAI** - Speech-to-text transcription
- **Google Gemini** - Large language model
- **Murf AI** - Natural text-to-speech
- **Notion API** - Task management integration

### Frontend
- **Next.js 15** with Turbopack
- **React 18** with TypeScript
- **Tailwind CSS** - Styling
- **Framer Motion** - Smooth animations
- **LiveKit Client SDK** - WebRTC voice communication

## 🚀 Quick Start

### Prerequisites

- Python 3.9+ with [uv](https://docs.astral.sh/uv/) installed
- Node.js 18+ with pnpm
- LiveKit Server
- API Keys:
  - [AssemblyAI](https://www.assemblyai.com/) (Speech-to-text)
  - [Google AI Studio](https://aistudio.google.com/) (Gemini LLM)
  - [Murf AI](https://murf.ai/) (Text-to-speech)
  - [Notion](https://www.notion.so/my-integrations) (Task management)

### Installation

1. **Clone the repository**
```bash
git clone https://github.com/Gangadhar-NG-CODER/mindful-moments-voice-companion.git
cd mindful-moments-voice-companion
```

2. **Set up the backend**
```bash
cd backend
uv sync
cp .env.example .env
# Edit .env and add your API keys
uv run python src/agent.py download-files
```

3. **Set up the frontend**
```bash
cd ../frontend
pnpm install
cp .env.example .env.local
# Add LiveKit credentials to .env.local
```

4. **Configure Notion** (Optional but recommended)
   - Create a [Notion integration](https://www.notion.so/my-integrations)
   - Create a database with properties: Name (Title), Status (Select), Date, Mood (Select), Energy (Number)
   - Share the database with your integration
   - Add the API key and database ID to `backend/.env`

### Running the App

**Option 1: Run all services together**
```bash
chmod +x start_app.sh
./start_app.sh
```

**Option 2: Run services individually**
```bash
# Terminal 1 - LiveKit Server
livekit-server --dev

# Terminal 2 - Backend Agent
cd backend
uv run python src/agent.py dev

# Terminal 3 - Frontend
cd frontend
pnpm dev
```

Open http://localhost:3000 and start your wellness journey! 🌱

## 🎭 How to Use

1. **Start a Session** - Click "Start Check-in" on the welcome screen
2. **Speak Naturally** - The AI will guide you through:
   - How you're feeling (mood)
   - Your energy level
   - Any stress factors
   - Your daily intentions/goals
3. **Notion Sync** - Confirm if you want to add goals to Notion
4. **Complete Tasks** - Later, just say "I finished [task name]" to mark it complete
5. **View Progress** - Check your streak and session history

### Voice Commands

- "What are my tasks?" - View your Notion to-do list
- "I finished going to the gym" - Mark a task as complete
- "Show me my todo tasks" - Filter by status

## 🎨 UI Design

The app features a calming blue/cyan color scheme designed to promote mindfulness:

- **Indigo/Purple** - User messages
- **Blue/Cyan** - Agent responses and accents
- **Smooth Animations** - Framer Motion for delightful interactions
- **Real-time Updates** - Live session progress tracking

## 📁 Project Structure

```
mindful-moments-voice-companion/
├── backend/
│   ├── src/
│   │   ├── agent.py              # Main wellness companion agent
│   │   └── wellness_storage.py   # Session data management
│   ├── .env                      # API keys (not in git)
│   └── pyproject.toml            # Python dependencies
├── frontend/
│   ├── app/                      # Next.js app directory
│   ├── components/
│   │   ├── app/                  # App-specific components
│   │   └── livekit/              # LiveKit UI components
│   └── styles/                   # Global styles
├── wellness_log.json             # Session data (not in git)
└── README.md
```

## 🔒 Privacy & Security

- All wellness data is stored locally in `wellness_log.json`
- API keys are never committed to the repository
- Notion integration is optional
- No data is sent to third parties except for AI processing

## 🤝 Contributing

Contributions are welcome! Feel free to:

- Report bugs
- Suggest new features
- Submit pull requests
- Improve documentation

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [LiveKit Agents](https://docs.livekit.io/agents/)
- Inspired by the need for accessible mental wellness tools
- Voice AI powered by AssemblyAI, Google Gemini, and Murf AI

## 📧 Contact

**Gangadhar N G**
- GitHub: [@Gangadhar-NG-CODER](https://github.com/Gangadhar-NG-CODER)
- Email: naatarugangadhar@gmail.com

---

<div align="center">
  <p>Made with 💙 for mindful living</p>
  <p>⭐ Star this repo if you find it helpful!</p>
</div>
