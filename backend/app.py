# backend/app.py
import os
from flask import Flask, request, jsonify
from flask_cors import CORS
from models.diagnostics import DiagnosticsModel
from models.ecommerce import ECommerceModel 
from models.consultation import ConsultationModel

app = Flask(__name__)
CORS(app)

diagnostics_model = DiagnosticsModel()
ecommerce_model = ECommerceModel()  
consultation_model = ConsultationModel()

@app.route('/api/generate-diagnostic-report', methods=['POST'])
def generate_diagnostic_report():
    user_input = request.json['userInput']
    report = diagnostics_model.generate_report(user_input)
    return jsonify(report)

@app.route('/api/skincare-recommendations', methods=['POST'])
def get_skincare_recommendations():
    user_input = request.json['userInput']
    recommended_products = ecommerce_model.recommend_skincare(user_input)  
    return jsonify(recommended_products)

@app.route('/api/book-consultation', methods=['POST'])
def book_consultation():
    consultation_status = consultation_model.book_consultation()
    return jsonify(consultation_status)

if __name__ == '__main__':
    port = int(os.environ.get("PORT", 8080))
    app.run(host='0.0.0.0', port=port)
