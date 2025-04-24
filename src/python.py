def my_decorator(func):
    def wrapper():
        print("Before function call")
        func()
        print("After function call")
    return wrapper

@my_decorator   # @ my_decorators is shorter form of say_hello =my_DECORATORS(say_hello)
def say_hello():
    print("Hello!")

say_hello()