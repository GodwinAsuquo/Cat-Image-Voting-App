# Cat Voting App 🐱

A modern web application for browsing and voting on random cat images using TheCatAPI. Built with Vite, TypeScript, and Tailwind CSS.


## Features

- Browse a grid of random cat images
- Upvote or downvote each cat
- Votes are saved to TheCatAPI and locally
- Works on mobile, tablet, and desktop
- Toggle between light and dark themes
- View all cats you've voted on
- Click any cat to see full details
- Load new cat images on demand

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **State Management**: Zustand with persistence
- **API Calls**: React Query + Axios
- **Styling**: Tailwind CSS
- **Routing**: React Router
- **Icons**: Lucide React + React Icons
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library

## Prerequisites

- Node.js (v16 or higher)
- npm or yarn
- TheCatAPI key (free at [thecatapi.com](https://thecatapi.com))

## Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/GodwinAsuquo/Cat-Image-Voting-App.git
   cd cat-voting-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   
   Create a `.env` file in the root directory:
   ```env
   VITE_API_URL=https://api.thecatapi.com/v1
   VITE_CAT_API_KEY=api key goes here
   ```

4. **Get your API key**
   - Go to [TheCatAPI](https://thecatapi.com)
   - Sign up for a free account
   - Copy your API key
   - Replace `api_key_goes_here` in the `.env` file

5. **Start the development server**
   ```bash
   npm run dev
   ```

   The app will be available at `http://localhost:3000`


## API Endpoints Used

- **Get Images**: `GET /images/search?limit=12`
- **Create Vote**: `POST /votes`
- **Get User Votes**: `GET /votes?sub_id={userId}`

## Key Features Implementation

### Voting System
- Each user gets a unique `sub_id` stored in localStorage
- Votes are sent to TheCatAPI and stored locally
- Users can only vote once per image
- Vote buttons are disabled after voting

### Dark Mode
- Implemented using Tailwind CSS class strategy
- State persisted in localStorage via Zustand
- Applies to all components automatically

### State Management
- **Zustand Store**: Manages cats, votes, user preferences
- **Persistence**: subId, dark mode, and votes saved locally
- **React Query**: Handles API calls with caching



## Acknowledgments

- [TheCatAPI](https://thecatapi.com) for providing the cat images API
- [Tailwind CSS](https://tailwindcss.com) for the utility-first CSS framework
- [Zustand](https://github.com/pmndrs/zustand) for state management
- [React Query](https://tanstack.com/query) for server state management



**Created for a job interview by the Alongside team❤️.**