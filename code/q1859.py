#1859. Sorting the Sentence
s = "is2 sentence4 This1 a3"
print(s)
s = s.split(" ")
print(s)
store = {}
arr = []
for i in s:
    arr.append(i[-1])
    store[i[-1]] = i[0:len(i)-1]
arr.sort()
res = ""
for i in arr:
    res += store[i] + " "
res = res[:len(res)-1]
print(res)

