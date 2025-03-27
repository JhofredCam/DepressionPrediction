from pydantic import BaseModel
from typing import Literal
from pydantic import Field
import pandas as pd
from fastapi import FastAPI
from preprocessing import Pipeline
from predict import predict

class Params(BaseModel):
    age : int
    academic_pressure : int = Field(ge=0, le=5)
    study_satisfaction : int = Field(ge=0, le=5)
    dietary_habits : Literal['Saludable', 'Moderado', 'No saludable']
    suicidal_thoughts : Literal['Si', 'No']
    work_study_hours : int
    financial_stress : int = Field(ge=0, le=5)
    
    def to_pandas(self):
        return pd.DataFrame([self.model_dump()])
    
app = FastAPI()

@app.post('/')
async def evaluate(params : Params) -> int:
    pipeline = Pipeline(params.to_pandas())
    value = pipeline.encode()
    return predict(value)