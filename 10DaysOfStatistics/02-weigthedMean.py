
numbers = [10, 40, 30, 50, 20, 10, 40, 30, 50, 20]
weigths = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

result = list(map(lambda x,y: x*y, numbers, weigths))
sumNum =0
sumWei =0

for nums in result:
    sumNum += nums
for numsW in weigths:
    sumWei += numsW

output = sumNum/sumWei
print(round(output,1))