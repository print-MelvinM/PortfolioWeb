import requests

FIREBASE_URL = "https://projectdoor-9a3f5-default-rtdb.asia-southeast1.firebasedatabase.app/"
FIREBASE_SECRET = "FRUdwuJPtG55ZPtpkhZBtk6AoBtydNaqLoe0lw6b"

def set_door_status(status):
    url = f"{FIREBASE_URL}/door.json?auth={FIREBASE_SECRET}"
    response = requests.put(url, json=status)
    if response.status_code == 200:
        print("Successfully updated Firebase:", response.json())
    else:
        print("Failed to update Firebase:", response.text)

set_door_status(1)
