import argparse

parser = argparse.ArgumentParser(description="This program prints recipes \
consisting of the ingredients you provide.")

# optional argument
parser.add_argument("-i1", "--ingredient_1")
# positional argument
parser.add_argument("ingredient_1")
# toggle argument
parser.add_argument("--salt", action="store_true")      # default to False, use as "--salt"
parser.add_argument("--soil", action="store_false")     # default to True, use as "--soil"
parser.add_argument("--pepper", default="False")        # default to False, use as "--pepper 'True'"

parser.add_argument("-i2", "--ingredient_2",
                    choices=["pasta", "rice", "potato", "onion",
                             "garlic", "carrot", "soy_sauce", "tomato_sauce"],
                    help="You need to choose only one ingredient from the list.")

args = parser.parse_args()

print(args.ingredient_2)  # onion
# (the value was chosen by a user from the given options)

print(args.ingredient_2)  # onion
# (the value was chosen by a user from the given options)
