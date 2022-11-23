import os, glob, subprocess, sys
from termcolor import colored

normalProgramPath = "./src/dap.js"
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

def executeFile(filePath, message):

    print(colored(f"{message} ", "yellow"), end="", flush=True)

    # Run command
    command = f"node '{filePath}'"
    res = subprocess.run(command, shell=True, stdout=subprocess.PIPE, stderr=subprocess.DEVNULL)

    # Check whether execution was successful
    if res.returncode == 0:
        print(colored("Success", "green"))
    else:
        print(colored("Failure", "grey"))

    return (res.returncode == 0, res.stdout)


def generateOutput(programPath, inputFilePath, outputFilePath, message):

    print(colored(f"{message} ", "yellow"), end="", flush=True)

    # Run command
    command = f"node '{programPath}' '{inputFilePath}' 2>&1"
    res = subprocess.run(command, shell=True, stdout=subprocess.PIPE)

    # Write to file
    if outputFilePath is not None:
        with open(outputFilePath, "wb") as f:
            f.write(res.stdout)

    # Check whether execution was successful
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
    success, normalOutput = generateOutput(normalProgramPath, inputFilePath, outputFilePath, "Generate output...")

    # Generating failed
    if not success:
        testsNormal["generationFailed"] += 1
        return

    # Execute input
    inputRes = executeFile(inputFilePath, "Execute input...  ")

    # Execute output
    outputRes = executeFile(outputFilePath, "Execute output... ")

    # Compare execution results
    if inputRes != outputRes:
        print(colored("Execution results don't match", "red"))
        testsNormal["resultsMismatch"] += 1
    else:
        print(colored("Execution results match", "green"))
        testsNormal["successful"] += 1

    if not selfTranspiledSuccess:
        return

    print()

    # Self-transpiled test
    print(colored("Self-transpiled", "cyan"))
    testsSelfTranspiled["total"] += 1

    # Generate self-transpiled output
    success, selfTranspiledOutput = generateOutput(selfTranspiledProgramPath, inputFilePath, None, "Generate output...")

    # Generating failed
    if not success:
        testsSelfTranspiled["generationFailed"] += 1
        return

    # Compare generation outputs
    if normalOutput == selfTranspiledOutput:
        print(colored("Outputs match", "green"))
        testsSelfTranspiled["successful"] += 1
    else:
        print(colored("Outputs don't match", "red"))
        testsSelfTranspiled["outputsMismatch"] += 1


def selfTranspile():

    print(colored("Test", "blue"), colored("self-transpiling", "magenta"))
    testsNormal["total"] += 1

    # Self-transpile
    success, normalOutput = generateOutput(normalProgramPath, normalProgramPath, selfTranspiledProgramPath, "Self-transpile...")

    # Self-transpiling failed
    if not success:
        testsNormal["generationFailed"] += 1
        return False

    testsNormal["successful"] += 1
    testsSelfTranspiled["total"] += 1

    # Transpile back
    success, selfTranspiledOutput = generateOutput(selfTranspiledProgramPath, normalProgramPath, None, "Transpile back...")

    # Transpiling back failed
    if not success:
        testsSelfTranspiled["generationFailed"] += 1
        return True

    # Compare generation outputs
    if normalOutput == selfTranspiledOutput:
        print(colored("Outputs match", "green"))
        testsSelfTranspiled["successful"] += 1
    else:
        print(colored("Outputs don't match", "red"))
        testsSelfTranspiled["outputsMismatch"] += 1

    return True


def printSummary(text, value, colorPositive, colorZero):

    color = colorPositive if value > 0 else colorZero
    print(colored(f"{text} : {value}", color))


# Command line arguments
if len(sys.argv) >= 2:
    subDir = sys.argv[1]

# Self-transpiling
selfTranspiledSuccess = selfTranspile()
print()
print()

# Get test cases
inputFiles = sorted(glob.glob(f"{inputDir}/{subDir}/**/*{inputSuffix}", recursive=True))

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

printSummary("Generation failed", testsNormal["generationFailed"], "red",   "grey" )
printSummary("Results mismatch ", testsNormal["resultsMismatch"],  "red",   "grey" )
printSummary("Succesful        ", testsNormal["successful"],       "green", "grey" )
printSummary("Total            ", testsNormal["total"],            "white", "white")

print()

print(colored("Summary self-transpiled", "blue"))

if selfTranspiledSuccess:

    printSummary("Generation failed", testsSelfTranspiled["generationFailed"], "red",   "grey" )
    printSummary("Outputs mismatch ", testsSelfTranspiled["outputsMismatch"],  "red",   "grey" )
    printSummary("Succesful        ", testsSelfTranspiled["successful"],       "green", "grey" )
    printSummary("Total            ", testsSelfTranspiled["total"],            "white", "white")

else:
    print(colored("Self-transpiling failed", "red"))
