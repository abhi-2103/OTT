# RapidAPI Integration Guide for iBOMMA

## ✅ Features Implemented

### 1. **Watchlist System**
- ✅ Add movies to watchlist
- ✅ Remove movies from watchlist
- ✅ Persistent storage (localStorage)
- ✅ Dedicated watchlist page showing all saved movies
- ✅ Visual feedback (checkmark when added)

### 2. **User Name Display**
- ✅ Login form now collects both name and email
- ✅ User's name displayed in navbar
- ✅ Personalized welcome message in dashboard
- ✅ Name shown in watchlist header

### 3. **RapidAPI Integration**
- ✅ Supports RapidAPI movie databases
- ✅ Automatic fallback to OMDb if RapidAPI not configured
- ✅ Easy setup - just add your API key

---

## 🚀 How to Setup RapidAPI

### Step 1: Create RapidAPI Account
1. Go to https://rapidapi.com
2. Click **Sign Up** (top right)
3. Register with email/GitHub/Google
4. Verify your email

### Step 2: Find a Movie API
After login, search for:
- **"IMDb data"** - Best for movie info
- **"Movie Database"** - TMDB alternative
- **"Cinema data"** - Another IMDb clone

**Recommended:** "IMDb data" by Farshid Astaneh

### Step 3: Subscribe to API
1. Click on the API you chose
2. Scroll to **"Pricing"** section
3. Click **"Subscribe"** on FREE plan (if available)
4. Confirm subscription

### Step 4: Get Your API Key
1. Go to your **Dashboard** (top right profile)
2. Click on the API name in "My Subscriptions"
3. Look for **"X-RapidAPI-Key"** header
4. Copy this key (it looks like a long string)

### Step 5: Add Key to Your App
1. Open `src/services/api.js`
2. Find this line:
   ```javascript
   const RAPIDAPI_KEY = "YOUR_RAPIDAPI_KEY";
   ```
3. Replace `"YOUR_RAPIDAPI_KEY"` with your actual key
4. Example:
   ```javascript
   const RAPIDAPI_KEY = "a1b2c3d4e5f6g7h8i9j0k1l2m3n4o5p6";
   ```

### Step 6: Get API Host
1. In RapidAPI dashboard, find the **"X-RapidAPI-Host"** header
2. Copy it
3. In `src/services/api.js`, find:
   ```javascript
   const RAPIDAPI_HOST = "imdb-data.p.rapidapi.com";
   ```
4. Replace with your API's host

### Step 7: Test It Out
1. Restart your app: `npm run dev`
2. Search for movies
3. You should see more results and better data!

---

## 📋 Watchlist Features

### Add to Watchlist
- Click any movie (after login)
- View details page
- Click **"+ Add to Watchlist"** button
- Confirmation message appears

### View Watchlist
- Click **"📋 Watchlist"** in navbar (only visible when logged in)
- See all your saved movies
- Click **"View Details"** to see full info
- Click **"Remove"** to delete from watchlist

### Data Persistence
- Watchlist saved in browser's localStorage
- Survives page refresh
- Each user's watchlist is independent (different login = different watchlist)

---

## 👤 User Profile Display

### Login Updates
Old: Required only email
New: Requires both name and email

### Where Name Appears
1. **Navbar** - Shows "👤 Your Name" next to logout
2. **Dashboard** - Shows "Welcome, Your Name! 👋"
3. **Watchlist Page** - Shows personalized message with movie count

---

## 🔧 API Fallback System

### How It Works
```
App starts
    ↓
Check if RapidAPI key is set
    ↓
If YES → Use RapidAPI (better data, more movies)
If NO  → Use OMDb as fallback (limited but functional)
```

### Benefits
- ✅ App works without RapidAPI setup
- ✅ Easy upgrade when you add RapidAPI key
- ✅ No errors if you forget to add key

---

## 📊 Current Project File Changes

### New Files
- `src/context/WatchlistContext.jsx` - Watchlist state management
- `src/pages/Watchlist.jsx` - Watchlist display page

### Modified Files
- `src/App.jsx` - Added WatchlistProvider and /watchlist route
- `src/pages/Login.jsx` - Now collects name + email
- `src/pages/MovieDetail.jsx` - Working "Add to Watchlist" button
- `src/components/Navbar.jsx` - Shows user name, watchlist link
- `src/components/Dashboard.jsx` - Personalized greeting
- `src/services/api.js` - RapidAPI integration with OMDb fallback
- `src/App.css` - Watchlist page styles + user section styles

---

## ✨ Testing Checklist

- [ ] Can login with name and email
- [ ] Name appears in navbar after login
- [ ] Can click movies and add to watchlist
- [ ] Watchlist page shows all added movies
- [ ] Can remove movies from watchlist
- [ ] Watchlist persists after page refresh
- [ ] Logout clears watchlist for new user
- [ ] RapidAPI key works (more movies appear)
- [ ] Fallback works if key not added (still shows movies)

---

## 🐛 Troubleshooting

### Q: Movies not showing up?
**A:** 
- Check internet connection
- Verify RapidAPI key (if configured)
- OMDb works without key, so should still show movies

### Q: Name not displaying?
**A:**
- Make sure you're using updated Login form (requires name + email)
- Clear localStorage and login again: 
  ```javascript
  localStorage.clear()
  ```

### Q: Watchlist data lost after logout?
**A:**
- This is intentional (user's watchlist is personal)
- Each user gets their own watchlist when they login

### Q: RapidAPI getting errors?
**A:**
- Verify API key in `src/services/api.js`
- Check API Host is correct
- Look at browser console (F12 → Console tab) for error messages

---

## 🔑 Quick Reference

### Required API Key Location
File: `src/services/api.js`
Variable: `RAPIDAPI_KEY = "YOUR_KEY_HERE"`

### Files to Modify for RapidAPI
- `src/services/api.js` - Add your key and host here

### Watchlist Storage
- Location: Browser's localStorage
- Key: `"ibomma_watchlist"`
- Format: JSON array of movie objects

---

## 📱 Features Summary

| Feature | Status | Details |
|---------|--------|---------|
| Login | ✅ | Name + Email required |
| Watchlist | ✅ | Add/Remove movies |
| User Display | ✅ | Name in navbar & dashboard |
| RapidAPI | ✅ | Optional, with OMDb fallback |
| Movie Details | ✅ | Full info from API |
| Responsive | ✅ | Works on mobile/tablet/desktop |

---

## 🎯 Next Steps

1. Create RapidAPI account
2. Get an API key
3. Add key to `src/services/api.js`
4. Restart app
5. Enjoy unlimited movie data!

---

**Created:** 2026-06-18
**Last Updated:** 2026-06-18
