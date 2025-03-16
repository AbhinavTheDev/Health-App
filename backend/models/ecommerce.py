import pandas as pd
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity
import numpy as np

class ECommerceModel:
    def __init__(self):
        self.skincare_data = pd.read_csv('../data/skincare_products.csv')
        self.skincare_data['clean_ingreds'] = self.skincare_data['clean_ingreds'].fillna('')
        self.skincare_data['description'] = (
            self.skincare_data['product_name'] + ' ' +
            self.skincare_data['product_type'] + ' ' +
            self.skincare_data['clean_ingreds']
        )
        self.vectorizer = TfidfVectorizer()
        self.product_vectors = self.vectorizer.fit_transform(self.skincare_data['description'])

    def recommend_skincare(self, user_input):
        user_vector = self.vectorizer.transform([user_input])
        similarities = cosine_similarity(user_vector, self.product_vectors).flatten()
        top_indices = np.argsort(-similarities)[:5]
        recommended_products = self.skincare_data.iloc[top_indices][['product_name', 'product_url', 'price']]
        return recommended_products.to_dict('records')
