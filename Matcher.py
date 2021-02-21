import numpy as np
from sklearn.cluster import KMeans

Chosen = np.array([])   # 1010 [People] by 41[Categories] Numpy Array, where last two columns are Password and Email


def find_matches(user_data, num):
    '''
    :param user_data: Row from Array
    :param num: Number of matches to find
    :return: UserIds of Matches
    '''

    diff = list(np.argsort([np.linalg.norm(Chosen[i, :39] - user_data[:39], ) for i in range(Chosen.shape[0])]))
    return [Chosen[diff.index(i)][40] for i in range(1, num+1)]


def get_type(user_data):
    '''
    Get the Type of the user
    :param user_data: Survey answers of User, Type - Numpy Array of double
    :return: type 1, 2, or 3
    '''
    km = KMeans(n_clusters=3)
    km.fit(Chosen)
    return km.predict(user_data) + 1