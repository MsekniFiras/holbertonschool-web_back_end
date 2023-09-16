#!/usr/bin/env python3
"""a type-annotated function"""
from typing import Callable


def make_multiplier(multiplier: float) -> Callable[[float], float]:
    """return callable function: miltiplies a float by multiplier variable """

    return lambda x: x * multiplier
