
# 🎓 MVP Plan – Pathwise

**Pathwise** is an AI-powered learning platform where users can define any learning goal — from technical skills to personal growth — and receive a personalized, adaptive learning journey. By scoping goals intelligently, assessing the learner's current skill level, and dynamically generating a curriculum, Pathwise empowers users to master any topic through structured guidance, real-time progress tracking, and continuous adaptation.

---

## ✅ Finalized MVP Features (Phase 1)

### 🧠 Goal Scoping

* Conversational goal intake (natural language)
* AI clarifies vague or broad goals
* Breaks down goals into sub-goals and milestones

### 📊 Skill Assessment

* AI asks contextual questions to understand user's current knowledge
* Optional placement quiz or self-assessment toggles
* Determines learning level (Beginner / Intermediate / Advanced)

### 🗺️ Personalized Curriculum Builder

* AI-generated, goal-aligned learning path
* Curriculum split into modular lessons under sub-goals
* Each lesson includes learning objective, bite-sized content, and interactive check-ins

### 🧭 Learning Journey Dashboard

* Visual map of sub-goals and lessons
* Tracks lesson completion and progress
* “Up Next” prompt and dynamic adaptation based on behavior

### 🔄 Dynamic Learning Adaptation

* Adjusts pace or lesson difficulty based on completion data and quiz performance
* Suggests revision or allows fast-forwarding for advanced users

### 💬 AI Learning Assistant (Inline Chat)

* Available throughout the journey for clarifying concepts
* Answers topic-specific follow-ups (“Explain this with an analogy”)
* Summarizes or expands content on request

### 🔐 User Authentication & Persistence

* Signup/login via email or Google
* Saves progress, goal, curriculum, and user profile

---

## 👣 Detailed User Journey

### 1. **Landing & Onboarding**

* User lands on homepage → clicks “Start Your Journey”
* Entered into a conversational onboarding with the AI assistant

### 2. **Conversational Goal Scoping**

* AI: “What would you like to learn or achieve?”
* User: “I want to become good at backend development”
* AI: “Are you more focused on building projects, interviews, or understanding theory?”
* Final summary displayed: Goal + Use Case + Milestones (editable)

### 3. **Skill Assessment**

* AI follows up with \~5 questions:

  * “Have you built any web apps before?”
  * “Are you familiar with HTTP and APIs?”
* Skill level assigned: e.g., **Beginner**

### 4. **Curriculum Generation**

* Curriculum appears visually:

  * Goal: **“Become proficient at backend dev for projects”**
  * Sub-goals: HTTP Basics → REST APIs → Auth → Databases → Deployments
  * Each module includes time estimates and difficulty tags

### 5. **Learning Begins**

* User clicks “Start Learning”
* Lesson page opens:

  * Bite-sized content
  * Embedded code snippets or examples
  * Interactive question at end → “What would this endpoint return?”

### 6. **Progress Tracking**

* Upon marking lesson complete:

  * Progress bar updates
  * "Next Lesson" prompt shown
  * Dashboard updates with visual sub-goal progress

### 7. **AI Companion Interaction**

* At any point, user can:

  * Ask: “Explain JWT like I’m 10”
  * Ask for summary: “TL;DR this lesson”
  * Ask for examples or deeper dives

### 8. **User Auth + Save Progress**

* After a few lessons, prompt to sign up:

  * “Want to save your progress and unlock full journey?”
* Post login: all curriculum + progress is saved and synced

---

## ⚠️ Edge Case Notes

* ❗**Vague Goal Inputs** → AI loops through clarification until scoping is accurate
* ❗**User knows very little** → Path begins with foundational concepts (auto-detected)
* ❗**User skips lessons fast** → AI prompts: “Too easy? Want to skip ahead or take a challenge quiz?”
* ❗**Lesson misunderstanding** → AI suggests remedial content or easier explanations
* ❗**Session timeout / close browser** → All progress auto-saved; dashboard resumes from last state

---

## 🛠️ Tech Stack + Monetization Plan

### 🧱 Tech Stack

* **Frontend**: Next.js
* **Styling**: Tailwind CSS
* **UI Components**: shadcn UI
* **Icons**: lucide-react
* **Animations**: framer motion
* **Auth & Backend**: Supabase (Auth, DB, storage)
* **AI Integration**: OpenAI GPT-4o (via API) for goal scoping, lesson generation, tutoring
* **UI Flow Diagrams**: Mermaid for flowcharting and learning roadmap
* **Payments**: Stripe

---

### 💳 Monetization Plan

#### ✅ **Freemium Model**

* **Free Tier:**

  * Access to 1 learning path
  * Limited daily AI interactions
  * Basic lessons and progress tracking

* **Pro Plan (\$15–\$25/month):**

  * Unlimited learning paths
  * Full AI assistant access
  * Advanced adaptation + deeper insights
  * Extra review modules + checkpoint quizzes
  * Priority support

#### 💼 **One-Time Learning Pass** (optional after launch)

* \$30–\$50 for access to a single expert-level learning goal (e.g., “Fullstack Engineer in 60 Days”)

---