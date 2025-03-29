from flask import Flask, request, jsonify
from flask_cors import CORS
from tier1_health_forecast_simulation import simulate_lifestyle_qol_forecast
from qol_forecast import calculate_qol


# Import your actual logic functions
from tier1_health_model import tier1_health_forecast
from qol_forecast import calculate_qol

app = Flask(__name__)
CORS(app)  # Allow frontend to make requests

def map_option(value, mapping):
    return mapping.get(value, 0)

@app.route('/calculate', methods=['POST'])
def calculate():
    data = request.get_json()
    print("Received form data:", data)

    # Calculate base QoL score
    qol_score = calculate_qol(data)


    # Life expectancy base (can use your own method)
    base_life_expectancy = 81
    delta_LE = (qol_score - 70) * 0.2
    life_expectancy = round(base_life_expectancy + delta_LE)

    # QoL forecast
    forecast = simulate_lifestyle_qol_forecast(qol_score, age, life_expectancy)
    print("Returned forecast:", forecast)

    return jsonify({
        "qualityOfLife": qol_score,
        "lifeExpectancy": life_expectancy,
        "qolForecast": forecast
    })


if __name__ == '__main__':
    app.run(debug=True)

