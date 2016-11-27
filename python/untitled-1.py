def main():
    s = list(map(int, input('Введите значения через пробел: ').split()))
    print(s)
def main2():
    s = [1,2,3,4,5,6,7,8,9,0]
    print(s[8])
#main2()

def main3():
    s=list(input('Введите 10 элементов').split())
    for i in range(10):
        if (i%2==1):print(s[i], end=' ')
    
