# tier1_health_model.py
from qol_forecast import calculate_qol

def tier1_health_forecast(data):
    age = int(data["age"])
    smoking_status = {"Current": 2, "Former": 1, "Never": 0}[data["smoking"]]
    physical_activity = {"Sedentary": 1, "Moderate": 2, "Vigorous": 3}[data["activity"]]
    diet_score = int(data["fruitsVeg"])
    alcohol_use = {"None": 0, "Moderate": 1, "Heavy": 2}[data["alcohol"]]
    sleep_quality = {"Poor": 1, "Fair": 2, "Good": 3}[data["sleep"]]
    stress_level = int(data["stress"])
    social_support = {"Y": 2, "N": 1}[data["hasBestFriend"]]

    # ✅ BMI logic (height in inches, weight in lbs)
    height_in = int(data["height"])
    weight_lb = int(data["weight"])
    bmi = 703 * weight_lb / (height_in ** 2)

    if bmi < 18.5:
        BMI_penalty = 2  # underweight
    elif bmi > 29.9:
        BMI_penalty = 2  # obese
    elif bmi > 24.9:
        BMI_penalty = 1  # overweight
    else:
        BMI_penalty = 0  # healthy

    delta_LE = (
        -6 * (smoking_status == 2)
        -2 * (smoking_status == 1)
        +3 * (physical_activity >= 2)
        +2 * (diet_score >= 2)
        -2 * (alcohol_use == 2)
        -2 * (BMI_penalty == 2)
        -1 * (BMI_penalty == 1)
        -1.5 * (sleep_quality == 1)
        +1 * (social_support == 2)
        -1 * (stress_level >= 4)
    )

    estimated_LE = 77 + delta_LE

    qol_score = calculate_qol(data)

    return {
    "lifeExpectancy": round(estimated_LE, 1),
    "qualityOfLife": round(qol_score, 1),
    "biologicalAge": round(age * 0.95, 1)  # placeholder if you want it
}
