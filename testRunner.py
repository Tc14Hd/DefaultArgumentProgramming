import os, glob, subprocess, sys
from termcolor import colored

programPath = "src/dap.js"
inputDir = "tests/input"
outputDir = "tests/output"
inputSuffix = "_in.js"
outputSuffix = "_out.js"

def executeFile(filePath, text):

    print(colored(f"Execute {text}... ", "yellow"), end="", flush=True)

    command = f"node {filePath}"
    res = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)

    if res.returncode == 0:
        print(colored("Success", "green"))
        return res.stdout
    else:
        print(colored("Failure", "red"))
        return None

def evaluate(testName, inputFilePath, outputFilePath):

    command = f"node {programPath} {inputFilePath} > {outputFilePath}"

    print(colored("Test", "blue"), colored(testName, "magenta"))
    print(colored("Generate... ", "yellow"), end="", flush=True)

    res = subprocess.run(command, shell=True, stderr=subprocess.DEVNULL)

    if res.returncode == 0:
        print(colored("Success", "green"))
    else:
        print(colored("Failure", "red"))
        return False

    inputRes = executeFile(inputFilePath, "input")

    if (inputRes is None):
        return False

    outputRes = executeFile(outputFilePath, "output")

    if (outputRes is None):
        return False

    if inputRes == outputRes:
        print(colored("Outputs match", "green"))
        return True
    else:
        print(colored("Outputs don't match", "red"))
        return False


subDir = ""
if len(sys.argv) >= 2:
    subDir = sys.argv[1]

inputFiles = sorted(glob.glob(inputDir + "/" + subDir + "/**/*" + inputSuffix, recursive=True))
totalTests = 0
successfulTests = 0

for inputFilePath in inputFiles:

    inputFileDir, inputFileName = os.path.split(inputFilePath)
    testName = inputFileName[:-len(inputSuffix)]
    subfolders = inputFileDir[len(inputDir)::]

    outputFileName = testName + outputSuffix
    outputFileDir = outputDir + subfolders
    outputFilePath = outputFileDir + "/" + outputFileName

    subprocess.run("mkdir -p " + outputFileDir, shell=True)

    success = evaluate(testName, inputFilePath, outputFilePath)
    print()

    totalTests += 1
    if success:
        successfulTests += 1

print(f"Successful tests: {successfulTests}/{totalTests}")
