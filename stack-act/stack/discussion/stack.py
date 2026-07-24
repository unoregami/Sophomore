'''
Stacks
	- a data structure that stores and retrieves items in a last in, first out (LIFO)

Operations of stacks
- push
	- it allows us to store a value onto the stack
- pop
	- it allows us to retrieve and remove a value from the stack
'''
stack = [1, 2, 3, 4, 5]

#push .append method to allow us to add values in an array
stack.append(6)
print(stack)

#pop
stack.pop()
print(stack)

'''
other operations
	isFull
		- boolean operation needed for static stacks. Returns true if the stack is full. Otherwise, returns false
	isEmpty
		- boolean operation needed for all stacks. Returns true if the stack is empty. Otherwise, returns false
'''

class StaticStack:
	def __init__(self, capacity):
		self.stack1 = []
		self.capacity = capacity

	#check the length of the stack to be equal to the predefined capacity
	def isFull(self):
		return len(self.stack1) == self.capacity

	def isEmpty(self):
		return len(self.stack1) == 0

#create a stack with a capacity of 5
sample = StaticStack(5)
sample.stack1 = [1,2,3,4,5]

print(sample.isFull())
sample.stack1 = []
print(sample.stack1)
print(sample.isEmpty())