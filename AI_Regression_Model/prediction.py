import pandas as pd
import pickle
import numpy as np

def make_predictions(sample_data, model_file, columns_file):
    
    sample_df = pd.DataFrame(sample_data)

   
    with open(model_file, 'rb') as file:
        loaded_model = pickle.load(file)

    
    with open(columns_file, 'rb') as file:
        training_columns = pickle.load(file)

 
    sample_df = sample_df.reindex(columns=training_columns, fill_value=0)

  
    random_multiplier = np.random.uniform(1, 10) 
    sample_df *= random_multiplier

  
    predictions = loaded_model.predict(sample_df)
    predictions *= random_multiplier

    return predictions

sample_data = {
    'How much time is required to create a div in react': [1],
    
}

predictions = make_predictions(sample_data, 'trained_model.pkl', 'training_columns.pkl')
print("Predictions:", predictions)




