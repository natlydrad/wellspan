# WellSpan – Web App

WellSpan is a lifestyle forecasting tool that calculates your projected **Quality of Life** and **Life Expectancy** based on your current habits. It compares your results to the **Average American** and an **Ideal Lifestyle**.

## 🧠 Features
- Clean input form for lifestyle & health habits
- Custom forecasting algorithm
- Line graph showing Quality of Life over time
- Comparison against national and ideal benchmarks
- Fully responsive layout

## 🔧 Tech Stack
- **Frontend:** React + Tailwind CSS
- **Backend:** Python + Flask
- **Charting:** Chart.js (via `react-chartjs-2`)
- **Hosting:** Vercel (Frontend) + Render (Backend)

## 🖥️ Running Locally

### 1. Clone the repo
```bash
git clone https://github.com/your-username/wellspan.git
cd wellspan
```

### 2. Install frontend dependencies
```bash
npm install
```

### 3. Start the frontend
```bash
npm run dev
```

### 4. Start the backend
From the `/backend` folder:
```bash
pip install -r requirements.txt
python app.py
```

> Make sure to update `.env.local` with your backend URL.

---

Created with ❤️ by nat 🐸 for sky lab ⭐️.
