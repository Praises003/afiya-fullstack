

# 🌿 AFIYA — Verifying Africa’s Health with Hedera & WhatsApp

> “In Africa, fake drugs kill 500,000 people yearly. Afiya stops it — one WhatsApp photo at a time.”

![Afiya Banner](https://afiya-yx0e.onrender.com/assets/afiya-DkrF2C9S.png)

---

## 💡 Overview

**Afiya** is an Hedera-powered pharmaceutical verification system that leverages **Hedera Hashgraph’s Consensus Service (HCS)** to combat counterfeit drugs across Africa.  
It allows **manufacturers** to register legitimate drug batches on the Hedera network and enables **consumers** to verify authenticity via **WhatsApp**, using OCR to extract batch IDs directly from medicine packaging.

**Built for:** *Hedera Africa Hackathon — DLT for Healthcare Track (ESG)*  
**Category:** *Healthcare • DLT Operations • Web3 + Impact*

---

## 🧠 Problem

Counterfeit and substandard drugs are a major cause of preventable deaths in Africa.

- 💀 WHO reports that **1 in 10 medicines** in Africa is fake.  
- ⚠️ Over **500,000 deaths yearly** linked to counterfeit drugs (UNODC, 2023).  
- 💸 Over **$200 billion** lost annually in global counterfeit pharma trade.  
- 🔍 Existing verification systems (scratch codes, SMS) are slow, corruptible, and easily faked.

---

## 🚀 Solution

Afiya provides **an immutable, verifiable, and accessible drug verification network** powered by Hedera.

### 🩺 How It Works

| Step | Description |
|------|--------------|
| 🏭 **1. Drug Registration** | Manufacturers log batches (Batch ID, Drug Name, Dates, etc.) onto **Hedera Consensus Service**, creating a tamper-proof record. |
| 📸 **2. Consumer Verification** | A patient sends a photo of the drug packaging via **WhatsApp**. |
| 🔍 **3. OCR Extraction** | The image is processed using **Tesseract.js**, extracting the batch ID. |
| 🧾 **4. Hedera Query** | The backend checks the **HCS topic** to confirm authenticity. |
| ✅ **5. Instant Response** | The user receives either “✅ Verified” or “⚠️ Not Found — Possible Fake.” |
| 🧠 **6. AI Anomaly Detection (Next)** | Afiya flags suspicious batch activity, e.g., the same batch scanned from multiple regions. |

---

## 🧩 Tech Stack

| Layer | Technology | Purpose |
|-------|-------------|----------|
| **Frontend (Admin)** | React + TailwindCSS  | Manufacturer dashboard to register batches |
| **Backend** | Node.js + Express | Core logic and API layer |
| **Blockchain** | Hedera Hashgraph HCS (`@hashgraph/sdk`) | Immutable registration and verification |
| **Database** | MongoDB (via Mongoose) | Storing verification logs and user data |
| **OCR** | Tesseract.js | Reads batch info from photos |
| **Messaging** | Twilio WhatsApp API | Sends and receives verification messages |
| **Deployment** | Render (frontend) + Render (backend) |
| **Version Control** | GitHub (public) | Transparent open-source submission |

---

## 🧱 Folder Structure



afiya_backend/
│
├── controllers/
│ ├── topicController.js # Registers batches to Hedera
│ ├── verifyController.js # Checks authenticity via Hedera
│ ├── whatsappController.js # Handles Twilio WhatsApp webhooks
│
├── services/
│ ├── hederaService.js # Manages HCS client + topic publishing
│ ├── anomalyService.js # AI anomaly tracking (future)
│
├── routes/
│ ├── topicRoutes.js # /api/register-drug
│ ├── verifyRoutes.js # /api/verify/:batchId
│ ├── whatsappRoutes.js # /webhooks/whatsapp
│
├── utils/
│ ├── createTopic.js # One-time Hedera topic creation
│ ├── test.js # Test message publishing
│
├── models/
│ ├── Drug.js # Schema for registered drugs
│ ├── Manufacturer.js # Schema for manufacturers
│ ├── VerificationLog.js # Logs user verifications
│
├── .env # Hedera + Twilio credentials
├── app.js
└── index.js

afiya (frontend) folder structure
├── public/
├── src/
│ ├── assets/ # static files (images, fonts, icons, etc.)
│ ├── components/ 
  │ ├── FormInput.jsx
  │ ├── Sidebar.jsx
  │ ├──Topbar.jsx

  ├── pages/ # page-level components / views
    │ ├── LogBatch.jsx
  ├── App.css
  ├── App.jsx
  ├── index.css
  ├── main.jsx

├── .gitignore
├── .READ.me
├── .eslint.comfig.js
└── index.{js,ts} # app entry point
└── index.html 
├── package-lock.json
├── package.json
├── vite.config.js

---

## 🧰 Installation & Setup

### 1️⃣ Clone the Repository
```bash
git clone https://github.com/yourusername/afiya.git](https://github.com/Praises003/afiya-fullstack.git

cd afiya-main

2️⃣ Install Dependencies
npm install

3️⃣  Start the Development Server
npm run dev start
4️⃣ then run on the browser http://localhost:5173

cd afiya_backend

2️⃣ Install Dependencies
npm install

3️⃣ Configure Environment Variables

Create a .env file:

HEDERA_ACCOUNT_ID=0.0.xxxxxx
HEDERA_PRIVATE_KEY=302e0201...
TOPIC_ID=0.0.xxxxxx
TWILIO_ACCOUNT_SID=your_sid
TWILIO_AUTH_TOKEN=your_token
TWILIO_WHATSAPP_NUMBER=whatsapp:+14155238886
MONGO_URI=your-mongodb-uri


4️⃣ Start the Server
npm start

5️⃣ Test Hedera Connection
node utils/test.js

🧩 Architecture
[Manufacturer Dashboard/API]
        ↓
[Hedera Consensus Service]
        ↓
[Twilio WhatsApp Bot] → [Afiya Backend]
        ↓
[Tesseract.js OCR] → [Mirror Node Verification]
        ↓
✅ Verified | ❌ Fake | ⚠️ Suspicious


🧾 Demo Flow

Admin Dashboard — Manufacturer logs a batch (stored on Hedera).

WhatsApp Bot — Consumer sends image → backend OCR reads batch number.

Blockchain Check — Server verifies authenticity via Hedera Mirror Node.

Response — WhatsApp replies with instant verification status.

🌍 Impact

🛡️ 100% Transparent drug verification

💚 Carbon-negative infrastructure via Hedera

💬 WhatsApp-first design — no app downloads

💊 Saves lives by preventing counterfeit medication use

🌐 Enables regulators to track pharma supply chains securely

📈 Market & Business Model

Target: Pharmaceutical manufacturers, regulatory bodies (NAFDAC, KEBS, SAHPRA), and pharmacies.
Model: SaaS subscription ($5K per region/month) + transaction microfees per batch log.

🧠 Why Hedera
Feature	Hedera Advantage
Speed	10,000+ TPS — instant drug verification
Cost	$0.0001 per transaction — affordable at scale
Trust	Enterprise-grade council (Google, IBM, etc.)
Green	Carbon-negative — aligns with ESG goals
Integrity	HCS offers tamper-proof audit trails
🔮 What’s Next

Afiya + Hedera = Africa’s Health Safety Revolution

Next-phase features:

Integrate Hedera Token Service (HTS) for digital drug certification tokens.

Partner with health ministries for national drug traceability.

Expand to medical device and vaccine tracking.

Develop AI dashboard for regulators using HCS analytics.


🧪 API Routes
Method	Endpoint	Description
POST	/api/register-drug	Register a drug batch (logs to Hedera)
GET	/api/verify/:batchId	Verify a batch via Mirror Node
POST	/api/whatsapp	WhatsApp webhook for OCR verification

 🌍 Future Roadmap

| Phase       | Description                                      |
| ----------- | ------------------------------------------------ |
| **Phase 1** | Basic batch verification using Hedera HCS        |
| **Phase 2** | Shipment tracking using Hedera Token Service     |
| **Phase 3** | AI-powered anomaly prediction & regional alerts  |
| **Phase 4** | Public health analytics dashboard for regulators |



 🏆 Hackathon Details

* **Hackathon:** Hedera Africa Hackathon 2025
* **Track:** DLT for Healthcare (ESG)
* **Network:** Hedera Testnet
* **Built With:** Hedera SDK, Node.js, Twilio API, Tesseract.js

---

## 🧑‍💻 Contributor

| Name                | Role                               |
| ------------------- | ---------------------------------- |
| **Praise Precious** | Fullstack Developer & Project Lead |



 🔗 Useful Links

* [Hedera SDK Documentation](https://hedera.com/docs)
* [HashScan Testnet Explorer](https://hashscan.io/testnet)
* [Twilio WhatsApp API](https://www.twilio.com/whatsapp)
* [DoraHacks Hackathon Page](https://dorahacks.io/hackathon)
* [Tesseract.js Docs](https://github.com/naptha/tesseract.js)

---

## ❤️ Acknowledgement

Built for the **Hedera Africa Hackathon  2025**.

> *Afiya — Building trust in every medicine.*

