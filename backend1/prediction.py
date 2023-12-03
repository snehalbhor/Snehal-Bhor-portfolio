
import pandas as pd
import pickle
import numpy as np

def make_predictions(input):
    print("check2")
#     sample_data = {
#     'How much time is required to create a div in react': [1],
#     # Add more columns matching the training data
# }
#     # Create a DataFrame for prediction
#     sample_df = pd.DataFrame(sample_data)
#     model_file="trained_model.pkl"
#     columns_file="training_columns.pkl"

#     # Load the trained model from the file
#     with open(model_file, 'rb') as file:
#         loaded_model = pickle.load(file)

#     # Get feature columns used during training
#     with open(columns_file, 'rb') as file:
#         training_columns = pickle.load(file)

#     # Align columns in the prediction DataFrame with the columns used during training
#     sample_df = sample_df.reindex(columns=training_columns, fill_value=0)

    # Multiply each value in the DataFrame by a random number between 1 and 9
    random_multiplier = np.random.uniform(1, 10)
    print("check3")
    # Generate a random number between 1 and 9
    # sample_df *= random_multiplier

    # Make predictions using the loaded model and the prepared sample data
    # predictions = loaded_model.predict(sample_df)
    # predictions *= random_multiplier

    return random_multiplier
   
# sample_data = {
#     'How much time is required to create a div in react': [1],
#     # Add more columns matching the training data
# }

# predictions = make_predictions(sample_data, 'trained_model.pkl', 'training_columns.pkl')
# print("Predictions:", predictions)




