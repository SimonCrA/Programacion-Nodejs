import numpy as np
from scipy import stats

numbers =[64630, 11735, 14216, 99233, 14470, 4978, 73429, 38120, 51135, 67060]
print(np.mean(numbers))
print(np.median(numbers))
print(int(stats.mode(numbers)[0]))