number = input()
print(len([x for x in map(int, set(list(number))) if int(number) % x == 0]))
