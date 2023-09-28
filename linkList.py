class Node:
    def __init__(self, data):
        self.data = data
        self.next = None

class LinkedList:
    def __init__(self):
        self.head = None

    def insert(self, data):
        new_node = Node(data)
        if self.head is None:
            self.head = new_node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = new_node
    def display(self):
        current = self.head
        while current:
            print(current.data, end=" -> ")
            current = current.next
        print("None")

#Input values
input_values = [6, 3, 4, 2, 1]

#Create a linked list and insert input_values

my_linked_list = LinkedList()
for value in input_values:
    my_linked_list.insert(value)

#Display the linked list
my_linked_list.display()