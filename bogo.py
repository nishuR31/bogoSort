import time as t
import random as r

# Get number of elements
size = int(input("Enter number of elements: "))
ls = []

# Get input elements
for i in range(size):
    val = int(input(f"Enter value {i+1}: "))
    ls.append(val)

# Save sorted target
target = sorted(ls)
attempts = 0

print("\nStarting BogoSort... Please wait ")

start = t.time()
while ls != target:
    r.shuffle(ls)
    attempts += 1
end = t.time()

# Output
print("\nList successfully sorted!")
print("Sorted List:", ls)
print("Attempts   :", attempts)
print("Time Taken:", round(end - start, 2), "seconds")
