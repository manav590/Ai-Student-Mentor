# AI Student Mentor

A full-stack generative AI platform for student mentoring, notes organization, exam prep, attendance tracking, email management, and career discovery.

## Tech Stack
Frontend: React + Vite
Backend: Flask + MongoDB + Pinecone (later)
Authentication: JWT, Google OAuth (later)
OCR: pytesseract, pdfplumber
Embeddings/RAG: SentenceTransformers (later)

## Setup
1. Start MongoDB locally or use cloud.
2. Backend:
    cd backend
    source venv/bin/activate
    pip install -r requirements.txt
    flask run
3. Frontend:
    cd frontend
    npm install
    npm run dev

## API Routes
- /api/auth/register
- /api/auth/login
- /api/auth/complete-profile
- /api/notes/upload

## Roadmap
- [x] Login/Register/Profile
- [x] Notes upload + OCR
- [ ] Embeddings
- [ ] RAG Q&A
- [ ] Dashboard/Modules

## Contributors
chenkham
