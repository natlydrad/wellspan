# qol_forecast.py

def calculate_qol(data):
    # Convert inputs
    sleep_quality = {"Poor": 1, "Fair": 2, "Good": 3}[data["sleep"]]
    stress_level = int(data["stress"])
    activity = {"Sedentary": 1, "Moderate": 2, "Vigorous": 3}[data["activity"]]
    has_friend = {"Y": 1, "N": 0}[data["hasBestFriend"]]
    fruitsVeg = int(data["fruitsVeg"])

    # Base starting QoL score
    QoLi_0 = 50
    QoLi_0 += (sleep_quality - 2) * 5        # -5, 0, +5
    QoLi_0 += (activity - 2) * 4             # -4, 0, +4
    QoLi_0 += (fruitsVeg - 3) * 1            # every serving counts
    QoLi_0 += has_friend * 3
    QoLi_0 -= (stress_level - 3) * 2         # stress penalizes

    # Clamp score between 0 and 100
    QoLi_0 = max(0, min(100, QoLi_0))

    return round(QoLi_0, 1)
