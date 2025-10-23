from sentence_transformers import SentenceTransformer
import numpy as np

model = SentenceTransformer('all-MiniLM-L6-v2')

def embed_text(text):
    return model.encode(text)

def search_similar(query_emb, passages):
    passage_embs = model.encode(passages)
    sims = np.dot(passage_embs, query_emb)
    idxs = np.argsort(sims)[::-1]
    return [passages[i] for i in idxs[:3]]
