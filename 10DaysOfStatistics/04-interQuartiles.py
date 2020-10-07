import numpy as np
elements = [10, 40, 30, 50, 20, 10, 40, 30, 50, 20, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 20, 10, 40, 30, 50, 20, 10, 40, 30, 50]
frecuency = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 10, 40, 30, 50, 20, 10, 40, 30, 50, 20]
nums1 = []

for i,j in zip(elements,frecuency):
    # print(i,j)
    for x in range(j):
        nums1.append(i)        
nums = sorted(nums1)
size = len(nums)
print(nums,size)

if size % 2 == 0:
    #quartile 2
    q2 = round(np.median(nums),1)
    
    #quartile 1
    arrQ1 = []
    rangeQ1 = int(size/2)
    q1 = round(np.median(nums[:rangeQ1]),1)
    
    #quartile 3
    arrQ2 = []
    rangeQ2 = int(size/2)
    q3 = round(np.median(nums[rangeQ2:]),1)

    print(round(q3-q1,1))

else:
    #quartile 2
    q2 = round(np.median(nums),1)

    #quartile 1
    arrQ1 = []
    rangeQ1 = int((size-1)/2)
    q1 = round(np.median(nums[:rangeQ1]),1)

    #quartile 3
    arrQ2 = []
    rangeQ2 = int((size-1)/2) + 1
    q3 = round(np.median(nums[rangeQ2:]),1)

    print(round(q3-q1,1))
