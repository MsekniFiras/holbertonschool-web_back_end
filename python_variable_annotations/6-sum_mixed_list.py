#!/usr/bin/env python3
"""a type-annotated function"""
from typing import List
from typing import Union


def sum_mixed_list(mxd_lst: List[Union[int, float]]) -> float:
    """return sum of mixed list """
    sum: float = 0
    i: int = 0
    for i in range(len(mxd_lst)):
        sum = sum + mxd_lst[i]
    return sum
