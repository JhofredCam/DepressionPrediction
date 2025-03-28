# Student Depression Prediction

## Project Overview
This project aims to **detect early signs of depression in students** using machine learning techniques. Mental health issues, particularly depression, are increasingly prevalent among students due to academic pressure, financial stress, and other lifestyle factors. Early identification can provide timely interventions, improving student well-being and academic performance.

By analyzing various factors such as study satisfaction, dietary habits, and work-study balance, our model predicts the likelihood of a student experiencing depression. This project was developed as part of the **Inteligencia Artificial - Explorador** course by **Talentotech**.

## Dataset
- **Source:** [Kaggle - Student Depression Dataset](https://www.kaggle.com/datasets/adilshamim8/student-depression-dataset/)
- **Variables Used:**
  - Age
  - Academic Pressure
  - Study Satisfaction
  - Dietary Habits
  - Suicidal Thoughts
  - Work/Study Hours
  - Financial Stress
- **Preprocessing:**
  - Ordinal Encoding applied to `Dietary Habits`
  - Label Encoding applied to `Suicidal Thoughts`

## Technologies Used
🚀 **Notebook:** Python, Pandas, scikit-learn, NumPy, XGBoost, Seaborn, Matplotlib, KaggleHub  
⚡ **Backend:** FastAPI  
🎨 **Frontend:** JavaScript, HTML, CSS  

## Project Structure
```
📂 models
│   └── gb_depression.pkl  # Trained Gradient Boosting model
📂 notebook
│   ├── student_depression_analysis.ipynb  # Jupyter Notebook for analysis
📂 src
    📂 backend
    │   ├── main.py  # API entry point
    │   ├── predict.py  # Model inference
    │   ├── preprocessing.py  # Data transformation
    📂 frontend
    │   ├── disney_inside_out_sadness_sticker.png
    │   ├── formulario.css
    │   ├── formulario.html
    │   └── script.js
```

## How to Run
- The backend dependencies are listed in `requirements.xml` and `requirements.txt`.
- The notebook was executed on **Google Colab**.
- **Conda** was used as the virtual environment for the backend.

## Methodology
### 1️⃣ Data Exploration & Preprocessing
📥 **Dataset Download**  
📊 **Exploratory Data Analysis (EDA):**
   - Value counts
   - Numeric value distributions
🛠 **Feature Engineering:**
   - Removing irrelevant features
   - Data handling per feature
     - Binary Features
     - Profession
     - Sleep Duration
     - Dietary Habits
     - Financial Stress
🔍 **New EDA & Feature Selection**

### 2️⃣ Model Training & Selection
🤖 **Model Comparison:**
   - Logistic Regression
   - Decision Tree
   - Random Forest
   - Gradient Boosting
   - XGBoost
   - LightGBM
   - SGD Classifier
🏆 **Final Model Selection:** Gradient Boosting
📤 **Exporting Model:** `gb_depression.pkl`

## Model Performance
| Model                 | Train Accuracy | Train F1 Score | Train ROC AUC | Test Accuracy | Test F1 Score | Test ROC AUC |
|----------------------|---------------|---------------|--------------|--------------|--------------|-------------|
| XGBoost            | 0.8692        | 0.8694        | 0.8670       | 0.8446       | 0.8448       | 0.8416      |
| Gradient Boosting  | 0.8601        | 0.8596        | 0.8524       | 0.8448       | 0.8443       | 0.8373      |
| Random Forest      | 0.8613        | 0.8616        | 0.8593       | 0.8432       | 0.8435       | 0.8405      |
| LightGBM          | 0.8665        | 0.8668        | 0.8645       | 0.8421       | 0.8424       | 0.8394      |
| Logistic Regression | 0.8420        | 0.8425        | 0.8405       | 0.8410       | 0.8414       | 0.8392      |
| SGD Classifier     | 0.8311        | 0.8323        | 0.8376       | 0.8349       | 0.8360       | 0.8401      |
| Decision Tree      | 0.8470        | 0.8476        | 0.8469       | 0.8306       | 0.8311       | 0.8288      |

💡 **Why Gradient Boosting?**
We selected **Gradient Boosting** as our final model due to its **lower false negative rate** compared to other models. Since this project deals with **student depression detection**, minimizing false negatives is crucial—missing a case of depression could have serious consequences.

Although XGBoost had a slightly higher F1 score and accuracy, Gradient Boosting performed similarly while offering:
✅ Better control over overfitting  
✅ Improved interpretability  
✅ A more balanced trade-off between precision and recall for a sensitive application like mental health prediction  

## 📌 Authors
👤 **Jhofred Camacho** - [JhofredCam](https://github.com/JhofredCam)  
👤 **Maria Alejandra Castaño** - [Malec01](https://github.com/Malec01)  
👤 **Juan Pablo Holguin** - *GitHub username pending*  

## 📝 License
[MIT License](LICENSE) 

---
📢 **Let's make student mental health a priority!** 🚀

