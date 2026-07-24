class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.top = None

    def push(self):
        x = int(input("Input a number to push: "))
        new = Node(x)
        if self.top is None:
            self.top = new
            self.top.next = None
        else:
            new.next = self.top
            self.top = new

    def display(self):
        temp = self.top
        while temp:
            print(f"[{temp.data}] ", end="")
            temp = temp.next
        print()

stack = LinkedList()
while True:
    x = int(input("1 - input number\n2 - display number\n3 - exit\n"))
    if x == 1:
        stack.push()
    elif x == 2:
        stack.display()
    elif x == 3:
        print("Thank you for using the program")
        break
    else:
        print("Input a valid option!")