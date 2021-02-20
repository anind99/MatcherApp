import numpy as np
from sklearn.ensemble import RandomForestRegressor
import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.cluster import KMeans
import matplotlib.pyplot as plt


def process_data(df):
    categorical_features = ['Punctuality','Smoking', 'Lying', 'Alcohol',  'Gender', 'Left - right handed', 'Education',
       'Only child', 'Village - town', 'House - block of flats','Internet usage']
    for col in categorical_features:
        dummies = pd.get_dummies(df[col], prefix=col)
        df = pd.concat([df, dummies], axis=1)
        df.drop(col, axis=1, inplace=True)
    df = df.replace([np.inf, -np.inf], np.nan)
    df = df.replace([np.nan], 1)


def K_means(df):
    Sum_of_squared_distances = []
    K = range(1,15)
    for k in K:
        km = KMeans(n_clusters=k)
        km = km.fit(df)
        Sum_of_squared_distances.append(km.inertia_)
    plt.plot(K, Sum_of_squared_distances, 'bx-')
    plt.xlabel('k')
    plt.ylabel('Sum_of_squared_distances')
    plt.title('Optimal k')
    plt.show()
    return 3


def fitKMeans(df, k_):
    # Fit People Into k_ categories
    km = KMeans(n_clusters=k_)
    km = km.fit(df)
    return km.predict(df.values[:])


def best_categories(df, predictions, n):
    X_train, X_valid, y_train, y_valid = train_test_split(df.values, predictions, test_size = 0.8, random_state = 42)
    rf = RandomForestRegressor(n_estimators = 100, n_jobs = -1, oob_score = True, bootstrap = True, random_state = 42)
    rf.fit(X_train, y_train)
    indices = np.argsort(rf.feature_importances_)[::-1]
    columns = [df.columns[list(indices).index(i)] for i in range(n)]
    return df[columns]


def add_id_pass(Chosen):
    UserIDs = [i for i in range(1,1011)]
    UserPasswords = ["Default" for i in range(1,1011)]
    Chosen['UserIDs'] = UserIDs
    Chosen['Passwords'] = UserPasswords


if __name__ == '__main__':
    df = pd.read_csv('responses.csv', sep=',')  # Get Data into Pandas DataFrame
    process_data(df)                                # Take out Categorical Features
    predictions = fitKMeans(df, K_means(df))        # Categorise People Into 3 Groups
    ChosenCategories = best_categories(df, predictions, 40)     # Chose 40 Best Variables that predict Category
    add_id_pass(ChosenCategories)                               # Add ID and Password
    ChosenCategories.to_csv('CleanedSurvey.csv')            # Output Chosen Data
