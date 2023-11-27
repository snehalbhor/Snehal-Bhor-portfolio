import pandas as pd
import pickle

# Prepare sample data for prediction
sample_data = {
    'jnhvgv  ygyuyguy hgvhgv': [1],  # Add more columns matching the training data
    # Add columns corresponding to other tasknames present in training data with appropriate values
}

# Create a DataFrame for prediction
sample_df = pd.DataFrame(sample_data)

# Load the trained model from the file
with open('trained_model.pkl', 'rb') as file:
    loaded_model = pickle.load(file)

# Get feature columns used during training
with open('training_columns.pkl', 'rb') as file:
    training_columns = pickle.load(file)

# Align columns in the prediction DataFrame with the columns used during training
sample_df = sample_df.reindex(columns=training_columns, fill_value=0)

# Make predictions using the loaded model and the prepared sample data
predictions = loaded_model.predict(sample_df)
print("Predictions:", predictions)


