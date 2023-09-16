#!/usr/bin/env python3
"""a type-annotated function"""
from typing import List


def sum_list(input_list: List[float]) -> float:
    """return sum of list element"""
    sum: float = 0
    i: int = 0
    for i in range(len(input_list)):
        sum = sum + input_list[i]
    return sum
