import numpy as np

Chosen = np.array([])   # 1010 [People] by 42[Categories] Numpy Array, where last two columns are Username and Password


def find_matches(user_data, num):
    '''
    :param user_data: Row from Array
    :param num: Number of matches to find
    :return: UserIds of Matches
    '''

    diff = list(np.argsort([np.linalg.norm(Chosen[i, :38] - user_data[:38], ) for i in range(1010)]))
    return [Chosen[diff.index(i)][40] for i in range(1, num+1)]
