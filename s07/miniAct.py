#[I, S, L, T, O, R, N, S, U, D, L, A, V] - LINUS TORVALDS

class Node:
    def __init__(self, data):
        self.data = data #I
        self.next = None

class Name:
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
input_values = ["I", "S", "L", "T", "O", "R", "N", "S", "U", "D", "L", "A", "V"]
name = "LINUSTORVALDS"

#Create a linked list and insert input_values

my_linked_list = Name()
i = 0
j = 0
while True:
    if name[i] == input_values[j]:
        my_linked_list.insert(input_values[j])
        j = 0
        i += 1
    else:
        j += 1
    if i >= 13:
        break

#Display the linked list
my_linked_list.display()