#!/usr/bin/env python3
"""a type-annotated function"""
from typing import List, Iterable, Sequence, Tuple


def element_length(lst: Iterable[Sequence]) -> List[Tuple[Sequence, int]]:
    """return the length of the element of a list"""
    return [(i, len(i)) for i in lst]
