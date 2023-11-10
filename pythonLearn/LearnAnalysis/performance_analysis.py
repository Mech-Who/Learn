import cProfile

from my_math import product

cProfile.run('product(1, 2)', 'my_math.profile')
