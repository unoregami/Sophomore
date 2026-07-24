#dynamic linked-list
#node --> value | reference --> pointer
class Node:
	def __init__(self, value):
		self.value = value
		self.next = None

class DynamicStack:
	def __init__(self):
		self.head = None
		self.size = 0

	def isEmpty(self):
		return self.size == 0

	def push(self, value):
		new_node = Node(value)
		new_node.next = self.head
		self.head = new_node
		self.size += 1

	def pop(self):
		if self.isEmpty():
			return "Stack is empty"
		popped_value = self.head.value
		self.head = self.head.next
		self.size -= 1
		return popped_value

	def peek(self):
		if self.isEmpty():
			return "Stack is empty"
		return self.head.value

	def display(self):
		current = self.head
		while current:
			print(current.value, end = "->")
			current = current.next
		print("None")


stack = DynamicStack()
stack.push(5)
stack.push(10)
stack.push(25)
stack.push(2)
stack.push(6)

stack.display()
print("Popped values: ", stack.pop())
print("Top of the stack: ", stack.peek())
stack.display()

'''
	Create a Task Manager Python program with basic functionalities:
		(use: classes, methods, lists, loops, input-handling in python)
		- add tasks with a title and description
		- mark tasks as completed 
		- display the list of tasks along with status
		- exit option to exit the task manager

	push in github account and paste URL in SB
		bcs21-stack-activity-fesparas.py
'''