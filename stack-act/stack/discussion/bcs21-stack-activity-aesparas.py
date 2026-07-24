class Node:
    def __init__(self, title, description):
        self.title = title
        self.description = description
        self.completed = False
        self.next = None

class TaskManager:
    def __init__(self):
        self.head = None

    def add_task(self, title, description):
        node = Node(title, description)
        if not self.head:
            self.head = node
        else:
            current = self.head
            while current.next:
                current = current.next
            current.next = node
        print(f"Task '{title}' added successfully!")

    def mark_task_as_completed(self, title):
        current = self.head
        while current:
            if current.title == title:
                current.completed = True
                print(f"Task '{title}' marked as completed!")
                return
            current = current.next
        print(f"Task '{title}' not found!")

    def display_tasks(self):
        if not self.head:
            print("No tasks in the list.")
        else:
            print("Task List:")
            current = self.head
            while current:
                status = "Completed" if current.completed else "Not Completed"
                print(f"Title: {current.title}, Description: {current.description}, Status: {status}")
                current = current.next

    def run(self):
        while True:
            print("\nTask Manager Menu:")
            print("1. Add your Tasks")
            print("2. Display your Tasks")
            print("3. Mark your Tasks as Completed")
            print("4. Exit")
            choice = input("Please enter your choice (1 | 2 | 3 | 4): ")

            if choice == "1":
                title = input("Enter task title: ")
                description = input("Additional description: ")
                self.add_task(title, description)
            elif choice == "2":
                self.display_tasks()
            elif choice == "3":
                title = input("Type tasks that have been completed: ")
                self.mark_task_as_completed(title)
            elif choice == "4":
                print("Exiting Task Manager.")
                break
            else:
                print("Invalid choice. Please try again.")

if __name__ == "__main__":
    task_manager = TaskManager()
    task_manager.run()
