n = int(input())
 
def foo(n):
    print(n % 10, end=' ')
    n //= 10
    if n:
        foo(n)
    else:
        return
    
foo(n)