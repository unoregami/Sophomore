class Node():
    def __init__(self, data):
        self.data = data
        self.next = None

class Queue():
    def __init__(self, capacity):
        self.capacity = capacity
        self.counter = 0
        self.front = None
        self.back = None

    def park(self, car):
        if self.counter == self.capacity:
            return print("Parking lot is full\n")

        new_spot = Node(car)
        self.counter += 1

        if self.front is None:
            self.front = new_spot
            self.back = new_spot
        else:
            self.back.next = new_spot
            self.back = new_spot
        return print(f"{new_spot.data} has successfully parked.\n")

    def unpark(self):
        self.counter -= 1
        
        current_node = self.front
        if self.front is None:
            return print("Currently there are no cars in the Parking Lot.\n")
        else:
            removed_car = self.front
            self.front = self.front.next
            return print(f"{removed_car.data} has left the parking lot\n")
        
    def display(self):
        if self.front is None:
            return print("Parking Lot is empty!\n")
        else:
            current_node = self.front
            i = 1
            while current_node:
                print(f"Parking Lot {i}: {current_node.data}", end="\t|\t")
                if i % 2 == 0:
                    print("\n=========================================================")
                i += 1
                current_node = current_node.next
            print("\n")


ParkingLot = Queue(10)
while True:
    x = input("1 - Display Parking Lot\n2 - Park car\n3 - Unpark car\n0 - Exit\n\nInput: ")
    print()
    if x == "1":
        ParkingLot.display()
    elif x == "2":
        car = input("What type of car: ")
        ParkingLot.park(car)
    elif x == "3":
        ParkingLot.unpark()
    elif x == "0":
        break
    else:
        print("Your input is invalid. Try again!\n")
exit()