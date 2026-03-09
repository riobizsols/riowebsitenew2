# API Testing Commands - curl & Postman

## 🔧 Using curl (Command Line)

### 1. Test Server is Running
```bash
curl http://localhost:5001/api/visitors/analytics
```
**Expected:** JSON response (not connection error)

---

### 2. Get All Analytics
```bash
curl http://localhost:5001/api/visitors/analytics
```
**Response Example:**
```json
{
  "totalVisitors": 5,
  "topCompanies": [{"company": "Google", "count": 2}],
  "topCountries": [{"country": "United States", "count": 5}],
  "topPages": [{"/": 5}, {"/services/staffing": 3}],
  "topServices": [{"service": "Staffing", "count": 2}],
  "avgScrollDepth": 62.5,
  "formSubmissionRate": 40
}
```

---

### 3. Get All Visitors
```bash
curl http://localhost:5001/api/visitors/all
```
**Returns:** Array of all visitor profiles

---

### 4. Get Specific Visitor
```bash
# Replace {visitorId} with actual ID from localStorage
curl http://localhost:5001/api/visitors/visitor_abc123
```
**Returns:** Single visitor profile with complete history

---

### 5. Get All Form Submissions
```bash
curl http://localhost:5001/api/visitors/form-submissions
```
**Returns:** Array of all submitted forms with visitor data

---

### 6. Create Test Visitor (POST Request)
```bash
curl -X POST http://localhost:5001/api/visitors/track \
  -H "Content-Type: application/json" \
  -d '{
    "visitorId": "test-visitor-123",
    "device": "desktop",
    "browser": "Chrome",
    "company": "Test Corp",
    "country": "United States",
    "timestamp": "'$(date -u +%Y-%m-%dT%H:%M:%SZ)'"
  }'
```

---

### 7. Update Visitor Activity (POST Request)
```bash
curl -X POST http://localhost:5001/api/visitors/update \
  -H "Content-Type: application/json" \
  -d '{
    "visitorId": "test-visitor-123",
    "pageViewed": "/services/staffing",
    "scrollDepth": 75,
    "timeOnSite": 120
  }'
```

---

### 8. Log Form Submission (POST Request)
```bash
curl -X POST http://localhost:5001/api/visitors/form-submission \
  -H "Content-Type: application/json" \
  -d '{
    "visitorId": "test-visitor-123",
    "formType": "contact_page",
    "formData": {
      "firstname": "John",
      "email": "john@example.com",
      "phone": "1234567890",
      "message": "Test submission"
    }
  }'
```

---

## 📮 Using Postman

### Import Collection
1. Open Postman
2. Click **+ New Collection**
3. Name it: "Visitor Tracking Tests"

---

### Request 1: Get Analytics
**Method:** GET
**URL:** `http://localhost:5001/api/visitors/analytics`
**Headers:** None needed
**Body:** None

**Expected Status:** 200 OK

---

### Request 2: Get All Visitors
**Method:** GET
**URL:** `http://localhost:5001/api/visitors/all`
**Headers:** None needed
**Body:** None

**Expected Status:** 200 OK

---

### Request 3: Get Specific Visitor
**Method:** GET
**URL:** `http://localhost:5001/api/visitors/visitor_{{visitorId}}`

(Replace `{{visitorId}}` with actual ID)

**Headers:** None needed
**Body:** None

**Expected Status:** 200 OK

---

### Request 4: Get Form Submissions
**Method:** GET
**URL:** `http://localhost:5001/api/visitors/form-submissions`
**Headers:** None needed
**Body:** None

**Expected Status:** 200 OK

---

### Request 5: Track New Visitor
**Method:** POST
**URL:** `http://localhost:5001/api/visitors/track`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "visitorId": "postman-test-visitor-1",
  "device": "desktop",
  "browser": "Chrome",
  "os": "Windows",
  "company": "Postman Test Corp",
  "country": "United States",
  "city": "New York",
  "utm_source": "test",
  "timestamp": "2024-01-20T10:30:00Z"
}
```

**Expected Status:** 200 OK

---

### Request 6: Update Visitor Activity
**Method:** POST
**URL:** `http://localhost:5001/api/visitors/update`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "visitorId": "postman-test-visitor-1",
  "pageViewed": "/services/staffing",
  "scrollDepth": 65,
  "timeOnSite": 180,
  "timestamp": "2024-01-20T10:35:00Z"
}
```

**Expected Status:** 200 OK

---

### Request 7: Log Form Submission
**Method:** POST
**URL:** `http://localhost:5001/api/visitors/form-submission`

**Headers:**
```
Content-Type: application/json
```

**Body (JSON):**
```json
{
  "visitorId": "postman-test-visitor-1",
  "formType": "contact_page",
  "formData": {
    "firstname": "John",
    "lastname": "Doe",
    "email": "john.doe@postmancorp.com",
    "phone": "+1-555-0123",
    "company": "Postman Corp",
    "message": "Interested in your services"
  },
  "timestamp": "2024-01-20T10:37:00Z"
}
```

**Expected Status:** 200 OK

---

## 🧪 Test Scenarios

### Scenario 1: Quick Validation (2 minutes)
1. GET `/api/visitors/analytics` - Check if returns JSON
2. Should see `"totalVisitors"` field
3. Success: totalVisitors > 0

---

### Scenario 2: Complete Journey Test (5 minutes)
1. POST `/api/visitors/track` with test visitor
   - Should return 200 OK
2. POST `/api/visitors/update` with page view
   - Should return 200 OK
3. POST `/api/visitors/form-submission` with form data
   - Should return 200 OK
4. GET `/api/visitors/analytics`
   - Should show: totalVisitors increased, formSubmissionRate updated
5. GET `/api/visitors/form-submissions`
   - Should contain your test form

---

### Scenario 3: Data Integrity Check (10 minutes)
1. POST 3 different visitors
2. POST different page views for each
3. GET `/api/visitors/all`
   - Verify all 3 visitors present
4. GET `/api/visitors/{id}` for each visitor
   - Verify each has correct page views
5. GET `/api/visitors/analytics`
   - Verify aggregations are correct

---

## 📊 Response Codes Reference

| Code | Meaning | Action |
|------|---------|--------|
| 200 | Success | All good! Data processed |
| 400 | Bad Request | Check JSON format |
| 404 | Not Found | URL is wrong |
| 500 | Server Error | Backend crashed, check logs |
| Connection Refused | Backend not running | Start Backend: `node Backend/server.js` |

---

## 🐛 Debugging API Responses

### If You Get 500 Error:
1. Check Backend terminal for error messages
2. Verify JSON syntax is valid
3. Restart Backend server

### If You Get Connection Refused:
1. Is Backend running? Check terminal
2. Is it on port 5001? Check startup message
3. Try: `curl http://localhost:5001/api/visitors/analytics`

### If Response is Empty Array:
1. That's OK - means no data collected yet
2. Try creating test data with POST requests above
3. Then GET to see if data was saved

### If Data Not Updating:
1. Check Backend/data/ files manually
2. Verify `fs.writeFileSync` is not failing
3. Check folder permissions
4. Restart Backend

---

## 📈 Full Test Flow with curl

**Complete this in order:**

```bash
# 1. Check server is running
curl http://localhost:5001/api/visitors/analytics

# 2. Create test visitor
curl -X POST http://localhost:5001/api/visitors/track \
  -H "Content-Type: application/json" \
  -d '{
    "visitorId": "test-user-1",
    "device": "desktop",
    "browser": "Chrome",
    "company": "Test Company",
    "country": "United States"
  }'

# 3. Add page view
curl -X POST http://localhost:5001/api/visitors/update \
  -H "Content-Type: application/json" \
  -d '{
    "visitorId": "test-user-1",
    "pageViewed": "/services/staffing",
    "scrollDepth": 70
  }'

# 4. Log form submission
curl -X POST http://localhost:5001/api/visitors/form-submission \
  -H "Content-Type: application/json" \
  -d '{
    "visitorId": "test-user-1",
    "formType": "contact_page",
    "formData": {
      "firstname": "Test",
      "email": "test@example.com",
      "message": "Testing"
    }
  }'

# 5. Check analytics updated
curl http://localhost:5001/api/visitors/analytics

# 6. Get all forms
curl http://localhost:5001/api/visitors/form-submissions
```

**If all return 200 OK or JSON responses - SYSTEM WORKING! ✓**

---

## 💡 Pro Tips

### Tip 1: Save curl Commands in Script
Create `test-api.sh`:
```bash
#!/bin/bash
echo "Testing Analytics..."
curl http://localhost:5001/api/visitors/analytics | jq .
```

### Tip 2: Pretty Print JSON in curl
```bash
curl http://localhost:5001/api/visitors/analytics | jq .
```
(Requires `jq` to be installed)

### Tip 3: Save Response to File
```bash
curl http://localhost:5001/api/visitors/analytics > response.json
cat response.json
```

### Tip 4: Use Postman Variables
In Postman, use `{{baseUrl}}` variable:
```
http://{{baseUrl}}/api/visitors/analytics
```
Set in environment: baseUrl = localhost:5001

### Tip 5: Test with Actual Browser Data
Get your actual visitorId from localStorage:
```javascript
// In browser console:
console.log(localStorage.getItem('visitorId'))
```
Then use in API calls.

---

## ✅ Success Checklist

- [ ] GET `/api/visitors/analytics` returns 200 OK
- [ ] Response contains `"totalVisitors"` field
- [ ] POST `/api/visitors/track` creates new visitor
- [ ] POST `/api/visitors/update` updates activity
- [ ] POST `/api/visitors/form-submission` logs form
- [ ] GET `/api/visitors/form-submissions` returns array
- [ ] All responses are valid JSON
- [ ] No 500 errors in responses

**If all checked ✓ - API working correctly!**

