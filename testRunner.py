import os, glob, subprocess, sys
from termcolor import colored

normalprogramPath = "./src/dap.js"
selfTranspiledProgramPath = "./src/self-transpiled.js"
inputDir = "./tests/input"
outputDir = "./tests/output"
inputSuffix = "_in.js"
outputSuffix = "_out.js"
subDir = ""

testsNormal = {
    "generationFailed" : 0,
    "resultsMismatch" : 0,
    "successful" : 0,
    "total" : 0
}

testsSelfTranspiled = {
    "generationFailed" : 0,
    "outputsMismatch" : 0,
    "successful" : 0,
    "total" : 0
}

def executeFile(filePath, text):

    print(colored(f"Execute {text}... ", "yellow"), end="", flush=True)

    command = f"node {filePath}"
    res = subprocess.run(command, shell=True, executable="/bin/bash", stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)

    if res.returncode == 0:
        print(colored("Success", "green"))
    else:
        print(colored("Failure", "grey"))
    
    return (res.returncode == 0, res.stdout)


def generateOutput(programPath, inputFilePath, outputFilePath, message):

    print(colored(f"{message}... ", "yellow"), end="", flush=True)

    command = f"set -o pipefail; node {programPath} {inputFilePath} 2>&1"

    if outputFilePath is not None:
        command += f" | tee {outputFilePath}"

    res = subprocess.run(command, shell=True, executable="/bin/bash", stdout=subprocess.PIPE)

    if res.returncode == 0:
        print(colored("Success", "green"))
    else:
        print(colored("Failure", "red"))

    return (res.returncode == 0, res.stdout)


def evaluateTestCase(testName, inputFilePath, outputFilePath):

    print(colored("Test", "blue"), colored(testName, "magenta"))
    print()

    # Normal test
    print(colored("Normal", "cyan"))
    testsNormal["total"] += 1

    # Generate normal output
    success, normalOutput = generateOutput(normalprogramPath, inputFilePath, outputFilePath, "Generate output")

    if not success:
        testsNormal["generationFailed"] += 1
        return

    # Execute input
    inputRes = executeFile(inputFilePath, "input")

    # Execute output
    outputRes = executeFile(outputFilePath, "output")

    # Compare execution results
    if inputRes != outputRes:
        print(colored("Execution results don't match", "red"))
        testsNormal["resultsMismatch"] += 1
    else:
        print(colored("Execution results match", "green"))
        testsNormal["successful"] += 1

    print()

    # Self-transpiled test
    print(colored("Self-transpiled", "cyan"))
    testsSelfTranspiled["total"] += 1

    # Generate self-transpiled output
    success, selfTranspiledOutput = generateOutput(selfTranspiledProgramPath, inputFilePath, None, "Generate output")

    if not success:
        testsSelfTranspiled["generationFailed"] += 1
        return

    if normalOutput == selfTranspiledOutput:
        print(colored("Outputs match", "green"))
        testsSelfTranspiled["successful"] += 1
    else:
        print(colored("Outputs don't match", "red"))
        testsSelfTranspiled["outputsMismatch"] += 1


# Command line arguments
if len(sys.argv) >= 2:
    subDir = sys.argv[1]

# Get test cases
inputFiles = sorted(glob.glob(f"{inputDir}/{subDir}/**/*{inputSuffix}", recursive=True))

# Self-transpile
selfTranspiled = generateOutput(normalprogramPath, normalprogramPath, selfTranspiledProgramPath, "Self-transpile")[0]
print()

# Loop through test cases
for inputFilePath in inputFiles:

    inputFileDir, inputFileName = os.path.split(inputFilePath)
    testName = inputFileName[:-len(inputSuffix)]
    subfolders = inputFileDir[len(inputDir)::]

    outputFileName = testName + outputSuffix
    outputFileDir = outputDir + subfolders
    outputFilePath = f"{outputFileDir}/{outputFileName}"

    subprocess.run(f"mkdir -p {outputFileDir}", shell=True)

    evaluateTestCase(testName, inputFilePath, outputFilePath)
    print()
    print()

# Print summaries
print(colored("Summary normal", "blue"))
print(f"{colored('Generation failed', 'red')} : {testsNormal['generationFailed']}")
print(f"{colored('Results mismatch ', 'red')} : {testsNormal['generationFailed']}")
print(f"{colored('Succesful        ', 'green')} : {testsNormal['successful']}")
print(f"{colored('Total            ', 'white')} : {testsNormal['total']}")

print()

print(colored("Summary self-transpiled", "blue"))
print(f"{colored('Generation failed', 'red')} : {testsSelfTranspiled['generationFailed']}")
print(f"{colored('Outputs mismatch ', 'red')} : {testsSelfTranspiled['outputsMismatch']}")
print(f"{colored('Succesful        ', 'green')} : {testsSelfTranspiled['successful']}")
print(f"{colored('Total            ', 'white')} : {testsSelfTranspiled['total']}")
