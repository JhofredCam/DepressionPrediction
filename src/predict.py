import joblib
import numpy as np
import pandas as pd
from sklearn.ensemble import GradientBoostingClassifier

value = np.array([20, 4, 2, 0, 0, 4, 1]).reshape(1,-1)
def predict(value: pd.DataFrame):

    param_to_column = {
        'age': 'Age',
        'academic_pressure': 'Academic Pressure',
        'study_satisfaction': 'Study Satisfaction',
        'dietary_habits': 'Dietary Habits',
        'suicidal_thoughts': 'Have you ever had suicidal thoughts ?',
        'work_study_hours': 'Work/Study Hours',
        'financial_stress': 'Financial Stress'
    }

    value.rename(columns=param_to_column, inplace=True)
    value.columns = ['Age', 'Academic Pressure', 'Study Satisfaction', 'Dietary Habits',
       'Have you ever had suicidal thoughts ?', 'Work/Study Hours',
       'Financial Stress']
    
    model: GradientBoostingClassifier = joblib.load("./models/gb_depression.pkl")
    return model.predict(value)