import os
import platform

def shutdown():
    system = platform.system()
    if system == "Windows":
        os.system("shutdown /s /t 0")
    elif system == "Linux" or system == "Darwin":  # Darwin is macOS
        os.system("sudo shutdown now")
    else:
        print("Unsupported OS")

if __name__ == "__main__":
    shutdown()
