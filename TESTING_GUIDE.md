# Visitor Tracking System - Testing Guide

## Pre-Test Checklist

- [ ] Backend server is running (`node Backend/server.js`)
- [ ] Backend/data/ folder exists
- [ ] Backend/data/visitors.json file exists (may be empty)
- [ ] Backend/data/form_submissions.json file exists (may be empty)
- [ ] React app is running (`npm start`)
- [ ] Browser console is open (F12)
- [ ] Backend terminal is visible for logs

---

## Test 1: Verify Backend Setup

### Step 1.1: Check Backend Server is Running
```bash
# Terminal output should show:
# Server running on http://localhost:5001
# Visitor routes registered
```

### Step 1.2: Test API Endpoints with curl
```bash
# Test if server is responding
curl http://localhost:5001/api/visitors/analytics

# Expected response: 
# {"totalVisitors":0,"topCompanies":[],"topCountries":[],...}
```

### Step 1.3: Verify Data Folder Exists
```bash
# Windows - In PowerShell:
Test-Path C:\D\CursorPrograms\RIOBizSols\Backend\data
# Should return: True

# View current files:
Get-ChildItem C:\D\CursorPrograms\RIOBizSols\Backend\data
# Should show: visitors.json, form_submissions.json
```

---

## Test 2: Frontend Initialization

### Step 2.1: Open Browser Console
1. Open your website (http://localhost:3000)
2. Press F12 to open DevTools
3. Go to **Console** tab

### Step 2.2: Check Visitor Profile Creation
In console, type:
```javascript
// Check if visitor profile was created
localStorage.getItem('visitorProfile')

// Should return something like:
// {"visitorId":"uuid-123...","device":"desktop","browser":"Chrome",...}
```

### Step 2.3: Verify Visitor ID Storage
```javascript
// Check visitor ID
localStorage.getItem('visitorId')

// Should return:
// "uuid-abc123def456..."
```

### Step 2.4: Check Console Logs for Initialization
Look for messages like:
```
✓ Visitor tracking initialized: visitor_abc123
✓ Visitor profile created
✓ Page view tracked: /
```

If you don't see these, check for errors starting with "visitorTracking" in console.

---

## Test 3: Passive Data Collection

### Step 3.1: Test Device Fingerprinting
In browser console:
```javascript
// Should return browser/device info
console.log(localStorage.getItem('visitorProfile'))
```

Look for:
- `device`: "desktop/mobile/tablet"
- `browser`: "Chrome"
- `os`: "Windows"
- `company`: "Your Company Name" (from IP)
- `country`: "Country Name"

### Step 3.2: Test Scroll Depth Tracking
1. Open a page with content (e.g., /services/staffing)
2. Scroll down to about 50% of the page
3. Open Browser DevTools → **Network** tab
4. Look for POST request to `/api/visitors/update`
5. Check the request payload includes `scrollDepth` value

### Step 3.3: Test Time-on-Site Tracking
1. Stay on a page for 30+ seconds
2. Open Network tab (DevTools)
3. Should see POST requests to `/api/visitors/update` every 10 seconds
4. Check payload for `timeOnSite` value increasing

---

## Test 4: Service Interest Tracking

### Step 4.1: Visit Service Page
1. Navigate to any service page:
   - /services/staffing
   - /services/web-development
   - /services/digital-marketing
   - Any regional variant (e.g., /services/bangalore/staffing)

2. Open DevTools → **Network** tab

3. Look for POST request to `/api/visitors/update` with `serviceInterest`

### Step 4.2: Verify Service Name is Captured
In Network tab → find POST request → click on it → **Request** → scroll to see:
```json
{
  "visitorId": "...",
  "serviceInterest": "Web Development",
  "timestamp": "..."
}
```

### Step 4.3: Test Multiple Services
Visit 2-3 different service pages and verify each sends correct service name.

---

## Test 5: Form Submission Tracking

### Step 5.1: Fill Out Contact Form
1. Navigate to Contact page or Homepage
2. Open DevTools → **Network** tab
3. Fill in the form with test data:
   - Name: "Test User"
   - Email: "test@example.com"
   - Phone: "1234567890"
   - Message: "Test message"

### Step 5.2: Submit Form
1. Click Submit button
2. Watch Network tab - should see **TWO** POST requests:
   - First: `/api/visitors/form-submission` (our tracking)
   - Second: `/send-email` (original email submission)

### Step 5.3: Verify Form Tracking Payload
Click on `/api/visitors/form-submission` request:
```json
{
  "visitorId": "visitor_abc123",
  "formType": "home_contact|contact_page|service_contact",
  "formData": {
    "firstname": "Test User",
    "email": "test@example.com",
    "phone": "1234567890",
    "message": "Test message"
  }
}
```

### Step 5.4: Test Different Forms
- [ ] Home contact form (Homepage)
- [ ] Main contact form (Contact page)
- [ ] Service inquiry form (any service page)

Each should have correct `formType` value.

---

## Test 6: Backend Data Verification

### Step 6.1: Check Visitors File
After testing, check if Backend/data/visitors.json was updated:

```bash
# PowerShell:
Get-Content C:\D\CursorPrograms\RIOBizSols\Backend\data\visitors.json | ConvertFrom-Json | Select -First 1

# Should show:
# {
#   "visitorId": "uuid-...",
#   "device": "desktop",
#   "browser": "Chrome",
#   "company": "...",
#   ...
# }
```

### Step 6.2: Check Form Submissions File
```bash
# PowerShell:
Get-Content C:\D\CursorPrograms\RIOBizSols\Backend\data\form_submissions.json | ConvertFrom-Json | Select -First 1

# Should show:
# {
#   "submissionId": "uuid-...",
#   "visitorId": "visitor_abc123",
#   "formType": "home_contact",
#   "formData": {...}
# }
```

### Step 6.3: Verify File Sizes Increasing
```bash
# Check file size before and after testing
ls -la C:\D\CursorPrograms\RIOBizSols\Backend\data\

# Files should grow as you interact with the site
```

---

## Test 7: Analytics API Testing

### Using Browser (Simplest)
```
1. Open new tab
2. Go to: http://localhost:5001/api/visitors/analytics
3. Should see JSON with:
   - totalVisitors: (number > 0)
   - topCompanies: [list of companies]
   - topCountries: [list of countries]
   - topPages: [list of pages viewed]
   - avgScrollDepth: (percentage)
   - formSubmissionRate: (percentage)
```

### Using curl (Command Line)
```bash
curl http://localhost:5001/api/visitors/analytics

# Expected output:
# {
#   "totalVisitors":1,
#   "topCompanies":[{"company":"Your Company","count":1}],
#   "topCountries":[{"country":"United States","count":1}],
#   "topPages":[{"/":1}],
#   "topServices":[],
#   "avgScrollDepth":45.5,
#   "formSubmissionRate":100
# }
```

### Using Postman
1. Open Postman
2. Create new GET request
3. URL: `http://localhost:5001/api/visitors/analytics`
4. Click Send
5. Should see JSON response with all metrics

---

## Test 8: Data Persistence Testing

### Step 8.1: Visitor ID Persistence
1. Note your current visitor ID: `localStorage.getItem('visitorId')`
2. Hard refresh page (Ctrl+F5)
3. Check visitor ID again: `localStorage.getItem('visitorId')`
4. Should be **SAME** (not a new ID)

### Step 8.2: Cross-Session Tracking
1. Get current visitor ID
2. Close browser completely
3. Reopen website
4. Check visitor ID
5. Should be **SAME** (visitor is recognized on return)

### Step 8.3: Multi-Page Tracking
1. Visit /
2. Then /services/staffing
3. Then /services/web-development
4. Check localStorage profile
5. All 3 pages should be in `pagesViewed` array

---

## Test 9: Regional Service Tracking

### Test Each Region
Navigate to each regional service and verify tracking:

**Bangalore:**
- [ ] /services/bangalore/staffing → tracks "Staffing - Bangalore"
- [ ] /services/bangalore/digital-marketing → tracks "Digital Marketing - Bangalore"
- [ ] /services/bangalore/web-development → tracks "Web Development - Bangalore"

**California:**
- [ ] /services/california/staffing → tracks "Staffing - California"
- [ ] /services/california/digital-marketing → tracks "Digital Marketing - California"
- [ ] /services/california/web-development → tracks "Web Development - California"

**Coimbatore:**
- [ ] /services/coimbatore/staffing → tracks "Staffing - Coimbatore"
- [ ] /services/coimbatore/digital-marketing → tracks "Digital Marketing - Coimbatore"
- [ ] /services/coimbatore/web-development → tracks "Web Development - Coimbatore"
- [ ] /services/coimbatore/app-development → tracks "App Development - Coimbatore"
- [ ] /services/coimbatore/odoo → tracks "Odoo - Coimbatore"

Check Network tab to verify each one sends correct service name.

---

## Test 10: Error Handling

### Test 10.1: Backend Not Running
1. Stop Backend server (Ctrl+C in terminal)
2. Try to interact with website
3. Check browser console - should see network errors
4. Start Backend server again
5. Should recover and continue tracking

### Test 10.2: Missing Data Folder
1. Delete Backend/data/ folder
2. Restart Backend server
3. Make request to /api/visitors/track
4. Should create new Backend/data/ folder with JSON files
5. Data should start being collected again

### Test 10.3: Invalid Form Data
1. Submit form with invalid email (e.g., "not-an-email")
2. Should still track submission (validation is on email backend)
3. Check form_submissions.json has the data

---

## Comprehensive Test Scenario

**Complete End-to-End Test (5 minutes):**

1. **Setup** (1 min)
   - [ ] Start Backend: `node Backend/server.js`
   - [ ] Start React: `npm start`
   - [ ] Open browser console (F12)

2. **Initialize** (30 sec)
   - [ ] Homepage loads
   - [ ] Check console for "✓ Visitor tracking initialized"
   - [ ] Verify visitor ID in localStorage

3. **Browse** (2 min)
   - [ ] Scroll homepage (watch scroll depth)
   - [ ] Visit /services/staffing (should track service interest)
   - [ ] Visit /services/web-development (should track service interest)
   - [ ] Return to homepage

4. **Interact** (1 min)
   - [ ] Open Network tab
   - [ ] Fill contact form
   - [ ] Submit form
   - [ ] Verify `/api/visitors/form-submission` request

5. **Verify** (30 sec)
   - [ ] Check Backend/data/visitors.json has data
   - [ ] Check Backend/data/form_submissions.json has form
   - [ ] Visit http://localhost:5001/api/visitors/analytics
   - [ ] Verify analytics shows: 1 visitor, 1 form submission

---

## Troubleshooting Tests

### Issue: Tracking not working
**Test:**
```javascript
// In console, manually test tracking
visitorTracking.trackPageView('test_page')

// Check error logs - should see POST to /api/visitors/update
```

### Issue: Forms not tracking
**Test:**
```javascript
// Check if visitorTracking is imported
console.log(typeof visitorTracking)
// Should return: "object"

// Check if function exists
console.log(typeof visitorTracking.trackFormSubmission)
// Should return: "function"
```

### Issue: No company name identified
**Test:**
```javascript
// Check IP geolocation API
fetch('https://ipapi.co/json/').then(r => r.json()).then(d => console.log(d))

// May not work if ipapi.co is down or rate limited
// Fallback: Check if ipv6.ipapi.co works instead
```

### Issue: Data not persisting
**Test:**
```javascript
// Check if localStorage is available
console.log(typeof(Storage))
// Should return: "object"

// Check if localStorage is accessible
localStorage.setItem('test', 'value')
console.log(localStorage.getItem('test'))
// Should return: "value"
```

---

## Performance Testing

### Frontend Performance
```javascript
// In console:
// Measure tracking service load time
console.time('tracking-init');
await visitorTracking.getVisitorProfile();
console.timeEnd('tracking-init');

// Should be < 100ms for local setup
```

### API Response Time
In Postman:
1. Send GET to `/api/visitors/analytics`
2. Check Response time (bottom right)
3. Should be < 200ms for small datasets

### Memory Usage
```javascript
// In console Performance tab:
// Open Performance tab
// Record for 30 seconds
// Stop recording
// Check Memory timeline - should be stable
```

---

## Data Accuracy Verification

### Verify Each Data Point

| Data Point | How to Verify | Expected Value |
|-----------|---------------|-----------------|
| visitorId | localStorage.getItem('visitorId') | UUID format (e.g., "abc-123...") |
| company | Check analytics → topCompanies or localStorage | Your company name |
| country | Check analytics → topCountries | Country name |
| device | localStorage.getItem('visitorProfile') → device | "desktop" or "mobile" |
| browser | localStorage.getItem('visitorProfile') → browser | "Chrome", "Firefox", etc. |
| pages | Check Backend/data/visitors.json → pagesViewed | Array with visited pages |
| scrollDepth | Network tab POST payload → scrollDepth | 0-100 number |
| serviceInterest | Network tab → serviceInterest | Service name string |
| formData | Backend/data/form_submissions.json | Form field values |

---

## Automated Testing Script

**Create file: `test-tracking.sh` in project root**

```bash
#!/bin/bash

echo "=== Visitor Tracking System - Test Suite ==="
echo ""

echo "1. Checking Backend Server..."
curl -s http://localhost:5001/api/visitors/analytics | head -20
echo ""

echo "2. Checking Data Files..."
echo "Visitors file:"
ls -lh Backend/data/visitors.json 2>/dev/null || echo "  NOT FOUND"

echo "Form submissions file:"
ls -lh Backend/data/form_submissions.json 2>/dev/null || echo "  NOT FOUND"
echo ""

echo "3. Checking Visitor Count..."
VISITOR_COUNT=$(curl -s http://localhost:5001/api/visitors/analytics | grep -o '"totalVisitors":[0-9]*' | grep -o '[0-9]*')
echo "  Total visitors: $VISITOR_COUNT"
echo ""

echo "4. Checking Form Submissions..."
FORM_COUNT=$(curl -s http://localhost:5001/api/visitors/form-submissions | grep -o '"submissionId"' | wc -l)
echo "  Total forms: $FORM_COUNT"
echo ""

echo "✓ Test complete!"
```

Run with:
```bash
chmod +x test-tracking.sh
./test-tracking.sh
```

---

## Quick Test Checklist

Print this and check off as you test:

**System Ready:**
- [ ] Backend running on port 5001
- [ ] React app running on port 3000
- [ ] Backend/data/ folder exists
- [ ] Visitor files created

**Core Functionality:**
- [ ] Visitor ID created on first visit
- [ ] localStorage persisting data
- [ ] Visitor data sent to backend
- [ ] Backend receiving POST requests

**Service Pages:**
- [ ] Service interest tracked
- [ ] Service name captured correctly
- [ ] Regional variants tracked separately

**Forms:**
- [ ] Form submission tracked
- [ ] Visitor ID linked to form
- [ ] Form data saved to file

**Analytics:**
- [ ] /api/visitors/analytics returns data
- [ ] totalVisitors count > 0
- [ ] topCompanies showing data
- [ ] topPages showing visited pages

**Data Persistence:**
- [ ] Visitor ID survives page refresh
- [ ] Visitor ID survives browser restart
- [ ] Multiple pages tracked for same visitor

---

## Expected Results Timeline

| Time | Expected Observations |
|------|----------------------|
| 0-30 sec | Visitor profile created, localStorage populated |
| 30-60 sec | Company name identified from IP |
| 1-2 min | Scroll depth updating in background |
| 2-3 min | POST requests visible in Network tab every 10 sec |
| 3-5 min | Form submission tracked with visitor data |
| 5+ min | Analytics API showing aggregated data |

---

## Success Criteria

**System is working correctly if:**

✅ Visitor profile created on first visit
✅ localStorage contains valid visitorId
✅ Network requests to /api/visitors/* endpoints successful (200 OK)
✅ Backend/data files being updated with new data
✅ Service pages correctly identify which service is being viewed
✅ Form submissions linked to visitor profile
✅ Analytics endpoint returns JSON with > 0 totalVisitors
✅ Scroll depth ranges 0-100 and changes as you scroll
✅ Time-on-site increases every 10 seconds
✅ Visitor ID persists across page reloads

**If all of the above are TRUE, your tracking system is working! 🎉**

