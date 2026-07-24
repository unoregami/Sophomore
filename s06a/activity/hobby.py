hobby = [["Badminton", "Basketball", "Volleyball"], ["Scrabble", "Chess", "Table Tennis"], ["Swimming", "Track and Field", "Bowling"], ["Tennis", "Fencing", "Soccer"]]

i = 0
j = 0

while (i < 4):
	print(f"| {hobby[i][j]} ", end="")
	j += 1
	if j < 3:
		continue
	else:
		i += 1
		j = 0
		print("")