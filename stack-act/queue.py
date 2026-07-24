class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.rear = None
        self.front = self.rear

    def queue(self):
        x = int(input("Input a number: "))
        new = Node(x)
        if self.front is None:
            self.front = new
            self.rear = self.front
            return
        self.rear.next = new
        self.rear = self.rear.next

    def display(self):
        temp = self.front
        while temp:
            print(f"[{temp.data}] ", end="")
            temp = temp.next
        print()

stack = LinkedList()
while True:
    x = int(input("1 - input number\n2 - display number\n3 - exit\n"))
    if x == 1:
        stack.queue()
    elif x == 2:
        stack.display()
    elif x == 3:
        print("Thank you for using the program")
        break
    else:
        print("Input a valid option!")