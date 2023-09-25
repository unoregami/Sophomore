def computeGrades(q1, q2, q3, cp, final):
    grades = ((((q1 + q2 + q3) / 3) * 0.4) + (cp * 0.1) + (final * 0.5)) * 10       #score is out of 10. Remove * 10 if out of 100
    return grades

def getGrades():
    info = []
    name = input("Student Name: ")
    info.append(name)
    q1 = int(input("Quiz 1: "))
    info.append(q1)
    q2 = int(input("Quiz 2: "))
    info.append(q2)
    q3 = int(input("Quiz 3: "))
    info.append(q3)
    cp = int(input("Class Participation: "))
    info.append(cp)
    final = int(input("Final Examination: "))
    info.append(final)

    info.append(computeGrades(q1, q2, q3, cp, final))
    if info[6] >= 75:
        info.append("Passed")
    else:
        info.append("Failed")

    percentage = int(info[6])
    percentage = str(percentage) + "%"
    info[6] = percentage

    return info




i = 0
student = []
while True:
    student.append(getGrades())
    conf = input("Do you want to add more?: ")
    if conf.lower() != "y":
        break

print("|Name       |Q1         |Q2         |Q3         |CP         |Final      |Grade      |Equivalent |")

i = 0
j = 0
while True:
    if j == 0:
        text = "|{:>11}|"
        print(text.format(student[i][j]), end="")
        j += 1
        continue
    text = "{:>11}|"
    print(text.format(student[i][j]), end="")
    j += 1
    if j >= len(student[i]): #8
        i += 1
        j = 0
        print()
    if i >= len(student): #5
        break

#number of passed students
i = 0
p = 0
f = 0
while i < len(student):
    status = student[i][7]
    if status == "Passed":
        p += 1
    else:
        f += 1
    i += 1

print(f"Total # of Passed Student: {p}\nTotal # of Failed Students: {f}")