"""
Algorithm: 
1. Find the place you can go from Home going school
    - Store A
    - Store B
    - Intersection
2. From these place, find all path
3. keep track of the distances you have traveled as you go
4. Repeat the process until you record all possible paths to school
5. Compare all possible routes based on distance of the travel
6. Find the shortest path
"""

"""
pseudo code
1. Initialize locations as a dictionary of location names mapped to their coordinates.
2. Initialize graph as a dictionary of location names mapped to lists of neighboring locations.
3. Define a function calculate_distance(location1, location2) to calculate the distance between two locations.
4. Define a function shortest_path(graph, start, end) to find the shortest path from the start location to the end location.
    - Initialize distances as a dictionary mapping location names to infinity.
    - Set the distance for the start location to 0.
    - Create a priority queue with a tuple (0, start) and initialize previous_vertices as an empty dictionary.
    - While the priority queue is not empty:
        - Dequeue the vertex with the minimum distance as (current_distance, current_vertex).
        - If the current_distance is greater than distances[current_vertex], continue to the next iteration.
        - Iterate through each neighbor_vertex in the list of neighbors for the current_vertex:
            - Calculate the new distance by adding the current_distance and the distance between current_vertex and neighbor_vertex.
            - If the new distance is less than distances[neighbor_vertex]:
                - Update distances[neighbor_vertex] to the new distance.
                - Enqueue (new distance, neighbor_vertex) into the priority queue.
                - Set previous_vertices[neighbor_vertex] to current_vertex.
    - Initialize shortest_path as an empty list.
    - While the end location is not None:
        - Insert the end location at the beginning of shortest_path.
        - Set the end location to its previous vertex using previous_vertices.
5. Set start_vertex as "Home" and end_vertex as "School".
6. Call shortest_path(graph, start_vertex, end_vertex) to find the shortest path and distances.
7. Print the shortest distance and the shortest path.

"""

import heapq
import math

# Define the locations and their coordinates as a list of tuples
locations = {
    "Home": (49.2, -123.4),
    "Store A": (49.3, 123.5),
    "Store B": (49.3, 123.7),
    "School": (49.3, 123.9),
    "Intersection": (49.2, -123.8)
}

# Define possible routes from each location as a dictionary
graph = {
    "Home": ["Store A", "Store B", "Intersection"],
    "Store A": ["Home", "Store B"],
    "Store B": ["Home", "School"],
    "School": ["Store B", "Intersection"],
    "Intersection": ["Home", "School"]
}

# Function to calculate distance between two points
def calculate_distance(location1, location2):
    x1, y1 = location1
    x2, y2 = location2
    dx = x2 - x1
    dy = y2 - y1
    return math.sqrt(dx**2 + dy**2)

# Function to find the shortest route from Home to School
def shortest_path(graph, start, end):
    distances = {vertex: float('inf') for vertex in graph}
    distances[start] = 0

    priority_queue = [(0, start)]

    previous_vertices = {vertex: None for vertex in graph}

    while priority_queue:
        current_distance, current_vertex = heapq.heappop(priority_queue)

        if current_distance > distances[current_vertex]:
            continue

        for neighbor_vertex in graph[current_vertex]:
            distance = current_distance + calculate_distance(locations[current_vertex], locations[neighbor_vertex])

            if distance < distances[neighbor_vertex]:
                distances[neighbor_vertex] = distance
                heapq.heappush(priority_queue, (distance, neighbor_vertex))
                previous_vertices[neighbor_vertex] = current_vertex

    shortest_path = []
    while end:
        shortest_path.insert(0, end)
        end = previous_vertices[end]

    return distances, shortest_path

start_vertex = "Home"
end_vertex = "School"
shortest_distances, shortest_path = shortest_path(graph, start_vertex, end_vertex)
print("Shortest distance:", shortest_distances[end_vertex])
print("Shortest path:", shortest_path)
