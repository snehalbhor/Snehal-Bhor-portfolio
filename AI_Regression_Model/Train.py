import pandas as pd
import pickle
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LinearRegression

# Read the data
df = pd.read_csv("Data.csv")

# Convert 'minutes' column to numeric
df['minutes'] = df['minutes'].str.extract('(\d+)').astype(float)

# Perform one-hot encoding on categorical column 'tasknames'
df = pd.get_dummies(df, columns=['tasknames'])

# Get features (X) and target (y)
X = df.drop('minutes', axis=1)
y = df['minutes']

# Split the data into training and test sets
X_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2, random_state=42)

# Train a Linear Regression model
model = LinearRegression()
model.fit(X_train, y_train)

# Save the trained model to a file using pickle
with open('trained_model.pkl', 'wb') as file:
    pickle.dump(model, file)

# Save the columns used during training
with open('training_columns.pkl', 'wb') as file:
    pickle.dump(X_train.columns, file)

print("Model training completed and saved as trained_model.pkl")


