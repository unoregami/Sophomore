def printArray(array):
	i = 0
	j = 0
	while (i < 2):
		print(f"| {array[i][j]} ", end="")
	
		j += 1
		if j < 3:
			continue
		else:
			i += 1
			j = 0
			print("\n")


fruits = [["banana", "apple", "orange"], ["cherry", "kiwi", "peach"]]

printArray(fruits)

print("--------------------------------------------------------")
fruits[1][2] = "guava"
printArray(fruits)
