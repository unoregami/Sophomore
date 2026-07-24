import time

floor = (1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 14, 15, 16, 17, 18, 19, 20)
print("You are in the Ground floor.")
present_floor = 0
while True:
    while True:
        target = int(input("Select a Floor: "))
        if target == floor[present_floor]:
            print(f"\nYou are already in the Floor {floor[present_floor]}.")
        elif target <= 0 or target > len(floor) or target == 13:
            print("Please choose another floor.")
        else:
            break
    while (target != floor[present_floor]):
        if present_floor < target:
            print(f"^ Floor {floor[present_floor]} ^")
            present_floor += 1
        else:
            print(f"v Floor {floor[present_floor]} v")
            present_floor -= 1
        time.sleep(1.25)

    print("  *Ding*")
    time.sleep(1.5)
    print(f"\nYou are in Floor {floor[present_floor]} now.")

    cont = input("\nDo you want to use the elevator again? ")
    if cont == "y":
        continue
    else:
        break
