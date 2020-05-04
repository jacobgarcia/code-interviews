from cognizant import (print_sequentially, create_base, Counter)

print_sequentially()
add_six = create_base(6)
print(add_six(10))
c = Counter()
c.add(5)
c.add(9)

print(c.retrieve())
