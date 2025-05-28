import requests
import os
import json
from dotenv import load_dotenv
load_dotenv()

API_KEY = os.environ.get("PERPLEXITY_API_KEY")
if not API_KEY:
    raise ValueError("API key not found. Please set the PERPLEXITY_API_KEY environment variable.")

API_URL = "https://api.perplexity.ai/chat/completions"

def recommend_medicine(symptoms):
    headers = {
        "Content-Type": "application/json",
        "Authorization": f"Bearer {API_KEY}"
    }

    prompt = f"""For symptoms like '{symptoms}', list ONLY generic names of 2-3 common OTC medications. 
    Format: comma-separated names. No explanations. Example: 'paracetamol, ibuprofen'"""

    payload = {
        "model": "sonar",
        "messages": [{"role": "user", "content": prompt}]
    }

    response = requests.post(API_URL, json=payload, headers=headers)

    # Raise error for bad status codes
    if response.status_code != 200:
        print("Request failed with status code:", response.status_code)
        print("Response text:", response.text)
        raise Exception("API request failed.")

    try:
        response_data = response.json()
    except json.JSONDecodeError as e:
        print("Failed to parse JSON:", e)
        print("Raw response text:", response.text)
        raise

    # Extract and clean response
    raw_output = response_data['choices'][0]['message']['content'].strip()
    medicines = [m.strip().split('(')[0].strip() for m in raw_output.split(',')]
    return ', '.join(medicines[:3])


# Example usage
symptoms = input("Enter symptoms (e.g., headache, fever): ")
print(recommend_medicine(symptoms))
