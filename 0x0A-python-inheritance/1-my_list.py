#!/usr/bin/python3
""" main - list assending
    Return- list
"""


class MyList(List):
    """ main: inharet list
    Return- lsit"""

    def print_sorted(self):
        """ sorting list """

        sort = sorted(self)
        print(sort)
