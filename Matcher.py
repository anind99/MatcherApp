import numpy as np
from sklearn.cluster import KMeans

Chosen = np.array([])   # 1010 [People] by 42[Categories] Numpy Array, where last two columns are Username and Password


def find_matches(user_data, num):
    '''
    :param user_data: Row from Array
    :param num: Number of matches to find
    :return: UserIds of Matches
    '''

    diff = list(np.argsort([np.linalg.norm(Chosen[i, 2:40] - user_data[2:40], ) for i in range(Chosen.shape[0])]))
    return [Chosen[diff.index(i)][40] for i in range(1, num+1)]


def get_category_and_description(Chosen, user_data, columns):
    
    km = KMeans(n_clusters=3)
    km.fit(Chosen)
    cat = km.predict(user_data)
    predictions = km.predict(Chosen)
    indexes = [[], [], []]
    for i in range(len(predictions)):
        indexes[predictions[i]] += [i]
    type1 = np.average(Chosen[indexes[0]], axis=0)
    type2 = np.average(Chosen[indexes[1]], axis=0)
    type3 = np.average(Chosen[indexes[2]], axis=0)
    if cat == 0:
        diff = type1 - (type2 + type3) / 2
    elif cat == 1:
        diff = type2 - (type1 + type3) / 2
    else:
        diff = type3 - (type2 + type1) / 2

    for i in range(len(diff)):
        if abs(diff[i]) > 0.5:
            print(f'{columns[i]}: {diff[i]}')

    return cat