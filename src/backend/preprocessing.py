import pandas as pd

class Pipeline():
    def __init__(self, df : pd.DataFrame):
        self.df = df

    def encode(self):
        self.encoding_suicidal()
        self.encoding_dietary()
        return self.df

    def encoding_suicidal(self):
        values_dict = {'No': 0, 'Si': 1}
        self.df['suicidal_thoughts'] = self.df['suicidal_thoughts'].map(values_dict)   

    def encoding_dietary(self):
        values_dict = {'No saludable': 0, 'Moderado': 1, 'Saludable': 2}
        self.df['dietary_habits'] = self.df['dietary_habits'].map(values_dict)
    