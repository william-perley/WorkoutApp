import json
import requests
# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.


def getAllInfo():
    # Use a breakpoint in the code line below to debug your script.
    response = requests.get("https://raw.githubusercontent.com/william-perley/WorkoutApp/main/exercises")

    #with open("https://raw.githubusercontent.com/william-perley/WorkoutApp/main/exercises.json") as f:
     #   data=json.load(f)
    print(response.json())  # Press Ctrl+F8 to toggle the breakpoint.


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    getAllInfo()

# See PyCharm help at https://www.jetbrains.com/help/pycharm/
