#!/usr/bin/python3
#The string Last digit of, followed by
#the number, followed by
#the string is, followed by the last digit of number, followed by
#if the last digit is greater than 5: the string and is greater than 5
#if the last digit is 0: the string and is 0
#if the last digit is less than 6 and not 0: the string and is less than 6 and no#t 0
import random
number = random.randint(-10000, 10000)
if len(number) > 5:
    print("Last digit of {} is {} and is greater than 5")

