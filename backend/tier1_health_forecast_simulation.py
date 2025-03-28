# This function creates a list of your quality of life over the years
# It starts from your current QoL score and slowly declines it until life expectancy

def simulate_lifestyle_qol_forecast(qol_score, age, life_expectancy):
    qol_forecast = []
    years_remaining = int(round(life_expectancy - age))

    # Dynamic stable phase: higher QoL and younger age = longer plateau
    base_stable_ratio = 0.6
    qol_factor = qol_score / 100
    age_factor = max(0.3, 1 - (age - 30) / 100)
    stable_ratio = base_stable_ratio * qol_factor * age_factor

    stable_years = int(years_remaining * stable_ratio)
    decline_years = years_remaining - stable_years

    # Set minimum QoL based on starting QoL (high QoL = less decline overall)
    min_qol = max(10, qol_score - (50 * (1 - qol_factor)))

    for i in range(years_remaining):
        if i < stable_years:
            value = qol_score
        else:
            decline_step = i - stable_years
            decline_per_year = (qol_score - min_qol) / decline_years
            value = max(min_qol, round(qol_score - (decline_per_year * decline_step), 1))

        qol_forecast.append(value)

    return qol_forecast

