import numpy as np
size = 9
numbers = [3, 7, 8, 5, 12, 14, 21, 13, 18]
nums = sorted(numbers)
print(nums)
if size % 2 == 0:
    #quartile 2
    q2 = int(np.median(nums))
    
    #quartile 1
    arrQ1 = []
    rangeQ1 = int(size/2)
    #recorre nums desde 0 hasta la mitad y obtiene la media
    q1 = int(np.median(nums[:rangeQ1]))
    
    #quartile 3
    arrQ2 = []
    rangeQ2 = int(size/2)
    #recorre nums desde la mitad hasta el final y obtiene la media
    q3 = int(np.median(nums[rangeQ2:]))

    print(q1)
    print(q2)
    print(q3)

else:
    #quartile 2
    q2 = int(np.median(nums))

    #quartile 1
    arrQ1 = []
    rangeQ1 = int((size-1)/2)
    #recorre nums desde 0 hasta la mitad y obtiene la media
    q1 = int(np.median(nums[:rangeQ1]))

    #quartile 3
    arrQ2 = []
    rangeQ2 = int((size-1)/2) + 1
    #recorre nums desde la mitad hasta el final y obtiene la media
    q3 = int(np.median(nums[rangeQ2:]))

    print(q1)
    print(q2)
    print(q3)