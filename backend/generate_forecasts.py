from tier1_health_model import tier1_health_forecast
from tier1_health_forecast_simulation import simulate_lifestyle_qol_forecast
from qol_forecast import calculate_qol

average_data = {
    "age": 30,
    "smoking": "Former",
    "activity": "Moderate",
    "fruitsVeg": "2",
    "alcohol": "Moderate",
    "sleep": "Fair",
    "stress": "3",
    "hasBestFriend": "Y",
    "height": "65",
    "weight": "160"
}

ideal_data = {
    "age": 30,
    "smoking": "Never",
    "activity": "Vigorous",
    "fruitsVeg": "7",
    "alcohol": "None",
    "sleep": "Good",
    "stress": "1",
    "hasBestFriend": "Y",
    "height": "65",
    "weight": "125"
}

for label, data in [("Average", average_data), ("Ideal", ideal_data)]:
    forecast_result = tier1_health_forecast(data)
    life_expectancy = forecast_result["lifeExpectancy"]
    qol_score = forecast_result["qualityOfLife"]
    age = int(data["age"])

    forecast = simulate_lifestyle_qol_forecast(qol_score, age, life_expectancy)

    print(f"\n{label} Forecast:")
    for i, q in enumerate(forecast):
        print(f"{{ year: {i}, qualityOfLife: {q} }},")
