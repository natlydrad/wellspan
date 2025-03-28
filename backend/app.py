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

    # BMI Calculation
    height_cm = float(data['height'])  # from form input (in centimeters)
    weight_kg = float(data['weight'])  # from form input (in kilograms)

    height_in = int(data["height"])
    weight_lb = int(data["weight"])
    bmi = 703 * weight_lb / (height_in ** 2)

    if 18.5 <= bmi <= 25:
        BMI_penalty = 0
    elif 25 < bmi <= 30:
        BMI_penalty = 1
    else:
        BMI_penalty = 2

    age = int(data['age'])

    # Map inputs to numeric codes
    physical_activity = map_option(data['activity'], {
        'Sedentary': 0, 'Moderate': 1, 'Vigorous': 2
    })

    smoking_status = map_option(data['smoking'], {
        'Never': 0, 'Former': 1, 'Current': 2
    })

    alcohol_use = map_option(data['alcohol'], {
        'None': 0, 'Moderate': 1, 'Heavy': 2
    })

    sleep_quality = map_option(data['sleep'], {
        'Poor': 1, 'Fair': 2, 'Good': 3
    })

    stress_level = int(data['stress'])
    social_support = 2 if data['hasBestFriend'] == 'Y' else 0

    # Calculate base QoL score
    qol_score = calculate_qol(data)


    # Life expectancy base (can use your own method)
    base_life_expectancy = 81
    delta_LE = (qol_score - 70) * 0.2
    life_expectancy = round(base_life_expectancy + delta_LE)

    # QoL forecast
    from tier1_health_forecast_simulation import simulate_lifestyle_qol_forecast
    forecast = simulate_lifestyle_qol_forecast(qol_score, age, life_expectancy)

    return jsonify({
        "qualityOfLife": qol_score,
        "lifeExpectancy": life_expectancy,
        "qolForecast": forecast
    })


if __name__ == '__main__':
    app.run(debug=True)

