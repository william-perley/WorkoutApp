import json
from wsgiref import headers

import requests
# This is a sample Python script.

# Press Shift+F10 to execute it or replace it with your code.
# Press Double Shift to search everywhere for classes, files, tool windows, actions, and settings.

response = requests.get("https://raw.githubusercontent.com/william-perley/WorkoutApp/main/exercises").json()

def getAllInfo():
    # Use a breakpoint in the code line below to debug your script.
    #response = requests.get("https://raw.githubusercontent.com/william-perley/WorkoutApp/main/exercises").json()
    Musclegroups = response["muscleGroups"]
    return Musclegroups


def getChestExercises():
    return  response["muscleGroups"]["chest"]


def getLegExercises():
    return  response["muscleGroups"]["legs"]


def getBackExercises():
    return response["muscleGroups"]["back"]

def getShouldersExercises():

    return response["muscleGroups"]["shoulders"]

def getArmsExercises():

    return response["muscleGroups"]["arms"]


# Press the green button in the gutter to run the script.
if __name__ == '__main__':
    print(getAllInfo())
    print(getChestExercises())
    print(getLegExercises())
    print(getBackExercises())
    print(getShouldersExercises())
    print(getArmsExercises())