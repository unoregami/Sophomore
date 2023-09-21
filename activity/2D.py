fruits = [["banana", "apple", "orange"], ["cherry", "kiwi", "peach"]]

i = 0
j = 0

while (i < 2):
	print(f"| {fruits[i][j]} ", end="")
	
	j += 1
	if j < 3:
		continue
	else:
		i += 1
		j = 0
		print("\n")
