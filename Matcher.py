import numpy as np
from sklearn.cluster import KMeans
import pandas as pd
import firebase_admin
from firebase_admin import credentials
from firebase_admin import db
cred = credentials.Certificate('key.json')
firebase_admin.initialize_app(cred, {
    'databaseURL': 'https://uofthacks-e2896-default-rtdb.firebaseio.com/'
})
ref = db.reference('')
df = pd.DataFrame.from_dict(dict(ref.get()))
df = df[['Appearence and gestures', 'Art exhibitions', 'Borrowed stuff', 'Cars',
       'Celebrities', 'Changing the past', 'Charity', 'Cheating in school',
       'Classical music', 'Compassion to animals', 'Dance', 'Darkness',
       'Decision making', 'Dreams', 'Eating to survive', 'Elections', 'Empathy', 'Flying', 'Foreign languages', 'Giving', 'God', 'Health',
       'Hypochondria', 'Judgment calls', 'Law', 'Loneliness', 'Movies',
       'Musical instruments', 'Number of friends', 'Physics',
       'Prioritising workload', 'Rats', 'Reliability', 'Rock', 'Romantic',
       'Science and technology', 'Self-criticism', 'Storm', 'Theatre', 'Emails']]
Chosen = df.values   # 1010 [People] by 41[Categories] Numpy Array, where last column is Email


def find_matches(email, num):
    '''
    :param user_data: Row from Array
    :param num: Number of matches to find
    :return: UserIds of Matches
    '''
    user_data = df.loc[df['Emails'] == email].values[0]
    diff = list(np.argsort([np.linalg.norm(Chosen[i, :39] - user_data[:39], ) for i in range(Chosen.shape[0])]))
    return [Chosen[diff.index(i)][39] for i in range(1, num+1)]


def get_type(email):
    '''
    Get the Type of the user
    :param user_data: Survey answers of User, Type - Numpy Array of double
    :return: type 1, 2, or 3
    '''
    user_data = df.loc[df['Emails'] == email].values[0]
    km = KMeans(n_clusters=3)
    km.fit(Chosen)
    return km.predict(user_data) + 1